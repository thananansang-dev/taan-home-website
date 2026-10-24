import { proxyCatalogue } from "../proxyCatalogue";

export async function GET(request: Request) {
  return proxyCatalogue(
    request,
    "https://catalogue.taanhome.com/TAAN%20sofa.pdf?v=20261024",
    "TAAN-Sofa-Catalogue.pdf",
  );
}
