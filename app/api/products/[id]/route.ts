import prisma from "@/utils/dbprismaclient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const productId = parseInt(params.id, 10);

  if (isNaN(productId)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }
  let nextID;
  let previousID;

  const idnumber = parseInt(params.id);
  try {
    const allproducts = await prisma.products.findMany();
    const allproductstotal = allproducts.length;

    const product = await prisma.products.findUnique({
      where: {
        id: productId,
      },
    });

    if (allproductstotal > 0) {
      nextID = idnumber + 1;
      if (nextID > allproductstotal) {
        nextID = 1;
      }
      previousID = idnumber - 1;
      if (previousID <= 0) {
        previousID = allproductstotal;
      }
    }
    const nextproduct = await prisma.products.findUnique({
      where: {
        id: nextID,
      },
    });
    const previousproduct = await prisma.products.findUnique({
      where: {
        id: previousID,
      },
    });
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ product, nextproduct, previousproduct });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
