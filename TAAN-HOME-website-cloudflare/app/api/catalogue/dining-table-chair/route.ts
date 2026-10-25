import { proxyCatalogue } from "../proxyCatalogue";

export async function GET(request: Request) {
  return proxyCatalogue(
    request,
    "https://catalogue.taanhome.com/TAANdiningtable%26chairs.pdf?v=20261025",
    "TAAN-Dining-Table-and-Chair.pdf",
  );
}
