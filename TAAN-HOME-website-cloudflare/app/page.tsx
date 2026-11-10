import "./home-portfolio.css";
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
    <main className="portfolio-home">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="TAAN HOME, back to top">
          <img src="/images/portfolio/logo.png" alt="TAAN HOME" width="160" height="55" />
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

      <section className="portfolio-hero" id="top">
        <div className="portfolio-hero-heading">
          <div><p className="eyebrow light">TAAN HOME · Collection 2026</p><h1>Timeless design.<br /><em>Modern living.</em></h1></div>
          <div className="portfolio-hero-intro"><p>Furniture chosen with an interior designer’s eye.<br />For the spaces you call home.</p><a className="text-link light-link" href="#collection">Explore the collection <Arrow /></a></div>
        </div>
        <figure className="portfolio-cover"><img src="/images/portfolio/kyr.webp" alt="Kyr sofa in a bright interior visualisation" fetchPriority="high" /><figcaption><span>Kyr — a quieter silhouette</span><span>Render / interior visualisation</span></figcaption></figure>
        <div className="portfolio-hero-foot"><span>Furniture · Interior styling · Custom projects</span><a href="#story">Discover TAAN <span aria-hidden="true">↓</span></a></div>
      </section>

      <section className="brand-story" id="story">
        <div className="story-title"><p className="eyebrow">01 / The brand</p><h2>An interior designer’s<br /><em>perspective.</em></h2></div>
        <div className="story-copy"><p>TAAN began with an interior designer’s search for furniture for client projects. That perspective still shapes our collection: timeless forms, thoughtful materials and pieces that feel at home.</p><p>We select and import contemporary furniture, with interior styling advice and custom furniture for individual homes and design projects.</p><a className="text-link dark-link" href="#approach">Our approach <Arrow /></a></div>
      </section>

      <section className="collection section" id="collection">
        <div className="section-heading">
          <div><p className="eyebrow">02 / The collection</p><h2>A room,<br /><em>piece by piece.</em></h2></div>
          <p>From a generous sofa to the finishing piece. Explore six collections, selected for the way they work together in your home.</p>
        </div>
        <div className="collection-grid collection-grid-four collection-grid-six">
          <article className="collection-card">
            <a className="collection-link" href="/collections/sofa">
              <div className="image-wrap"><img src="/images/collection-sofa.webp" alt="TAAN HOME sofa collection" loading="lazy" /></div>
              <div className="card-meta"><div><span>01</span><h3>Sofa</h3></div><span className="card-arrow" aria-hidden="true"><Arrow /></span></div>
            </a>
          </article>
          <article className="collection-card">
            <a className="collection-link" href="/collections/dining-table-chair">
              <div className="image-wrap"><img src="/images/collection-dining.webp" alt="TAAN HOME dining table and chairs" loading="lazy" /></div>
              <div className="card-meta"><div><span>02</span><h3>Dining Table &amp; Chairs</h3></div><span className="card-arrow" aria-hidden="true"><Arrow /></span></div>
            </a>
          </article>
          <article className="collection-card">
            <a className="collection-link" href="/collections/coffee-table">
              <div className="image-wrap"><img src="/images/collection-coffee-table.webp" alt="TAAN HOME coffee table collection" loading="lazy" /></div>
              <div className="card-meta"><div><span>03</span><h3>Coffee Table</h3></div><span className="card-arrow" aria-hidden="true"><Arrow /></span></div>
            </a>
          </article>
          <article className="collection-card">
            <a className="collection-link" href="/collections/lounge-chair">
              <div className="image-wrap"><img src="/images/lounge-teddy.webp" alt="TAAN HOME Arm Chair collection" loading="lazy" /></div>
              <div className="card-meta"><div><span>04</span><h3>Arm Chair</h3></div><span className="card-arrow" aria-hidden="true"><Arrow /></span></div>
            </a>
          </article>
          <article className="collection-card">
            <a className="collection-link" href="/collections/bed">
              <div className="image-wrap"><img src="/images/collection-bed.webp" alt="TAAN HOME Bed collection" loading="lazy" /></div>
              <div className="card-meta"><div><span>05</span><h3>Bed</h3></div><span className="card-arrow" aria-hidden="true"><Arrow /></span></div>
            </a>
          </article>
          <article className="collection-card">
            <a className="collection-link" href="/collections/cabinet-console">
              <div className="image-wrap"><img src="/images/collection-cabinet.webp" alt="TAAN HOME Cabinet & Console collection" loading="lazy" /></div>
              <div className="card-meta"><div><span>06</span><h3>Cabinet & Console</h3></div><span className="card-arrow" aria-hidden="true"><Arrow /></span></div>
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

      <section className="material-story" id="approach">
        <div className="material-photo"><img src="/images/portfolio/material.webp" alt="Close-up of TAAN sofa upholstery and cushion detail" loading="lazy" /></div>
        <div className="material-copy"><p className="eyebrow">03 / The TAAN approach</p><h2>Colour. Texture.<br /><em>Proportion.</em></h2><p>A more personal selection begins with your space. We consider the room, its light and the way you live.</p><div className="portfolio-services"><div><span>01</span><h3>Selected furniture</h3><p>Contemporary pieces with an enduring design perspective.</p></div><div><span>02</span><h3>Interior styling</h3><p>Advice on furniture size, layout and colour, considered alongside your architecture.</p></div><div><span>03</span><h3>Custom furniture &amp; projects</h3><p>Discuss your brief, dimensions and finishes with our team.</p></div></div><a className="text-link dark-link" href={lineUrl} target="_blank" rel="noreferrer" data-meta-event="Contact" data-meta-content="Project consultation" data-meta-category="LINE enquiry">Discuss your space <Arrow /></a></div>
      </section>
      <section className="client-homes">
        <div className="section-heading"><div><p className="eyebrow">04 / At home</p><h2>In its own<br /><em>setting.</em></h2></div><p>A glimpse of TAAN furniture in our clients’ homes.<br />Different rooms. A personal point of view.</p></div>
        <div className="client-grid">{[{image:"client-sofa",title:"A place to gather",label:"Living"},{image:"client-dining",title:"Around the table",label:"Dining"},{image:"client-chair",title:"A corner to settle into",label:"Lounge"}].map(item=><figure key={item.image}><img src={`/images/portfolio/${item.image}.webp`} alt={`${item.label} furniture in a TAAN client's home`} loading="lazy" /><figcaption><span>{item.label}</span><h3>{item.title}</h3></figcaption></figure>)}</div><p className="photo-note">Client-home photography · TAAN HOME</p>
      </section>

      <section className="showroom" id="showroom">
        <img className="portfolio-showroom-image" src="/images/portfolio/showroom.webp" alt="Inside the TAAN HOME showroom" loading="lazy" />
        <div>
          <p className="eyebrow light">05 / Ratchaphruek, Nonthaburi</p>
          <h2>See it.<br /><em>Sit with it.</em></h2>
        </div>
        <div className="showroom-action">
          <p>Explore the materials, comfort and scale in person. Showroom visits by appointment.</p>
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
        <a className="wordmark footer-mark" href="#top"><img src="/images/portfolio/logo.png" alt="TAAN HOME" width="160" height="55" /></a>
        <p>Timeless Art and Noble Co., Ltd.</p>
        <p>© {new Date().getFullYear()} TAAN HOME</p>
      </footer>

    </main>
  );
}
