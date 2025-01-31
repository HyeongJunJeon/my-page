import { getSkills } from "@/service/about";
import { NextResponse } from "next/server";

export async function GET() {
  return getSkills().then((data) => NextResponse.json(data));
}
