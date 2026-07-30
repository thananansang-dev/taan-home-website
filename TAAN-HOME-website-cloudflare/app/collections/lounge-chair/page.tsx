import type { Metadata } from "next";
import CatalogueBook from "../../CatalogueBook";
import CatalogueDownload from "../../CatalogueDownload";

const lineUrl = "https://lin.ee/t03g62O";

export const metadata: Metadata = {
  title: "Lounge Chair Collection | TAAN HOME",
  description: "Discover the Teddy Lounge Chair and browse the dedicated TAAN HOME Lounge Chair Catalogue.",
  robots: { index: false, follow: false },
};

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon">
    <path d="M3 10h13M11 5l5 5-5 5" />
  </svg>
);

export default function LoungeChairCollectionPage() {
  return (
    <main className="dining-collection-page lounge-collection-page">
      <header className="collection-page-header">
        <a className="wordmark" href="/" aria-label="TAAN HOME, back to home">TAAN <span>HOME</span></a>
        <nav aria-label="Collection navigation">
          <a href="/">Home</a>
          <a href="#collection">Collection</a>
          <a href="#lounge-catalogue">Catalogue</a>
        </nav>
        <a className="header-cta" href={lineUrl} target="_blank" rel="noreferrer">Enquire via LINE <Arrow /></a>
      </header>

      <section className="dining-hero lounge-hero">
        <img src="/images/lounge-teddy.webp" alt="Teddy Lounge Chair in softly textured grey upholstery" />
        <div className="dining-hero-shade" />
        <div className="dining-hero-copy">
          <p className="eyebrow light">TAAN HOME · Lounge Chair Collection</p>
          <h1>A quieter<br />place to sit.</h1>
          <p>Expressive silhouettes and enveloping comfort create a personal retreat within the room.</p>
          <a className="text-link light-link" href="#collection">Discover Teddy <Arrow /></a>
        </div>
      </section>

      <section className="dining-manifesto" id="collection">
        <p className="eyebrow">A chair of your own</p>
        <div>
          <h2>Comfort with<br />character.</h2>
          <p>Our lounge chairs are selected for the way they balance sculptural presence with a genuine sense of ease—distinctive enough to stand alone and considered enough to live alongside the room.</p>
        </div>
      </section>

      <section className="dining-feature dining-feature-duo lounge-feature-teddy">
        <div className="dining-feature-image">
          <img src="/images/lounge-teddy.webp" alt="Teddy Lounge Chair with rounded upholstery and leather side detail" />
          <span>01 — Lounge Chair</span>
        </div>
        <div className="dining-feature-copy">
          <p className="eyebrow">Softly sculpted</p>
          <h2>Teddy</h2>
          <p>Teddy wraps generous cushioning in a softly rounded silhouette. Its tactile upholstery and tailored leather side detail bring warmth, comfort and a quietly distinctive presence to a reading corner or living space.</p>
          <div className="dining-detail-list">
            <p><span>Character</span>Soft · Enveloping · Sculptural</p>
            <p><span>Designed for</span>Reading corners and living spaces</p>
          </div>
          <a className="button button-dark" href={lineUrl} target="_blank" rel="noreferrer">Enquire about Teddy <Arrow /></a>
        </div>
      </section>

      <section className="dining-note lounge-note">
        <p>Your personal retreat</p>
        <h2>Settle in.<br /><em>Stay awhile.</em></h2>
        <p>Speak with our team for dimensions, upholstery and finish recommendations tailored to your space.</p>
        <a className="text-link dark-link" href={lineUrl} target="_blank" rel="noreferrer">Start a conversation <Arrow /></a>
      </section>

      <section className="dining-catalogue lounge-catalogue" id="lounge-catalogue">
        <div className="dining-catalogue-heading">
          <div><p className="eyebrow">TAAN Lounge Chair Collection</p><h2>Explore the<br />complete edit.</h2></div>
          <p>Browse all 54 pages of the dedicated TAAN Lounge Chair Catalogue online, or download the PDF to keep as a reference for your project.</p>
        </div>
        <CatalogueBook
          catalogueName="TAAN Lounge Chair Collection"
          pageCount={54}
          pageDirectory="/catalogue/lounge-chair/pages"
        />
        <div className="dining-catalogue-actions">
          <CatalogueDownload
            apiUrl="/api/catalogue/lounge-chair"
            catalogueName="TAAN Lounge Chair Catalogue"
            fileName="TAAN-Armchair-Catalogue.pdf"
            fileSizeBytes={37_003_365}
            fileSizeLabel="37.00 MB"
            pageCount={54}
            viewUrl="https://catalogue.taanhome.com/TAAN%20ARMCHAIR%20%281%29.pdf"
          />
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
