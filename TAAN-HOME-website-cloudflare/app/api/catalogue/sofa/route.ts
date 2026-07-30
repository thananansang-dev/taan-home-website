import { proxyCatalogue } from "../proxyCatalogue";

export async function GET(request: Request) {
  return proxyCatalogue(
    request,
    "https://catalogue.taanhome.com/TAAN%20Sofa%20catalog%20%281%29.pdf?v=20260730-1447",
    "TAAN-Sofa-Catalogue.pdf",
  );
}
