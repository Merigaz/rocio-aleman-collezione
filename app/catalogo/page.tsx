"use client";
import FilterModal from "@/components/modal";
import { FilterDataContext, ProductsDataContext } from "@/utils/createContext";
import Link from "next/link";
import getUniqueValues from "@/utils/uniqueValues";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import useMediaQuery from "@/utils/useMediaQuery";

export default function Catalogo() {
  const [products, setProducts]: any = useState([]);
  const [productsUnique, setProductsUnique]: any = useState([]);
  const { productsData } = useContext(ProductsDataContext);
  const { filterData, setFilterData } = useContext(FilterDataContext);
  let filteredElements: any = [];
 
  const filteredElementsSet = new Set();
  useEffect(() => {
    if (filterData.length > 0 && productsData.length > 0) {
      productsData.forEach((element: any) => {
        filterData.forEach((elementfilter: any) => {
          console.log(elementfilter, "elementfilter");
          console.log(element, "element");

          if (
            element.categoriesID.includes(elementfilter) ||
            element.size.includes(elementfilter) ||
            element.tela.includes(elementfilter)
          ) {
            filteredElementsSet.add(element);
          }
          if (elementfilter === "vip-Pijamas") {
            console.log("entre");
            if (element.destacado && element.mainCategoryName == "Pijamas") {
              console.log("entrePijamas");
              filteredElementsSet.add(element);
            }
          }
          if (elementfilter === "vip-Moda") {
            if (element.destacado && element.mainCategoryName == "Moda") {
              console.log("entreModa");
              filteredElementsSet.add(element);
            }
          }
        });
      });
      const filteredElements = Array.from(filteredElementsSet);
      console.log(filteredElements, "filter popis");
      setProducts(filteredElements);
      setProductsUnique(productsData);
    } else {
      setProducts(productsData);
    }

    console.log(filteredElements, "popisfiltro");
  }, [productsData, filterData]);
  const GendersuniqueValues = getUniqueValues({ products, key: "gender" });
  const sizesuniqueValues = getUniqueValues({ products, key: "size" });

  const telauniqueValues = getUniqueValues({ products, key: "tela" });
  console.log(sizesuniqueValues, "sizescatalog");
  return (
   
      
      <main className="relative z-0">
      <div className="lg:left-[110px] sticky top-0  w-16 left-[24px] tablet:left-[0px] z-10 tablet:cards-btn-filter-tablet my-4">
        <FilterModal sizes={sizesuniqueValues} tela={telauniqueValues} />
      </div>
       <div className="flex flex-col items-center justify-center tablet:grid tablet:grid-cols-3 desktop:grid desktop:grid-cols-3 gap-4 laptop:grid laptop:grid-cols-5 laptop:cards-catalog-lg z-0">

        {products.map((product: any) =>
          product.destacado == true ? (
            <Link href={`/catalogo/${product.mainCategoryName}/${product.id}`} className="cursor-pointer ">
              <article
                key={product.id}
                className="group/card active:shadow-none flex flex-col shadow-card-shadow h-[680px] tablet:w-[250px] celsm:w-[350px] lg:w-auto relative  "
                >
                <Image
                  alt=""
                  src={"/cinta.png"}
                  width={108}
                  height={108}
                  quality={90}
                  className="absolute -top-[4px] -right-[2px]"
                  />

                <Image
                  src={`/productos/${product.images[0]}`}
                  alt={product.name}
                  quality={90}
                  className="object-cover h-[680px] self-center"
                  priority
                  height={700}
                  width={350}
                  />

                <div className="w-full h-[126px] self-center flex flex-col  group-hover/card:animation-card bg-bgHome relative border-l border-b border-[#403834] border-opacity-30 ">
                  <div className="flex flex-col bg-pinkybg h-full w-full px-4 pb-2 bg-opacity-40 justify-center ">
                    <h1 className="laptop:line-clamp-1 self-start font-Poly text-md font-normal text-[#403834]">{`${product.name}`}</h1>
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
                            sizes !== "XXL" && sizes !== "XS" ? (
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
            </Link>
          ) : (
            <Link href={`/catalogo/${product.mainCategoryName}/${product.id}`}>
              <article
                key={product.id}
                className="group/card active:shadow-none flex flex-col shadow-card-shadow h-[680px] celsm:w-[350px]  tablet:w-[250px] lg:w-auto relative cursor-pointer"
                >
                <Image
                  src={`/productos/${product.images[0]}`}
                  alt={product.name}
                  quality={90}
                  className="object-cover h-[680px] self-center "
                  priority
                  height={700}
                  width={350}
                  />

                <div className="w-full h-[126px] self-center flex flex-col  group-hover/card:animation-card bg-bgHome relative border-l border-b border-[#403834] border-opacity-30 ">
                  <div className="flex flex-col bg-pinkybg h-full w-full px-4 pb-2 bg-opacity-40 justify-center">
                    <h1 className=" laptop:line-clamp-1 self-start font-Poly text-md font-normal text-[#403834]">{`${product.name}`}</h1>
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
                            sizes !== "XXL" && sizes !== "XS" ? (
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
            </Link>
          )
        )}
        </div>
      </main>
    
  );
}
