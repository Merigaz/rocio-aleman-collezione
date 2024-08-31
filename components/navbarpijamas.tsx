"use client"

import Link from "next/link";
import Image from "next/image";
import { FilterDataContext } from "@/utils/createContext";
import { useContext } from "react";

export default function NavbarPijama() {
    const { filterData, setFilterData } = useContext(FilterDataContext);
    
  const handleClickPijamaDestacados = () => {
    setFilterData([...filterData, "vip-Pijamas"]);
  };
  const handleClickSeda = () => {
    setFilterData([...filterData, "Seda"]);
  };
  const handleClickAlgodon = () => {
    setFilterData([...filterData, "Algodón"]);
  };
  const handleClickDurazno = () => {
    setFilterData([...filterData, "Piel de Durazno"]);
  };
  return (
    <ul className="text-[#403834] group/nav flex flex-col items-center justify-center w-42">
      <li className="relative text-center w-full h-10 self-center justify-center items-center  ">
        <Link
          href={"/catalogo"}
          className=" flex items-center justify-center link text-xl group-hover/nav:bg-white h-full "
        >
          Pijamas
          <Image
            src={"/arrow.svg"}
            alt="Icono"
            height={15}
            width={15}
            className="group-hover/nav:arrow-rotate"
          />
        </Link>
      </li>
      <li className="absolute h-10 gap-0 top-full flex flex-col items-start z-10">
      <Link href={"/catalogo"} className="link submenu-hover py-4 text-lg h-full text-[#403834]" onClick={handleClickPijamaDestacados}>
          Destacados
        </Link>
        <Link href={"/catalogo"} className="link submenu-hover py-4 text-lg h-full text-[#403834]" onClick={handleClickSeda}>
          Seda
        </Link>
        <Link href={"/catalogo"} className="link submenu-hover py-4 text-lg h-full text-[#403834]" onClick={handleClickAlgodon}>
          Algodón
        </Link>
        <Link href={"/catalogo"} className="link submenu-hover py-4 text-lg h-full text-[#403834]" onClick={handleClickDurazno}>
          Piel de Durazno
        </Link>
      </li>
    </ul>
  );
}
