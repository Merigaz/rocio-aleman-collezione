"use client";

import Link from "next/link";
import Image from "next/image";
import { FilterDataContext } from "@/utils/createContext";
import { useContext } from "react";

export default function NavbarModa(onClicK:any) {
  const { filterData, setFilterData } = useContext(FilterDataContext);

  const handleClickModaCasual = () => {
    setFilterData([...filterData, "Moda Casual"]);
    onClicK()
  };
  const handleClickVestidos = () => {
    setFilterData([...filterData, "Vestidos"]);
    onClicK()
  };
  const handleClickModaDestacados = () => {
    setFilterData([...filterData, "vip-Moda"]);
    onClicK()
  };
  return (
    <ul className="lg:ul-nav-lg group/nav-moda group/nav">
      <li className="lg:ul-li-nav-lg flex flex-row gap-2 group-hover/nav-moda:bg-white">
        <h1
          className=" flex flex-row gap-2 font-Poly text-base lg:h1-nav-lg lg:group-hover/nav-moda:nav-hover-li cursor-default "
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
        className="flex flex-col font-Poly p-2 text-[#403834] lg:li-link-nav-lg
      "
        key={"Moda"}
      >
        <Link
          href={"/catalogo"}
          className="py-1 lg:link-li-nav-lg-moda"
          onClick={handleClickModaDestacados}
        >
          Destacados
        </Link>
        <Link
          href={"/catalogo"}
          className="py-1 lg:link-li-nav-lg-moda"
          onClick={handleClickModaCasual}
        >
          Moda Casual
        </Link>
        <Link
          href={"/catalogo"}
          className="py-1 lg:link-li-nav-lg-moda"
          onClick={handleClickVestidos}
        >
          Vestidos
        </Link>
      </li>
    </ul>
  );
}
