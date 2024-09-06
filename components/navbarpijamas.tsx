"use client";

import Link from "next/link";
import Image from "next/image";
import { filterContext, FilterDataContext } from "@/utils/createContext";
import { useContext } from "react";

export default function NavbarPijama() {
  const { filterData, setFilterData } = useContext(FilterDataContext);
  const { filter, setFilter } = useContext(filterContext);

  const handleClickPijamaDestacados = () => {
    setFilterData(["vip-Pijamas"]);
    if (filter) {
      setFilter(false);
    } 
  };
  const handleClickSeda = () => {
    setFilterData(["Pijamas de Seda"]);
    if (filter) {
      setFilter(false);
    } 
  };
  const handleClickAlgodon = () => {
    setFilterData(["Pijamas de Algodón"]);
    if (filter) {
      setFilter(false);
    }
  };
  const handleClickDurazno = () => {
    setFilterData(["Pijamas de Piel de Durazno"]);
    if (filter) {
      setFilter(false);
    } 
  };
  return (
    <ul className="flex flex-col lg:ul-nav-lg group/nav-pijama z-20">
      <li className="lg:ul-li-nav-lg flex flex-row gap-2 shadow-nav-shadow z-10 w-full bg-pinkybg border border-[#403834] border-opacity-40">
        <h1 className="ml-2 h-8 items-center lg:ml-0 flex flex-row gap-2 lg:h1-nav-lg font-Poly text-lg cursor-default lg:group-hover/nav-pijama:nav-hover-li w-full">
          Pijamas
          <Image
            src={"/arrow.svg"}
            alt="Icono"
            height={15}
            className="rotate-180 lg:group-hover/nav-pijama:arrow-rotate"
            width={15}
          />
        </h1>
      </li>
      <li
        className="flex flex-col font-Poly border-x border-opacity-20 border-[#403834]  text-[#403834] lg:li-link-nav-lg"
        key={"Pijama"}
      >
        <Link
          href={"/catalogo"}
          className="py-1 lg:link-li-nav-lg-pijama w-full p-1 active:bg-pinkybg hover:bg-pinkybg"
          onClick={handleClickPijamaDestacados}
        >
          Destacados
        </Link>
        <Link
          href={"/catalogo"}
          className="py-1 lg:link-li-nav-lg-pijama  w-full p-1 active:bg-pinkybg hover:bg-pinkybg"
          onClick={handleClickSeda}
        >
          Seda
        </Link>
        <Link
          href={"/catalogo"}
          className="py-1 lg:link-li-nav-lg-pijama  w-full  p-1 active:bg-pinkybg hover:bg-pinkybg"
          onClick={handleClickAlgodon}
        >
          Algodón
        </Link>
        <Link
          href={"/catalogo"}
          className="lg:link-li-nav-lg-pijama  border-b-0 w-full  p-1 active:bg-pinkybg hover:bg-pinkybg"
          onClick={handleClickDurazno}
        >
          Piel de Durazno
        </Link>
      </li>
    </ul>
  );
}
