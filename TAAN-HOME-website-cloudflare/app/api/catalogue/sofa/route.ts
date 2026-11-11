import { proxyCatalogue } from "../proxyCatalogue";

export async function GET(request: Request) {
  return proxyCatalogue(
    request,
    "https://catalogue.taanhome.com/TAANsofa2026.pdf?v=20261111",
    "TAAN-Sofa-Catalogue.pdf",
  );
}
