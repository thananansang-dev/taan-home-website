import { proxyCatalogue } from "../proxyCatalogue";
export async function GET(request: Request) {
  return proxyCatalogue(request, "https://catalogue.taanhome.com/TAAN%20Bed.pdf", "TAAN-bed-Catalogue.pdf");
}
