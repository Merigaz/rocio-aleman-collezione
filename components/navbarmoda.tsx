"use client";

import Link from "next/link";
import Image from "next/image";
import { filterContext, FilterDataContext } from "@/utils/createContext";
import { useContext } from "react";

export default function NavbarModa() {
  const { filter, setFilter } = useContext(filterContext);
  const { filterData, setFilterData } = useContext(FilterDataContext);


  const handleClickModaCasual = () => {
    setFilterData(["Moda Casual"]);
    if (filter) {
      setFilter(false);
    } 
  };
  const handleClickVestidos = () => {
    setFilterData(["Vestidos"]);
     if (filter) {
      setFilter(false);
    }
  };
  const handleClickModaDestacados = () => {
    setFilterData(["vip-Moda"]);
    if (filter) {
      setFilter(false);
    } 
  };
  return (
    <ul className="lg:ul-nav-lg group/nav-moda group/nav">
      <li className="lg:ul-li-nav-lg flex flex-row gap-2 shadow-nav-shadow w-full bg-pinkybg border border-[#403834] border-opacity-40">
        <h1
          className=" ml-2 lg:ml-0 h-8 flex items-center flex-row gap-2 font-Poly text-lg lg:h1-nav-lg lg:group-hover/nav-moda:nav-hover-li cursor-default "
          key={"Moda"}
        >
          Moda
          <Image
            src={"/arrow.svg"}
            alt="Icono"
            height={15}
            width={15}
            className="rotate-180 lg:group-hover/nav-moda:arrow-rotate"
          />
        </h1>
      </li>
      <li
        className="flex flex-col font-Poly border-x border-opacity-20 border-[#403834] p-2 text-[#403834] lg:li-link-nav-lg z-10
      "
        key={"Moda"}
      >
        <Link
          href={"/catalogo"}
          className="py-1 lg:link-li-nav-lg-moda active:bg-pinkybg hover:bg-pinkybg"
          onClick={handleClickModaDestacados}
        >
          Destacados
        </Link>
        <Link
          href={"/catalogo"}
          className="py-1 lg:link-li-nav-lg-moda active:bg-pinkybg hover:bg-pinkybg"
          onClick={handleClickModaCasual}
        >
          Moda Casual
        </Link>
        <Link
          href={"/catalogo"}
          className="py-1 lg:link-li-nav-lg-moda active:bg-pinkybg hover:bg-pinkybg"
          onClick={handleClickVestidos}
        >
          Vestidos
        </Link>
      </li>
    </ul>
  );
}
