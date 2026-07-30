import { proxyCatalogue } from "../proxyCatalogue";

export async function GET(request: Request) {
  return proxyCatalogue(
    request,
    "https://catalogue.taanhome.com/TAAN%20Dining%20table%20%26%20chair.pdf",
    "TAAN-Dining-Table-and-Chair.pdf",
  );
}
