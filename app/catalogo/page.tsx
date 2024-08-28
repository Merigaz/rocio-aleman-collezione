"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Catalogo() {
  const [products, setProducts]: any = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);
  console.log(products, "popo");
  if (products.length > 0) {
    return (
      <main className="grid grid-cols-5 gap-4 px-40 py-16 ">
        {products.map((product: any) => (
          <article key={product.id} className="flex flex-col shadow-lg">
            <Image
              src={`/productos/${product.images[0]}`}
              alt={product.name}
              quality={100}
              className="object-cover h-full self-center static"
              priority
              height={600}
              width={350}
            />
            <div className="w-full h-24  self-center bg-pinkybg flex flex-col px-4">
              <h1 className="self-start font-Poly text-lg">{`${product.name}`}</h1>
              <a className="font-PriceCard font-extrabold text-xl">$200.000</a>
              <div className="flex flex-row self-end gap-2">
                {product.size.length > 0 ? (
                  product.size.map((sizes: any) => (
                    <a className="font-Poly flex border border-black rounded-[2px] text-sm w-5 h-5 justify-center items-center">{`${sizes}`}</a>
                  ))
                ) : (
                  <a className="opacity-0">X</a>
                )}
              </div>
            </div>
          </article>
        ))}
      </main>
    );
  }
}
