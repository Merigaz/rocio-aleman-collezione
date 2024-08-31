"use client";

import CarouselComponent from "@/components/carousel";
import { FilterDataContext } from "@/utils/createContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

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
  return (
    <main>
      <CarouselComponent />
      <div className="flex flex-col items-center justify-center pb-32">
        <div className="flex flex-row gap-16 items-center justify-center py-16">
          <article className="relative">
            <Link
              className=" text-[#403834] hover:shadow-none flex tracking-wide items-center justify-center absolute top-8  left-1/2 transform -translate-x-1/2 font-ButtonBuy font-normal shadow-card-shadow text-3xl bg-white w-[380px] h-[76px]"
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
              className=" hover:shadow-none   text-[#403834] flex tracking-wide items-center justify-center absolute top-8  left-1/2 transform -translate-x-1/2 font-ButtonBuy font-normal shadow-card-shadow text-3xl bg-white w-[360px] h-[76px]"
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
        <Link href={"/catalogo"} className=" text-center hover:shadow-none   text-[#403834] flex tracking-wide items-center justify-center font-ButtonBuy font-normal shadow-card-shadow text-3xl bg-white w-[700px] h-[76px]" onClick={handleClickCatalogo}>VER CATÁLOGO COMPLETO</Link>
      </div>
    </main>
  );
}
