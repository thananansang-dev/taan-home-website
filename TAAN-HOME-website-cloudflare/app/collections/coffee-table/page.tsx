import type { Metadata } from "next";
import CatalogueBook from "../../CatalogueBook";
import CatalogueDownload from "../../CatalogueDownload";

const lineUrl = "https://lin.ee/t03g62O";

export const metadata: Metadata = {
  title: "Coffee Table Collection | TAAN HOME",
  description: "Discover the Verve Coffee Table and browse the dedicated TAAN HOME Coffee Table Catalogue.",
  robots: { index: false, follow: false },
};

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon">
    <path d="M3 10h13M11 5l5 5-5 5" />
  </svg>
);

export default function CoffeeTableCollectionPage() {
  return (
    <main className="dining-collection-page coffee-collection-page">
      <header className="collection-page-header">
        <a className="wordmark" href="/" aria-label="TAAN HOME, back to home">TAAN <span>HOME</span></a>
        <nav aria-label="Collection navigation">
          <a href="/">Home</a>
          <a href="#collection">Collection</a>
          <a href="#coffee-catalogue">Catalogue</a>
        </nav>
        <a className="header-cta" href={lineUrl} target="_blank" rel="noreferrer">Enquire via LINE <Arrow /></a>
      </header>

      <section className="dining-hero coffee-hero">
        <img src="/images/coffee-verve.webp" alt="Verve Coffee Table with white stone top and a flowing dark inlay" />
        <div className="dining-hero-shade" />
        <div className="dining-hero-copy">
          <p className="eyebrow light">TAAN HOME · Coffee Table Collection</p>
          <h1>Form at<br />the centre.</h1>
          <p>Sculptural surfaces and grounded proportions bring quiet character to the heart of the living room.</p>
          <a className="text-link light-link" href="#collection">Discover Verve <Arrow /></a>
        </div>
      </section>

      <section className="dining-manifesto" id="collection">
        <p className="eyebrow">The centre of living</p>
        <div>
          <h2>A focal point,<br />drawn with restraint.</h2>
          <p>Our coffee tables balance expressive material with calm geometry. Each piece is selected to anchor a seating arrangement without overwhelming it—functional in everyday life and distinctive from every angle.</p>
        </div>
      </section>

      <section className="dining-feature dining-feature-duo coffee-feature-verve">
        <div className="dining-feature-image">
          <img src="/images/coffee-verve.webp" alt="Verve Coffee Table in a refined contemporary living space" />
          <span>01 — Coffee Table</span>
        </div>
        <div className="dining-feature-copy">
          <p className="eyebrow">Flowing contrast</p>
          <h2>Verve</h2>
          <p>A broad stone surface is traced by a fluid dark inlay, giving Verve its distinctive sense of movement. Rounded corners and a grounded base soften the architectural form for a composed, contemporary presence.</p>
          <div className="dining-detail-list">
            <p><span>Character</span>Sculptural · Graphic · Refined</p>
            <p><span>Designed for</span>Contemporary living spaces</p>
          </div>
          <a className="button button-dark" href={lineUrl} target="_blank" rel="noreferrer">Enquire about Verve <Arrow /></a>
        </div>
      </section>

      <section className="dining-note coffee-note">
        <p>Complete your living space</p>
        <h2>Quietly practical.<br /><em>Distinctly yours.</em></h2>
        <p>Speak with our team for dimensions, materials and pairing recommendations tailored to your sofa and room.</p>
        <a className="text-link dark-link" href={lineUrl} target="_blank" rel="noreferrer">Start a conversation <Arrow /></a>
      </section>

      <section className="dining-catalogue coffee-catalogue" id="coffee-catalogue">
        <div className="dining-catalogue-heading">
          <div><p className="eyebrow">TAAN Coffee Table Collection</p><h2>Explore the<br />complete edit.</h2></div>
          <p>Browse all 57 pages of the dedicated TAAN Coffee Table Catalogue online, or download the PDF to keep as a reference for your project.</p>
        </div>
        <CatalogueBook
          catalogueName="TAAN Coffee Table Collection"
          pageCount={57}
          pageDirectory="/catalogue/coffee-table/pages"
        />
        <div className="dining-catalogue-actions">
          <CatalogueDownload
            apiUrl="/api/catalogue/coffee-table"
            catalogueName="TAAN Coffee Table Catalogue"
            fileName="TAAN-Coffee-Table-Catalogue.pdf"
            fileSizeBytes={43_279_602}
            fileSizeLabel="43.28 MB"
            pageCount={57}
            viewUrl="https://catalogue.taanhome.com/TAAN%20COFFEE%20TABLE%20CATALOG%20%282%29.pdf?v=20260818"
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
