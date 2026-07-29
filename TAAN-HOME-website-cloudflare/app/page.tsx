import CatalogueBook from "./CatalogueBook";

const lineUrl = "https://lin.ee/t03g62O";
const catalogueUrl = "/catalogue/taan-home-collection-2026.pdf";
const showroomMapUrl = "https://maps.app.goo.gl/AKYHx2qt7BXL9e7H6?g_st=ic";

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon">
    <path d="M3 10h13M11 5l5 5-5 5" />
  </svg>
);

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="TAAN HOME, back to top">
          TAAN <span>HOME</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#collection">Collection</a>
          <a href="#catalogue">Catalogue</a>
          <a href="#approach">Our approach</a>
          <a href="#showroom">Showroom</a>
        </nav>
        <a className="header-cta" href={showroomMapUrl} target="_blank" rel="noreferrer" data-meta-event="ShowroomDirections" data-meta-content="Header showroom directions" data-meta-category="Showroom">
          Visit showroom <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <img
          className="hero-image"
          src="/images/taan-hero.webp"
          alt="TAAN HOME cream sofa in a double-height modern living room"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">Modern furniture</p>
          <h1>Timeless design<br />for modern living</h1>
          <p className="hero-copy">
            Sculptural furniture, refined materials and considered proportions—
            curated to bring lasting character to contemporary spaces.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#collection">
              Explore the collection <Arrow />
            </a>
            <a className="text-link light-link" href="#catalogue" data-meta-event="ViewContent" data-meta-content="TAAN Collection 2026" data-meta-category="Catalogue">
              View catalogue
            </a>
          </div>
        </div>
        <a className="scroll-cue" href="#collection" aria-label="Scroll to collection">
          <span>Discover</span><i />
        </a>
      </section>

      <section className="collection section" id="collection">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The collection</p>
            <h2>Made to anchor<br />the room.</h2>
          </div>
          <p>
            A considered edit of expressive silhouettes and tactile finishes,
            designed for homes that feel composed rather than decorated.
          </p>
        </div>

        <div className="collection-grid collection-grid-four">
          <article className="collection-card">
            <a className="collection-link" href="/collections/dining-table-chair" data-meta-event="ViewContent" data-meta-content="Dining & Chair Collection" data-meta-category="Collection">
              <div className="image-wrap">
                <img src="/images/collection-dining.webp" alt="TAAN HOME dining table and chairs" />
              </div>
              <div className="card-meta">
                <div><span>01</span><h3>Dining &amp; Chair</h3></div>
                <span className="card-arrow" aria-hidden="true"><Arrow /></span>
              </div>
            </a>
          </article>

          <article className="collection-card">
            <a className="collection-link" href="#catalogue" data-meta-event="ViewContent" data-meta-content="Sofa Collection" data-meta-category="Collection">
              <div className="image-wrap">
                <img src="/images/collection-sofa.webp" alt="TAAN HOME Kyr sofa" />
              </div>
              <div className="card-meta">
                <div><span>02</span><h3>Sofa</h3></div>
                <span className="card-arrow" aria-hidden="true"><Arrow /></span>
              </div>
            </a>
          </article>

          <article className="collection-card">
            <a className="collection-link" href="#catalogue" data-meta-event="ViewContent" data-meta-content="Lounge Chair Collection" data-meta-category="Collection">
              <div className="image-wrap">
                <img src="/images/collection-lounge-chair.webp" alt="TAAN HOME Grid lounge chair" />
              </div>
              <div className="card-meta">
                <div><span>03</span><h3>Lounge Chair</h3></div>
                <span className="card-arrow" aria-hidden="true"><Arrow /></span>
              </div>
            </a>
          </article>

          <article className="collection-card">
            <a className="collection-link" href="#catalogue" data-meta-event="ViewContent" data-meta-content="Coffee Table Collection" data-meta-category="Collection">
              <div className="image-wrap">
                <img src="/images/collection-coffee-table.webp" alt="TAAN HOME sculptural stone coffee table" />
              </div>
              <div className="card-meta">
                <div><span>04</span><h3>Coffee Table</h3></div>
                <span className="card-arrow" aria-hidden="true"><Arrow /></span>
              </div>
            </a>
          </article>
        </div>
      </section>

      <section className="catalogue" id="catalogue">
        <div className="catalogue-heading">
          <p className="eyebrow">TAAN Collection 2026</p>
          <h2>Explore the complete<br />collection.</h2>
          <p>
            Browse 32 pages of TAAN HOME furniture, materials and considered
            forms in our online catalogue.
          </p>
        </div>
        <CatalogueBook />
        <a className="text-link dark-link catalogue-download" href={catalogueUrl} download="TAAN-HOME-Collection-2026.pdf">
          Download catalogue PDF
        </a>
      </section>

      <section className="approach" id="approach">
        <div className="approach-copy">
          <p className="eyebrow">The TAAN approach</p>
          <h2>Designed with restraint.<br />Chosen with purpose.</h2>
          <p>
            From a quiet reading corner to a statement dining room, our team
            helps you bring proportion, material and comfort into balance.
          </p>
        </div>
        <div className="service-list" aria-label="Our services">
          <div><span>01</span><p>Furniture selection for your space</p></div>
          <div><span>02</span><p>Material and finish guidance</p></div>
          <div><span>03</span><p>Residential and commercial projects</p></div>
        </div>
      </section>

      <section className="showroom" id="showroom">
        <div>
          <p className="eyebrow light">TAAN HOME · Bangkok</p>
          <h2>See it. Sit with it.<br />Make it yours.</h2>
        </div>
        <div className="showroom-action">
          <p>Experience the materials, comfort and scale in person with a private showroom consultation.</p>
          <div className="showroom-buttons">
            <a className="button button-light" href={showroomMapUrl} target="_blank" rel="noreferrer" data-meta-event="ShowroomDirections" data-meta-content="Showroom directions" data-meta-category="Showroom">
              Get directions <Arrow />
            </a>
            <a className="text-link light-link" href={lineUrl} target="_blank" rel="noreferrer" data-meta-event="Contact" data-meta-content="Showroom booking" data-meta-category="LINE enquiry">
              Book via LINE
            </a>
          </div>
          <a
            className="text-link light-link line-official-inline"
            href={lineUrl}
            target="_blank"
            rel="noreferrer"
            data-meta-event="Contact"
            data-meta-content="LINE Official contact"
            data-meta-category="LINE enquiry"
          >
            Contact via LINE Official
          </a>
        </div>
      </section>

      <footer>
        <a className="wordmark footer-mark" href="#top">TAAN <span>HOME</span></a>
        <p>Modern furniture for considered living.</p>
        <p>© {new Date().getFullYear()} TAAN HOME</p>
      </footer>

    </main>
  );
}
