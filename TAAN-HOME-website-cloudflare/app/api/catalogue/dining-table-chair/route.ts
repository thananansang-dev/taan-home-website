import { proxyCatalogue } from "../proxyCatalogue";

export async function GET(request: Request) {
  return proxyCatalogue(
    request,
    "https://catalogue.taanhome.com/TAAN%20dining%20table%20%26%20chairs.pdf?v=20261024",
    "TAAN-Dining-Table-and-Chair.pdf",
  );
}
