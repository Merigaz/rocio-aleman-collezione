"use client";
import FilterModal from "@/components/modal";
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
      <div className="flex flex-col relative pt-6">
        <div className="sticky top-0 z-10 w-20 left-40" >

        <FilterModal />
        </div>
        <main className="grid grid-cols-5 gap-4 px-40 py-4">
          {products.map((product: any) =>
            product.destacado == true ? (
              <article
                key={product.id}
                className="group/card flex flex-col shadow-card-shadow h-[600px] relative"
              >
                <Image
                  alt=""
                  src={"/cinta.png"}
                  width={108}
                  height={108}
                  quality={100}
                  className="absolute -top-[4px] -right-[2px]"
                />

                <Image
                  src={`/productos/${product.images[0]}`}
                  alt={product.name}
                  quality={100}
                  className="object-cover h-full self-center"
                  priority
                  height={700}
                  width={350}
                />

                <div className="w-full h-[96px] self-center flex flex-col  group-hover/card:animation-card bg-bgHome relative ">
                  <div className="flex flex-col bg-pinkybg h-full w-full px-4 pb-2 bg-opacity-40">
                    <h1 className="self-start font-Poly text-md font-normal text-[#403834]">{`${product.name}`}</h1>
                    <a className="font-PriceCard font-bold text-2xl text-[#0F0F0F]">
                      $200.000
                    </a>
                    <div className="flex flex-row justify-between border-t-4 border-transparent">
                      {product.tela.length > 0 ? (
                        <a className="font-Poly flex border border-[#403834] rounded-[4px] text-sm  w-14 h-6 justify-center items-center px-1">{`${product.tela[0]}`}</a>
                      ) : null}
                      <div className="flex flex-row self-end gap-2">
                        {product.size.length > 0 ? (
                          product.size.map((sizes: any) =>
                            sizes !== "XXL" ? (
                              <a className="font-Poly flex border border-[#403834] rounded-[4px] text-xs w-5 h-5 justify-center items-center px-1">{`${sizes}`}</a>
                            ) : null
                          )
                        ) : (
                          <a className="opacity-0">X</a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ) : (
              <article
                key={product.id}
                className="group/card flex flex-col shadow-card-shadow h-[600px]"
              >
                <Image
                  src={`/productos/${product.images[0]}`}
                  alt={product.name}
                  quality={100}
                  className="object-cover h-full self-center static"
                  priority
                  height={700}
                  width={350}
                />

                <div className="w-full h-[96px] self-center flex flex-col  group-hover/card:animation-card bg-bgHome ">
                  <div className="flex flex-col bg-pinkybg h-full w-full px-4 pb-2 bg-opacity-40">
                    <h1 className="self-start font-Poly text-md font-normal text-[#403834]">{`${product.name}`}</h1>
                    <a className="font-PriceCard font-bold text-2xl text-[#0F0F0F]">
                      $200.000
                    </a>
                    <div className="flex flex-row justify-between border-t-4 border-transparent">
                      {product.tela.length > 0 ? (
                        <a className="font-Poly flex border border-[#403834] rounded-[4px] text-sm  w-14 h-6 justify-center items-center px-1">{`${product.tela[0]}`}</a>
                      ) : null}
                      <div className="flex flex-row self-end gap-2">
                        {product.size.length > 0 ? (
                          product.size.map((sizes: any) =>
                            sizes !== "XXL" ? (
                              <a className="font-Poly flex border border-[#403834] rounded-[4px] text-xs w-5 h-5 justify-center items-center px-1">{`${sizes}`}</a>
                            ) : null
                          )
                        ) : (
                          <a className="opacity-0">X</a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            )
          )}
        </main>
      </div>
    );
  }
}
