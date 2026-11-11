import { proxyCatalogue } from "../proxyCatalogue";

export async function GET(request: Request) {
  return proxyCatalogue(
    request,
    "https://catalogue.taanhome.com/TAANdiningtable%26chairs2026.pdf?v=20261111",
    "TAAN-Dining-Table-and-Chair.pdf",
  );
}
