import type { Metadata } from "next";
import CatalogueBook from "../CatalogueBook";

const lineUrl = "https://lin.ee/t03g62O";
const cataloguePdfUrl = "/catalogue/taan-home-collection-2026.pdf";

export const metadata: Metadata = {
  title: "TAAN HOME Collection 2026 | Online Catalogue",
  description:
    "Browse the TAAN HOME Collection 2026 online catalogue, featuring modern furniture, refined materials and considered forms.",
  alternates: {
    canonical: "/catalogue",
  },
  openGraph: {
    title: "TAAN HOME Collection 2026",
    description:
      "Explore the complete TAAN HOME furniture collection in our online catalogue.",
    url: "/catalogue",
    siteName: "TAAN HOME",
    type: "website",
    images: [
      {
        url: "/images/taan-catalogue-cover.webp",
        alt: "TAAN HOME Collection 2026 catalogue",
      },
    ],
  },
};

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon">
    <path d="M3 10h13M11 5l5 5-5 5" />
  </svg>
);

export default function CataloguePage() {
  return (
    <main className="standalone-catalogue">
      <header className="catalogue-page-header">
        <a className="wordmark" href="/" aria-label="TAAN HOME, back to home">
          TAAN <span>HOME</span>
        </a>
        <a
          className="header-cta"
          href={lineUrl}
          target="_blank"
          rel="noreferrer"
          data-meta-event="Contact"
          data-meta-content="Catalogue page enquiry"
          data-meta-category="LINE enquiry"
        >
          Enquire via LINE <Arrow />
        </a>
      </header>

      <section className="catalogue-page-intro">
        <p className="eyebrow">TAAN Collection 2026</p>
        <div>
          <h1>Explore the complete collection.</h1>
          <p>
            Browse 32 pages of TAAN HOME furniture, materials and considered
            forms. Use the arrows or swipe to turn the pages.
          </p>
        </div>
      </section>

      <section className="catalogue-page-book" aria-label="TAAN HOME online catalogue">
        <CatalogueBook />
        <div className="catalogue-page-actions">
          <a
            className="text-link dark-link"
            href={cataloguePdfUrl}
            download="TAAN-HOME-Collection-2026.pdf"
            data-meta-event="ViewContent"
            data-meta-content="TAAN Collection 2026 PDF"
            data-meta-category="Catalogue"
          >
            Download catalogue PDF
          </a>
          <a
            className="button button-dark"
            href={lineUrl}
            target="_blank"
            rel="noreferrer"
            data-meta-event="Contact"
            data-meta-content="Catalogue consultation"
            data-meta-category="LINE enquiry"
          >
            Contact TAAN HOME <Arrow />
          </a>
        </div>
      </section>

      <footer className="catalogue-page-footer">
        <a className="wordmark footer-mark" href="/">
          TAAN <span>HOME</span>
        </a>
        <p>Modern furniture for considered living.</p>
        <p>© {new Date().getFullYear()} TAAN HOME</p>
      </footer>
    </main>
  );
}
