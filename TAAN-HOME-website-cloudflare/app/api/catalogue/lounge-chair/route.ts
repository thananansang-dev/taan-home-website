import { proxyCatalogue } from "../proxyCatalogue";

export async function GET(request: Request) {
  return proxyCatalogue(
    request,
    "https://catalogue.taanhome.com/TAAN%20ARMCHAIR%20%281%29.pdf?v=20260730-1444",
    "TAAN-Armchair-Catalogue.pdf",
  );
}
