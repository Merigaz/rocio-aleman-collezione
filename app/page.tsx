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
          <div className="relative   w-full cel:w-[408px]">
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
            className="text-[#403834] hover:text-[#403834] hover:shadow-none flex tracking-wide items-center justify-center  font-ButtonBuy absolute right-[4px] px-1 bottom-4 shadow-card-shadow text-sm h-6 bg-white cel:btn-banner3-cel "
          >
            ¡COMPRA AHORA!
          </Link>
          </div>
        )
      ) : null}

      <div className="flex flex-col items-center justify-center pb-32">
        <div className="lg:cards-vip-home flex flex-col gap-8 my-10 w-[90%]">
                         
          
          <article className="relative">
            <Link
              className=" lg:btn-vip-moda-lg hover:shadow-none text-[#403834] flex items-center justify-center bg-white font-ButtonBuy tracking-wide font-medium text-xl absolute top-8  left-1/2 transform -translate-x-1/2 w-[268px] h-12 "
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
              className="lg:btn-vip-moda-lg hover:shadow-none text-[#403834] flex items-center justify-center bg-white font-ButtonBuy font-medium tracking-wide text-xl absolute top-8  left-1/2 transform -translate-x-1/2 w-[268px] h-12 "
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
          className=" text-center hover:shadow-none   text-[#403834] flex tracking-wide items-center justify-center font-ButtonBuy font-normal shadow-card-shadow w-[80%] h-12 text-lg lg:text-3xl bg-white lg:w-[700px] lg:h-[76px]"
          onClick={handleClickCatalogo}
        >
          VER CATÁLOGO COMPLETO
        </Link>
      </div>
    </main>
  );
}
