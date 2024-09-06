"use client";

import CarouselComponent from "@/components/carousel";
import { FilterDataContext } from "@/utils/createContext";
import useMediaQuery from "@/utils/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { filterData, setFilterData } = useContext(FilterDataContext);
  const handleClickModaDestacados = () => {
    setFilterData(["vip-Moda"]);
  };
  const handleClickPijamaDestacados = () => {
    setFilterData(["vip-Pijamas"]);
  };
  const handleClickCatalogo = () => {
    setFilterData([]);
  };
  const [isClient, setIsClient] = useState(false);
  const matches = useMediaQuery("(min-width:685px)");
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <main>
      {isClient ? (
        matches ? (
          <CarouselComponent />
        ) : (
          <div className="relative   w-full cel:w-[430px]">
            <Image
              src={"/Banner 3 movil.png"}
              alt=""
              width={0}
              height={0}
              quality={100}
              objectFit="cover"
              className="carousel-img"
              sizes="100%, 100%"
            />
            <Link
            href={"/catalogo"}
            className="active:animation-cta-carousel-sm active:animation-btn-cta text-[#403834]  border border-[#403834] border-opacity-15  flex tracking-wide items-center justify-center  font-ButtonBuy absolute  celsm:right-[10px] px-1 bottom-4 shadow-card-shadow celxs:h-6 celxs:w-28 celxs:text-lg celxs:right-[8px] bg-white cel:right-[18px] cel:btn-banner3-cel "
          >
            ¡COMPRAR!
          </Link>
          </div>
        )
      ) : null}

      <div className="flex flex-col items-center justify-center pb-32">
        <div className="lg:cards-vip-home flex flex-col gap-8 my-10 w-[90%]">
                         
          
          <article className="relative">
            <Link
              className="active:shadow-none active:animation-btn-cta lg:btn-vip-moda-lg shadow-card-shadow border border-[#403834] border-opacity-30 text-[#403834] flex items-center justify-center bg-white font-ButtonBuy tracking-wide font-medium text-xl absolute top-8  left-1/2 transform -translate-x-1/2 w-[268px] h-12 "
              href={"/catalogo"}
              onClick={handleClickPijamaDestacados}
            >
              DESTACADOS PIJAMAS
            </Link>
            <Image
              src={"/productos/PijamaPantalonAlgodon (1).JPG"}
              alt="Pijama destacados"
              width={600}
              height={800}
              quality={100}
            />
          </article>
          <article className="relative">
            <Link
              className="lg:btn-vip-moda-lg active:shadow-none active:animation-btn-cta shadow-card-shadow border border-[#403834] border-opacity-30 text-[#403834] flex items-center justify-center bg-white font-ButtonBuy font-medium tracking-wide text-xl absolute top-8  left-1/2 transform -translate-x-1/2 w-[268px] h-12 "
              href={"/catalogo"}
              onClick={handleClickModaDestacados}
            >
              DESTACADOS MODA
            </Link>
            <Image
              src={"/productos/BlusaSedaMangaLargaSeda (1).JPG"}
              alt="Moda destacados"
              width={600}
              height={800}
              quality={100}
            />
          </article>
        </div>
        <Link
          href={"/catalogo"}
          className=" text-center active:shadow-none active:animation-btn-cta border border-[#403834] border-opacity-30 text-[#403834] flex tracking-wide items-center justify-center font-ButtonBuy font-normal shadow-card-shadow w-[80%] h-12 text-lg lg:text-3xl bg-white lg:w-[700px] lg:h-[76px]"
          onClick={handleClickCatalogo}
        >
          VER CATÁLOGO COMPLETO
        </Link>
      </div>
    </main>
  );
}
