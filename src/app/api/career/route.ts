import { getCareers } from "@/service/career";
import { NextResponse } from "next/server";

export async function GET() {
  return getCareers().then((data) => NextResponse.json(data));
}
