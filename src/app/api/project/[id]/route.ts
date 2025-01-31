import { getProjectData } from "@/service/project";
import { NextRequest, NextResponse } from "next/server";

type Context = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_: NextRequest, { params }: Context) {
  const { id } = await params;

  return getProjectData(id).then((data) => NextResponse.json(data));
}
