import prisma from "@/utils/dbprismaclient";
import { NextResponse } from "next/server";

export async function GET() {
  const categoriesData = await prisma.mainCategories.findMany({
    include: {
        subCategorie: true, // Incluye el campo subcategories
      },
      orderBy: {
        id: "asc",
      },
  });

  return NextResponse.json({ categoriesData });
}
