"use client";

import { useEffect, useRef, useState } from "react";

const pixelId = "1084027037571279";
const consentKey = "taan_meta_marketing_consent";

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & {
      callMethod?: (...args: unknown[]) => void;
      queue?: unknown[][];
      loaded?: boolean;
      version?: string;
      push?: (...args: unknown[]) => void;
    };
    _fbq?: Window["fbq"];
  }
}

type TrackingEvent = {
  name:
    | "PageView"
    | "ViewContent"
    | "Contact"
    | "ShowroomDirections"
    | "DownloadCatalogue";
  params?: Record<string, string>;
};

function createEventId() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function sendServerEvent(event: TrackingEvent, eventId: string) {
  void fetch("/api/meta-event", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      event_name: event.name,
      event_id: eventId,
      event_source_url: window.location.href,
      custom_data: event.params ?? {},
    }),
    keepalive: true,
  }).catch(() => undefined);
}

function track(event: TrackingEvent) {
  const eventId = createEventId();
  const method = event.name === "DownloadCatalogue" ? "trackCustom" : "track";
  window.fbq?.(method, event.name, event.params ?? {}, { eventID: eventId });
  sendServerEvent(event, eventId);
}

function collectionName(pathname: string) {
  const slug = pathname.match(/^\/collections\/([^/]+)\/?$/)?.[1];
  if (!slug) return null;

  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function isLineLink(anchor: HTMLAnchorElement) {
  try {
    return new URL(anchor.href, window.location.href).hostname === "lin.ee";
  } catch {
    return false;
  }
}

function isCatalogueDownload(anchor: HTMLAnchorElement) {
  try {
    const url = new URL(anchor.href, window.location.href);
    return anchor.hasAttribute("download")
      && url.origin === window.location.origin
      && url.pathname.startsWith("/catalogue/")
      && url.pathname.endsWith(".pdf");
  } catch {
    return false;
  }
}

function loadPixel() {
  if (window.fbq) return;

  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue?.push(args);
  } as Window["fbq"];

  if (!fbq) return;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  window.fbq = fbq;
  window._fbq = fbq;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);

  fbq("init", pixelId);
  track({ name: "PageView" });
}

export default function MetaPixel() {
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(null);
  const trackedCollection = useRef<string | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(consentKey);
    if (saved === "accepted" || saved === "declined") {
      queueMicrotask(() => setConsent(saved));
    }
    if (saved === "accepted") loadPixel();
  }, []);

  useEffect(() => {
    if (consent !== "accepted") return;

    const currentCollection = collectionName(window.location.pathname);
    if (currentCollection && trackedCollection.current !== window.location.pathname) {
      trackedCollection.current = window.location.pathname;
      track({
        name: "ViewContent",
        params: {
          content_name: `${currentCollection} Collection`,
          content_category: "Collection",
          content_type: "product_group",
        },
      });
    }

    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const target = event.target.closest<HTMLElement>("[data-meta-event]");
      const anchor = event.target.closest<HTMLAnchorElement>("a[href]");
      let name = target?.dataset.metaEvent as TrackingEvent["name"] | undefined;

      if (!name && anchor && isLineLink(anchor)) name = "Contact";
      if (!name && anchor && isCatalogueDownload(anchor)) name = "DownloadCatalogue";
      if (!name) return;

      // Collection cards used to emit ViewContent on click. The destination page
      // now emits it on view, so skip the old click event to avoid double counting.
      if (
        name === "ViewContent"
        && anchor
        && new URL(anchor.href, window.location.href).pathname.startsWith("/collections/")
      ) return;

      track({
        name,
        params: {
          content_name:
            target?.dataset.metaContent
            ?? anchor?.getAttribute("download")
            ?? anchor?.textContent?.trim()
            ?? document.title,
          content_category:
            target?.dataset.metaCategory
            ?? (name === "Contact"
              ? "LINE enquiry"
              : name === "DownloadCatalogue"
                ? "Catalogue"
                : "Website"),
        },
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [consent]);

  const choose = (value: "accepted" | "declined") => {
    window.localStorage.setItem(consentKey, value);
    setConsent(value);
    if (value === "accepted") loadPixel();
  };

  return (
    <>
      <noscript>
        {/* The pixel is consent-gated, so no tracking image is emitted without JavaScript. */}
      </noscript>
      {consent === null && (
        <aside className="cookie-consent" aria-label="Marketing cookie preferences">
          <p>
            We use Meta tracking to understand visits and enquiries and improve
            our advertising. You can accept or decline marketing cookies.
          </p>
          <div>
            <button type="button" onClick={() => choose("declined")}>Decline</button>
            <button type="button" className="accept-cookies" onClick={() => choose("accepted")}>Accept</button>
          </div>
        </aside>
      )}
    </>
  );
}
