import type { Metadata } from "next";
import CatalogueBook from "../../CatalogueBook";

const lineUrl = "https://lin.ee/t03g62O";
const cataloguePdfUrl = "/catalogue/taan-home-collection-2026.pdf";

export const metadata: Metadata = {
  title: "Dining Table & Chair Collection | TAAN HOME",
  description: "Discover the Duo Table and Velin Chair — sculptural dining pieces selected for refined, contemporary interiors.",
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
        <a className="wordmark" href="/" aria-label="TAAN HOME, back to home">TAAN <span>HOME</span></a>
        <nav aria-label="Collection navigation">
          <a href="/">Home</a>
          <a href="#collection">Collection</a>
          <a href="#dining-catalogue">Catalogue</a>
        </nav>
        <a className="header-cta" href={lineUrl} target="_blank" rel="noreferrer">Enquire via LINE <Arrow /></a>
      </header>

      <section className="dining-hero">
        <img src="/images/dining-duo-table.webp" alt="Duo dining table in a refined double-volume interior" />
        <div className="dining-hero-shade" />
        <div className="dining-hero-copy">
          <p className="eyebrow light">Dining Table &amp; Chair</p>
          <h1>The art of<br />gathering.</h1>
          <p>A considered collection where sculptural silhouettes, quiet comfort and refined materiality come together around the table.</p>
          <a className="text-link light-link" href="#collection">Explore the collection <Arrow /></a>
        </div>
      </section>

      <section className="dining-manifesto" id="collection">
        <p className="eyebrow">TAAN HOME · Dining Collection</p>
        <div>
          <h2>Designed for the<br />moments in between.</h2>
          <p>From everyday conversations to long evenings shared with friends, the dining room is where life naturally gathers. Our edit brings together confident form and effortless comfort—pieces designed to feel distinctive, yet easy to live with.</p>
        </div>
      </section>

      <section className="dining-feature dining-feature-duo">
        <div className="dining-feature-image">
          <img src="/images/dining-duo-table.webp" alt="Duo Table with sculptural crossed metal bases" />
          <span>01 — Dining Table</span>
        </div>
        <div className="dining-feature-copy">
          <p className="eyebrow">Sculptural balance</p>
          <h2>Duo Table</h2>
          <p>A generous tabletop appears to float above two expressive bases. The intersecting geometry gives Duo its architectural presence while keeping the composition visually light and beautifully balanced.</p>
          <div className="dining-detail-list">
            <p><span>Character</span>Sculptural · Architectural · Refined</p>
            <p><span>Designed for</span>Contemporary dining spaces</p>
          </div>
          <a className="button button-dark" href={lineUrl} target="_blank" rel="noreferrer">Enquire about Duo <Arrow /></a>
        </div>
      </section>

      <section className="dining-feature dining-feature-velin">
        <div className="dining-feature-copy">
          <p className="eyebrow">Quiet comfort</p>
          <h2>Velin Chair</h2>
          <p>Velin pairs a softly tailored seat with a slender dark frame. Its curved arms and gentle proportions create an inviting silhouette—comfortable through long meals and elegant from every angle.</p>
          <div className="dining-detail-list">
            <p><span>Character</span>Soft · Tailored · Timeless</p>
            <p><span>Designed for</span>Dining and occasional seating</p>
          </div>
          <a className="button button-dark" href={lineUrl} target="_blank" rel="noreferrer">Enquire about Velin <Arrow /></a>
        </div>
        <div className="dining-feature-image">
          <img src="/images/dining-velin-chair.webp" alt="Velin Chair with light upholstered seat and dark frame" />
          <span>02 — Dining Chair</span>
        </div>
      </section>

      <section className="dining-note">
        <p>Complete the setting</p>
        <h2>One room.<br /><em>Endless occasions.</em></h2>
        <p>Speak with our team for size, finish and pairing recommendations tailored to your space.</p>
        <a className="text-link dark-link" href={lineUrl} target="_blank" rel="noreferrer">Start a conversation <Arrow /></a>
      </section>

      <section className="dining-catalogue" id="dining-catalogue">
        <div className="dining-catalogue-heading">
          <div><p className="eyebrow">TAAN Collection 2026</p><h2>Discover the<br />full collection.</h2></div>
          <p>Browse the complete TAAN HOME catalogue online, or download the PDF to keep as a reference for your project.</p>
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
