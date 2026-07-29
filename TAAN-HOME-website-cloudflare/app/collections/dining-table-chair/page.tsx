import type { Metadata } from "next";
import CatalogueBook from "../../CatalogueBook";

const lineUrl = "https://lin.ee/t03g62O";
const cataloguePdfUrl = "/catalogue/taan-home-collection-2026.pdf";

export const metadata: Metadata = {
  title: "Dining Table & Chair Collection | TAAN HOME",
  description: "Explore selected TAAN HOME dining tables and chairs, created with considered proportions and refined materials.",
  robots: { index: false, follow: false },
};

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon">
    <path d="M3 10h13M11 5l5 5-5 5" />
  </svg>
);

export default function DiningCollectionPage() {
  return (
    <main className="dining-collection-page">
      <header className="collection-page-header">
        <a className="wordmark" href="/" aria-label="TAAN HOME, back to home">
          TAAN <span>HOME</span>
        </a>
        <nav aria-label="Collection navigation">
          <a href="/">Home</a>
          <a href="#selected-pieces">Selected pieces</a>
          <a href="#dining-catalogue">Catalogue</a>
        </nav>
        <a className="header-cta" href={lineUrl} target="_blank" rel="noreferrer">
          Enquire via LINE <Arrow />
        </a>
      </header>

      <section className="dining-hero">
        <img src="/images/taan-dining.webp" alt="TAAN HOME dining table and upholstered dining chairs" />
        <div className="dining-hero-shade" />
        <div className="dining-hero-copy">
          <p className="eyebrow light">The dining collection</p>
          <h1>Made for<br />gathering.</h1>
          <p>Dining tables and chairs defined by sculptural form, tactile finishes and proportions made for everyday living.</p>
        </div>
      </section>

      <section className="dining-intro" id="selected-pieces">
        <div>
          <p className="eyebrow">Selected pieces</p>
          <h2>Two considered<br />dining settings.</h2>
        </div>
        <p>A focused introduction to the collection. Each piece can be tailored with material and finish guidance from the TAAN HOME team.</p>
      </section>

      <section className="dining-products" aria-label="Selected dining products">
        <article className="dining-product">
          <div className="dining-product-image">
            <img src="/catalogue/pages/page-06.webp" alt="BRT2026 dining table by TAAN HOME" />
          </div>
          <div className="dining-product-meta">
            <span>01</span>
            <div><h2>BRT2026</h2><p>Dining table · Refined stone surface</p></div>
            <a className="text-link dark-link" href={lineUrl} target="_blank" rel="noreferrer">Enquire <Arrow /></a>
          </div>
        </article>

        <article className="dining-product dining-product-reverse">
          <div className="dining-product-image">
            <img src="/catalogue/pages/page-08.webp" alt="BRT21086 dining table with DY-2510 dining chairs by TAAN HOME" />
          </div>
          <div className="dining-product-meta">
            <span>02</span>
            <div><h2>BRT21086</h2><p>Dining table · Paired with DY-2510 chair</p></div>
            <a className="text-link dark-link" href={lineUrl} target="_blank" rel="noreferrer">Enquire <Arrow /></a>
          </div>
        </article>
      </section>

      <section className="dining-catalogue" id="dining-catalogue">
        <div className="dining-catalogue-heading">
          <div><p className="eyebrow">TAAN Collection 2026</p><h2>Continue through<br />the catalogue.</h2></div>
          <p>Explore the complete collection online, or download the full PDF to keep as a reference.</p>
        </div>
        <CatalogueBook />
        <div className="dining-catalogue-actions">
          <a className="text-link dark-link" href={cataloguePdfUrl} download="TAAN-HOME-Collection-2026.pdf">Download catalogue PDF</a>
          <a className="button button-dark" href={lineUrl} target="_blank" rel="noreferrer">Contact TAAN HOME <Arrow /></a>
        </div>
      </section>

      <footer>
        <a className="wordmark footer-mark" href="/">TAAN <span>HOME</span></a>
        <p>Modern furniture for considered living.</p>
        <p>© {new Date().getFullYear()} TAAN HOME</p>
      </footer>
    </main>
  );
}
