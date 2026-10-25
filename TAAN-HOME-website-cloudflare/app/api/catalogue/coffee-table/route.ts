import { proxyCatalogue } from "../proxyCatalogue";

export async function GET(request: Request) {
  return proxyCatalogue(
    request,
    "https://catalogue.taanhome.com/TAANcoffeetable.pdf?v=20261025-1653",
    "TAAN-Coffee-Table-Catalogue.pdf",
  );
}
