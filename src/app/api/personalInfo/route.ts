import { getPersonalInfos } from "@/service/about";
import { NextResponse } from "next/server";

export async function GET() {
  return getPersonalInfos().then((data) => NextResponse.json(data));
}
