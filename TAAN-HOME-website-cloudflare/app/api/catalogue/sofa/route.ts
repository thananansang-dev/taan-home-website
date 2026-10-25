import { proxyCatalogue } from "../proxyCatalogue";

export async function GET(request: Request) {
  return proxyCatalogue(
    request,
    "https://catalogue.taanhome.com/TAANsofa.pdf?v=20261025",
    "TAAN-Sofa-Catalogue.pdf",
  );
}
