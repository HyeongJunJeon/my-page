import { getProjects } from "@/service/project";
import { NextResponse } from "next/server";

export async function GET() {
  return getProjects().then((data) => NextResponse.json(data));
}
