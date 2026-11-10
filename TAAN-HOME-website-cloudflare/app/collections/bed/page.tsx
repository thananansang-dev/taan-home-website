import type { Metadata } from "next";
import CatalogueBook from "../../CatalogueBook";
import CatalogueDownload from "../../CatalogueDownload";
const lineUrl = "https://lin.ee/t03g62O";
export const metadata: Metadata = {
  title: "Bed Collection | TAAN HOME",
  description: "A softer rhythm for your bedroom. Explore considered silhouettes and inviting textures for a space that feels entirely your own.",
  alternates: { canonical: "/collections/bed" },
  openGraph: { title: "Bed Collection | TAAN HOME", description: "A softer rhythm for your bedroom. Explore considered silhouettes and inviting textures for a space that feels entirely your own.", url: "/collections/bed", images: ["/images/collection-bed.webp"] },
};
const Arrow = () => <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon"><path d="M3 10h13M11 5l5 5-5 5" /></svg>;
export default function CollectionPage() {
  return <main className="dining-collection-page new-collection-page bed-collection-page">
    <header className="collection-page-header">
      <a className="wordmark" href="/" aria-label="TAAN HOME, back to home">TAAN <span>HOME</span></a>
      <nav aria-label="Collection navigation"><a href="/">Home</a><a href="#collection">Collection</a><a href="#catalogue">Catalogue</a></nav>
      <a className="header-cta" href={lineUrl} target="_blank" rel="noreferrer">Enquire via LINE <Arrow /></a>
    </header>
    <section className="new-collection-hero">
      <div className="new-collection-intro"><p className="eyebrow">TAAN HOME · Bed</p><h1>Rest beautifully.</h1><p>A softer rhythm for your bedroom. Explore considered silhouettes and inviting textures for a space that feels entirely your own.</p><a className="button button-dark" href="#catalogue">Explore catalogue <Arrow /></a><span className="new-collection-index">34 pages · The Bed Collection</span></div>
      <div className="new-collection-photo"><img src="/images/collection-bed.webp" alt="TAAN HOME A2306 bed in a contemporary interior" /><span>Bed / TAAN HOME</span></div>
    </section>
    <section className="dining-manifesto" id="collection"><p className="eyebrow">Considered details</p><div><h2>Designed for<br />everyday living.</h2><p>A quietly sculpted bed with a pleated headboard, generous proportions and a light, elevated profile. Browse the complete collection below, or speak with our team about dimensions, materials and available finishes.</p></div></section>
    <section className="dining-catalogue new-collection-catalogue" id="catalogue">
      <div className="dining-catalogue-heading"><div><p className="eyebrow">TAAN Bed Collection</p><h2>Find your<br />next favourite.</h2></div><p>Explore all 34 pages of the Bed catalogue. Turn the pages online, view the original PDF or download a copy for your project.</p></div>
      <CatalogueBook catalogueName="TAAN Bed Collection" pageCount={34} pageDirectory="/catalogue/bed/2026-11-10/pages" />
      <div className="dining-catalogue-actions"><CatalogueDownload apiUrl="/api/catalogue/bed" catalogueName="TAAN Bed Catalogue" fileName="TAAN-bed-Catalogue.pdf" fileSizeBytes={30851550} fileSizeLabel="30.85 MB" pageCount={34} viewUrl="https://catalogue.taanhome.com/TAAN%20Bed.pdf" /><a className="text-link dark-link" href={lineUrl} target="_blank" rel="noreferrer">Discuss your space <Arrow /></a></div>
    </section>
    <section className="new-collection-next"><p className="eyebrow">Continue exploring</p><a href="/collections/cabinet-console">Cabinet & Console <Arrow /></a><a className="text-link dark-link" href="/#collection">View all collections</a></section>
    <footer><a className="wordmark footer-mark" href="/">TAAN <span>HOME</span></a><p>Modern furniture for considered living.</p><p>© {new Date().getFullYear()} TAAN HOME</p></footer>
  </main>;
}
