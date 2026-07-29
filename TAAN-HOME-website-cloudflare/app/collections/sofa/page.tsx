import type { Metadata } from "next";
import CatalogueBook from "../../CatalogueBook";

const lineUrl = "https://lin.ee/t03g62O";
const cataloguePdfUrl = "/catalogue/sofa/taan-sofa-catalogue.pdf";

export const metadata: Metadata = {
  title: "Sofa Collection | TAAN HOME",
  description: "Discover the Kyr and Emma sofas — refined modular seating selected for contemporary living.",
  robots: { index: false, follow: false },
};

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon">
    <path d="M3 10h13M11 5l5 5-5 5" />
  </svg>
);

export default function SofaCollectionPage() {
  return (
    <main className="dining-collection-page sofa-collection-page">
      <header className="collection-page-header">
        <a className="wordmark" href="/" aria-label="TAAN HOME, back to home">TAAN <span>HOME</span></a>
        <nav aria-label="Collection navigation">
          <a href="/">Home</a>
          <a href="#collection">Collection</a>
          <a href="#sofa-catalogue">Catalogue</a>
        </nav>
        <a className="header-cta" href={lineUrl} target="_blank" rel="noreferrer">Enquire via LINE <Arrow /></a>
      </header>

      <section className="dining-hero sofa-hero">
        <img src="/images/sofa-kyr.webp" alt="Kyr Sofa in a warm double-height living room" />
        <div className="dining-hero-shade" />
        <div className="dining-hero-copy">
          <p className="eyebrow light">TAAN HOME · Sofa Collection</p>
          <h1>Comfort,<br />composed.</h1>
          <p>A refined edit of generous silhouettes and modular forms—made for slow mornings, long evenings and the way contemporary homes are lived in.</p>
          <a className="text-link light-link" href="#collection">Explore the collection <Arrow /></a>
        </div>
      </section>

      <section className="dining-manifesto" id="collection">
        <p className="eyebrow">Living with TAAN</p>
        <div>
          <h2>Made for living.<br />Designed to last.</h2>
          <p>Our sofa collection balances sculptural form with everyday comfort. Thoughtful proportions, tactile upholstery and adaptable compositions bring a quiet sense of ease to the room.</p>
        </div>
      </section>

      <section className="dining-feature dining-feature-duo sofa-feature-kyr">
        <div className="dining-feature-image">
          <img src="/images/sofa-kyr.webp" alt="Kyr Sofa with a timber platform base and softly rounded upholstery" />
          <span>01 — Modular Sofa</span>
        </div>
        <div className="dining-feature-copy">
          <p className="eyebrow">Elevated comfort</p>
          <h2>Kyr Sofa</h2>
          <p>Kyr brings soft, generous seating into balance with a slim timber platform. Its modular composition and adjustable backrests create a sofa that feels visually calm and naturally adaptable.</p>
          <div className="dining-detail-list">
            <p><span>Character</span>Warm · Sculptural · Refined</p>
            <p><span>Designed for</span>Flexible contemporary living</p>
          </div>
          <a className="button button-dark" href={lineUrl} target="_blank" rel="noreferrer">Enquire about Kyr <Arrow /></a>
        </div>
      </section>

      <section className="dining-feature dining-feature-velin sofa-feature-emma">
        <div className="dining-feature-copy">
          <p className="eyebrow">Relaxed modularity</p>
          <h2>Emma Sofa</h2>
          <p>Emma is defined by deep proportions, softly tailored cushions and an inviting modular form. Its relaxed silhouette creates a generous place to gather without feeling visually heavy.</p>
          <div className="dining-detail-list">
            <p><span>Character</span>Soft · Generous · Contemporary</p>
            <p><span>Designed for</span>Open-plan and family living</p>
          </div>
          <a className="button button-dark" href={lineUrl} target="_blank" rel="noreferrer">Enquire about Emma <Arrow /></a>
        </div>
        <div className="dining-feature-image">
          <img src="/images/sofa-emma.webp" alt="Emma modular sofa in softly textured cream upholstery" />
          <span>02 — Modular Sofa</span>
        </div>
      </section>

      <section className="dining-note sofa-note">
        <p>Made for your space</p>
        <h2>Find your form.<br /><em>Settle into comfort.</em></h2>
        <p>Speak with our team for configuration, dimensions, upholstery and finish recommendations tailored to your room.</p>
        <a className="text-link dark-link" href={lineUrl} target="_blank" rel="noreferrer">Start a conversation <Arrow /></a>
      </section>

      <section className="dining-catalogue sofa-catalogue" id="sofa-catalogue">
        <div className="dining-catalogue-heading">
          <div><p className="eyebrow">TAAN Sofa Collection</p><h2>Explore every<br />possibility.</h2></div>
          <p>Browse all 84 pages of the dedicated TAAN Sofa Catalogue online, or download the PDF to keep as a reference for your project.</p>
        </div>
        <CatalogueBook
          catalogueName="TAAN Sofa Collection"
          pageCount={84}
          pageDirectory="/catalogue/sofa/pages"
        />
        <div className="dining-catalogue-actions">
          <a className="text-link dark-link" href={cataloguePdfUrl} download="TAAN-Sofa-Catalogue.pdf">Download sofa catalogue PDF</a>
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
