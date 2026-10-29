import { proxyCatalogue } from "../proxyCatalogue";

export async function GET(request: Request) {
  return proxyCatalogue(
    request,
    "https://catalogue.taanhome.com/TAANarmchair.pdf?v=20261029",
    "TAAN-Armchair-Catalogue.pdf",
  );
}
