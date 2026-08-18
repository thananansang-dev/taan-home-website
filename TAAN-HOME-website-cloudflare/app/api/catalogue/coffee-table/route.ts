import { proxyCatalogue } from "../proxyCatalogue";

export async function GET(request: Request) {
  return proxyCatalogue(
    request,
    "https://catalogue.taanhome.com/TAAN%20COFFEE%20TABLE%20CATALOG%20%282%29.pdf?v=20260818",
    "TAAN-Coffee-Table-Catalogue.pdf",
  );
}
