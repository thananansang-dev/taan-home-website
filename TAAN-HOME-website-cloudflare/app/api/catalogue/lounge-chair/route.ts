import { proxyCatalogue } from "../proxyCatalogue";

export async function GET(request: Request) {
  return proxyCatalogue(
    request,
    "https://catalogue.taanhome.com/TAAN%20ARMCHAIR%20%281%29.pdf",
    "TAAN-Armchair-Catalogue.pdf",
  );
}
