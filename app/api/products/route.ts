import prisma from "@/utils/dbprismaclient";
import { NextResponse } from "next/server";

export async function GET() {
  const productsData = await prisma.products.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return NextResponse.json({ productsData });
}
