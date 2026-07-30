const cataloguePdfUrl =
  "https://catalogue.taanhome.com/TAAN%20COFFEE%20TABLE%20CATALOG%20%282%29.pdf";

export async function GET(request: Request) {
  const upstream = await fetch(cataloguePdfUrl, {
    headers: { accept: "application/pdf" },
    signal: request.signal,
  });

  if (!upstream.ok || !upstream.body) {
    return Response.json(
      { error: "catalogue_unavailable" },
      { status: 502 },
    );
  }

  const headers = new Headers({
    "cache-control": "public, max-age=14400",
    "content-disposition":
      'attachment; filename="TAAN-Coffee-Table-Catalogue.pdf"',
    "content-type": "application/pdf",
    "x-content-type-options": "nosniff",
  });

  const contentLength = upstream.headers.get("content-length");
  if (contentLength) headers.set("content-length", contentLength);

  return new Response(upstream.body, {
    status: 200,
    headers,
  });
}
