import { getArchives } from "@/service/archive";
import { NextResponse } from "next/server";

export async function GET() {
  return getArchives().then((data) => NextResponse.json(data));
}
