import { proxyCatalogue } from "../proxyCatalogue";
export async function GET(request: Request) {
  return proxyCatalogue(request, "https://catalogue.taanhome.com/TAANcabinet%26console.pdf", "TAAN-cabinet-console-Catalogue.pdf");
}
