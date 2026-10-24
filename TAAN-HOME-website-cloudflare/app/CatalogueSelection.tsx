import CatalogueDownload from "./CatalogueDownload";

export default function CatalogueSelection() {
  return <div className="catalogue-selection">
    <article>
      <p className="eyebrow">01 · Sofa</p>
      <h3>A place to settle in.</h3>
      <a className="text-link dark-link" href="/collections/sofa#sofa-catalogue">Browse Sofa catalogue →</a>
      <CatalogueDownload apiUrl="/api/catalogue/sofa?v=20261024" catalogueName="TAAN Sofa Catalogue" fileName="TAAN-Sofa.pdf" fileSizeBytes={22696268} fileSizeLabel="22.70 MB" pageCount={18} viewUrl="https://catalogue.taanhome.com/TAAN%20sofa.pdf?v=20261024" />
    </article>
    <article>
      <p className="eyebrow">02 · Dining Table &amp; Chairs</p>
      <h3>Room to come together.</h3>
      <a className="text-link dark-link" href="/collections/dining-table-chair#dining-catalogue">Browse Dining catalogue →</a>
      <CatalogueDownload apiUrl="/api/catalogue/dining-table-chair?v=20261024" catalogueName="TAAN Dining Table & Chairs Catalogue" fileName="TAAN-Dining-Table-and-Chairs.pdf" fileSizeBytes={21342296} fileSizeLabel="21.34 MB" pageCount={15} viewUrl="https://catalogue.taanhome.com/TAAN%20dining%20table%20%26%20chairs.pdf?v=20261024" />
    </article>
  </div>;
}
