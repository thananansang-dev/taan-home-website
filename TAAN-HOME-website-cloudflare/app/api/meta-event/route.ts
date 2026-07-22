const graphVersion = "v25.0";
const allowedEvents = new Set([
  "PageView",
  "ViewContent",
  "Contact",
  "ShowroomDirections",
]);

type EventBody = {
  event_name?: string;
  event_id?: string;
  event_source_url?: string;
  custom_data?: Record<string, unknown>;
};

function getCookie(request: Request, name: string) {
  const cookie = request.headers.get("cookie") ?? "";
  const part = cookie.split(";").map((item) => item.trim()).find((item) => item.startsWith(`${name}=`));
  return part ? decodeURIComponent(part.slice(name.length + 1)) : undefined;
}

function clientIp(request: Request) {
  return request.headers.get("cf-connecting-ip")
    ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    ?? undefined;
}

export async function POST(request: Request) {
  const pixelId = process.env.META_PIXEL_ID ?? "1084027037571279";
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;

  if (!accessToken) {
    return Response.json({ accepted: false, reason: "capi_not_configured" }, { status: 202 });
  }

  let body: EventBody;
  try {
    body = await request.json() as EventBody;
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  if (!body.event_name || !allowedEvents.has(body.event_name) || !body.event_id) {
    return Response.json({ error: "invalid_event" }, { status: 400 });
  }

  const requestUrl = new URL(request.url);
  let sourceUrl = request.headers.get("referer") ?? requestUrl.origin;
  if (body.event_source_url) {
    try {
      const candidate = new URL(body.event_source_url);
      if (candidate.origin === requestUrl.origin) sourceUrl = candidate.toString();
    } catch {
      // Keep the same-origin fallback.
    }
  }

  const userData: Record<string, string> = {};
  const ip = clientIp(request);
  const userAgent = request.headers.get("user-agent");
  const fbp = getCookie(request, "_fbp");
  const fbc = getCookie(request, "_fbc");
  if (ip) userData.client_ip_address = ip;
  if (userAgent) userData.client_user_agent = userAgent;
  if (fbp) userData.fbp = fbp;
  if (fbc) userData.fbc = fbc;

  const payload: Record<string, unknown> = {
    data: [{
      event_name: body.event_name,
      event_time: Math.floor(Date.now() / 1000),
      event_id: body.event_id,
      action_source: "website",
      event_source_url: sourceUrl,
      user_data: userData,
      custom_data: body.custom_data ?? {},
    }],
  };

  if (process.env.META_TEST_EVENT_CODE) {
    payload.test_event_code = process.env.META_TEST_EVENT_CODE;
  }

  const response = await fetch(
    `https://graph.facebook.com/${graphVersion}/${pixelId}/events?access_token=${encodeURIComponent(accessToken)}`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    },
  );

  const result = await response.json().catch(() => null);
  if (!response.ok) {
    console.error("Meta CAPI request failed", response.status, result);
    return Response.json({ accepted: false }, { status: 502 });
  }

  return Response.json({ accepted: true });
}
