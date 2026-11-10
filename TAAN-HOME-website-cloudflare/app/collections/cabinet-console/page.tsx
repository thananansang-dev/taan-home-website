import type { Metadata } from "next";
import CatalogueBook from "../../CatalogueBook";
import CatalogueDownload from "../../CatalogueDownload";
const lineUrl = "https://lin.ee/t03g62O";
export const metadata: Metadata = {
  title: "Cabinet & Console Collection | TAAN HOME",
  description: "Thoughtful storage meets sculptural presence. Discover cabinets and consoles that bring balance and character to everyday spaces.",
  alternates: { canonical: "/collections/cabinet-console" },
  openGraph: { title: "Cabinet & Console Collection | TAAN HOME", description: "Thoughtful storage meets sculptural presence. Discover cabinets and consoles that bring balance and character to everyday spaces.", url: "/collections/cabinet-console", images: ["/images/collection-cabinet.webp"] },
};
const Arrow = () => <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon"><path d="M3 10h13M11 5l5 5-5 5" /></svg>;
export default function CollectionPage() {
  return <main className="dining-collection-page new-collection-page cabinet-console-collection-page">
    <header className="collection-page-header">
      <a className="wordmark" href="/" aria-label="TAAN HOME, back to home">TAAN <span>HOME</span></a>
      <nav aria-label="Collection navigation"><a href="/">Home</a><a href="#collection">Collection</a><a href="#catalogue">Catalogue</a></nav>
      <a className="header-cta" href={lineUrl} target="_blank" rel="noreferrer">Enquire via LINE <Arrow /></a>
    </header>
    <section className="new-collection-hero">
      <div className="new-collection-intro"><p className="eyebrow">TAAN HOME · Cabinet & Console</p><h1>A place for everything.</h1><p>Thoughtful storage meets sculptural presence. Discover cabinets and consoles that bring balance and character to everyday spaces.</p><a className="button button-dark" href="#catalogue">Explore catalogue <Arrow /></a><span className="new-collection-index">29 pages · The Cabinet & Console Collection</span></div>
      <div className="new-collection-photo"><img src="/images/collection-cabinet.webp" alt="TAAN HOME BRG1901-20 cabinet & console in a contemporary interior" /><span>Cabinet & Console / TAAN HOME</span></div>
    </section>
    <section className="dining-manifesto" id="collection"><p className="eyebrow">Considered details</p><div><h2>Designed for<br />everyday living.</h2><p>Clean lines and a composed silhouette create a considered focal point for living spaces and welcoming entrances. Browse the complete collection below, or speak with our team about dimensions, materials and available finishes.</p></div></section>
    <section className="dining-catalogue new-collection-catalogue" id="catalogue">
      <div className="dining-catalogue-heading"><div><p className="eyebrow">TAAN Cabinet & Console Collection</p><h2>Find your<br />next favourite.</h2></div><p>Explore all 29 pages of the Cabinet & Console catalogue. Turn the pages online, view the original PDF or download a copy for your project.</p></div>
      <CatalogueBook catalogueName="TAAN Cabinet & Console Collection" pageCount={29} pageDirectory="/catalogue/cabinet-console/2026-11-10/pages" />
      <div className="dining-catalogue-actions"><CatalogueDownload apiUrl="/api/catalogue/cabinet-console" catalogueName="TAAN Cabinet & Console Catalogue" fileName="TAAN-cabinet-console-Catalogue.pdf" fileSizeBytes={24023791} fileSizeLabel="24.02 MB" pageCount={29} viewUrl="https://catalogue.taanhome.com/TAANcabinet%26console.pdf" /><a className="text-link dark-link" href={lineUrl} target="_blank" rel="noreferrer">Discuss your space <Arrow /></a></div>
    </section>
    <section className="new-collection-next"><p className="eyebrow">Continue exploring</p><a href="/collections/bed">Bed <Arrow /></a><a className="text-link dark-link" href="/#collection">View all collections</a></section>
    <footer><a className="wordmark footer-mark" href="/">TAAN <span>HOME</span></a><p>Modern furniture for considered living.</p><p>© {new Date().getFullYear()} TAAN HOME</p></footer>
  </main>;
}
