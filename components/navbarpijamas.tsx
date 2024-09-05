"use client";

import Link from "next/link";
import Image from "next/image";
import { FilterDataContext } from "@/utils/createContext";
import { useContext } from "react";

export default function NavbarPijama(onClicK:any) {
  const { filterData, setFilterData } = useContext(FilterDataContext);

  const handleClickPijamaDestacados = () => {
    setFilterData([...filterData, "vip-Pijamas"]);
    onClicK()
  };
  const handleClickSeda = () => {
    setFilterData([...filterData, "Seda"]);
    onClicK()
  };
  const handleClickAlgodon = () => {
    setFilterData([...filterData, "Algodón"]);
    onClicK()
  };
  const handleClickDurazno = () => {
    setFilterData([...filterData, "Piel de Durazno"]);
    onClicK()
  };
  return (
    <ul className="flex flex-col lg:ul-nav-lg group/nav-pijama">
      <li className="lg:ul-li-nav-lg flex flex-row gap-2">
        <h1 className="flex flex-row gap-2 lg:h1-nav-lg font-Poly text-base cursor-default lg:group-hover/nav-pijama:nav-hover-li group-hover/nav-pijama:bg-white ">
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
        className="flex flex-col font-Poly p-2  text-[#403834] lg:li-link-nav-lg"
        key={"Pijama"}
      >
        <Link
          href={"/catalogo"}
          className="py-1 lg:link-li-nav-lg-pijama z-40"
          onClick={handleClickPijamaDestacados}
        >
          Destacados
        </Link>
        <Link
          href={"/catalogo"}
          className="py-1 lg:link-li-nav-lg-pijama"
          onClick={handleClickSeda}
        >
          Seda
        </Link>
        <Link
          href={"/catalogo"}
          className="py-1 lg:link-li-nav-lg-pijama"
          onClick={handleClickAlgodon}
        >
          Algodón
        </Link>
        <Link
          href={"/catalogo"}
          className="lg:link-li-nav-lg-pijama"
          onClick={handleClickDurazno}
        >
          Piel de Durazno
        </Link>
      </li>
    </ul>
  );
}
