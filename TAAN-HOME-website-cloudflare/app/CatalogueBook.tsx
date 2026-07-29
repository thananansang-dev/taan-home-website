"use client";

import { useEffect, useRef, useState } from "react";

const pageCount = 71;

const pagePath = (page: number) =>
  `/catalogue/pages/page-${String(page).padStart(2, "0")}.webp`;

export default function CatalogueBook() {
  const [spread, setSpread] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const touchStart = useRef<number | null>(null);
  const maxSpread = Math.ceil((pageCount - 1) / 2);
  const leftPage = spread === 0 ? null : spread * 2;
  const rightPage = spread === 0 ? 1 : spread * 2 + 1;

  const previous = () => setSpread((value) => Math.max(0, value - 1));
  const next = () => setSpread((value) => Math.min(maxSpread, value + 1));

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
      if (event.key === "Escape") setExpanded(false);
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = expanded ? "hidden" : "";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [expanded]);

  const renderBook = (openOnClick: boolean) => (
    <div
      className="book-shell"
      onTouchStart={(event) => {
        touchStart.current = event.changedTouches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const end = event.changedTouches[0]?.clientX ?? touchStart.current;
        const distance = end - touchStart.current;
        if (distance > 55) previous();
        if (distance < -55) next();
        touchStart.current = null;
      }}
    >
      <div
        className="book-spread"
        key={spread}
        onClick={openOnClick ? () => setExpanded(true) : undefined}
        onKeyDown={openOnClick ? (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setExpanded(true);
          }
        } : undefined}
        role={openOnClick ? "button" : undefined}
        tabIndex={openOnClick ? 0 : undefined}
        aria-label={openOnClick ? "Open catalogue full screen" : undefined}
        data-meta-event={openOnClick ? "ViewContent" : undefined}
        data-meta-content={openOnClick ? "TAAN Collection 2026 full screen" : undefined}
        data-meta-category={openOnClick ? "Catalogue" : undefined}
      >
        <figure className={`book-page left-page${leftPage ? "" : " blank-page"}`}>
          {leftPage && <img src={pagePath(leftPage)} alt={`TAAN catalogue page ${leftPage}`} />}
        </figure>
        <figure className={`book-page right-page${rightPage <= pageCount ? "" : " blank-page"}`}>
          {rightPage <= pageCount && <img src={pagePath(rightPage)} alt={`TAAN catalogue page ${rightPage}`} />}
        </figure>
      </div>

      <div className="book-controls">
        <button type="button" onClick={previous} disabled={spread === 0} aria-label="Previous two pages">
          <span aria-hidden="true">←</span> Previous
        </button>
        <p aria-live="polite">
          {spread === 0
            ? `Page 1 of ${pageCount}`
            : rightPage <= pageCount
              ? `Pages ${leftPage}–${rightPage} of ${pageCount}`
              : `Page ${leftPage} of ${pageCount}`}
        </p>
        <button type="button" onClick={next} disabled={spread === maxSpread} aria-label="Next two pages">
          Next <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="catalogue-viewer">
        <div className="viewer-topline">
          <p>Click the catalogue for full screen · use arrows or swipe to turn pages</p>
          <button type="button" className="expand-book" onClick={() => setExpanded(true)} data-meta-event="ViewContent" data-meta-content="TAAN Collection 2026 full screen" data-meta-category="Catalogue">
            Open full screen
          </button>
        </div>
        {renderBook(true)}
      </div>

      {expanded && (
        <div className="book-overlay" role="dialog" aria-modal="true" aria-label="TAAN catalogue full screen viewer">
          <button type="button" className="close-book" onClick={() => setExpanded(false)} aria-label="Close full screen catalogue">
            Close ×
          </button>
          {renderBook(false)}
        </div>
      )}
    </>
  );
}
