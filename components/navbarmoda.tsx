"use client"

import Link from "next/link";
import Image from "next/image";
import { FilterDataContext } from "@/utils/createContext";
import { useContext } from "react";

export default function NavbarModa() {
    const { filterData, setFilterData } = useContext(FilterDataContext);
    
  const handleClickModaCasual = () => {
    setFilterData([...filterData, "Moda Casual"]);
  };
  const handleClickVestidos = () => {
    setFilterData([...filterData, "Vestidos"]);
  };
  const handleClickModaDestacados = () => {
    setFilterData([...filterData, "vip-Moda"]);
  };
  return (
    <ul className="text-[#403834] group/nav flex flex-col items-center justify-center w-42 ">
      <li className="text-center w-full h-10 self-center justify-center items-center ">
        <Link
          href={"/catalogo"}
          className=" relative flex items-center justify-center link text-xl text-[#403834] group-hover/nav:bg-white h-full "
        >
          Moda
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
      <Link href={"/catalogo"} className="link submenu-hover py-4 text-lg h-full text-[#403834]" onClick={handleClickModaDestacados}>
          Destacados
        </Link>
        <Link href={"/catalogo"} className="link submenu-hover py-4 text-lg h-full text-[#403834]" onClick={handleClickModaCasual}>
          Moda Casual
        </Link>
        <Link href={"/catalogo"} className="link submenu-hover py-4 text-lg h-full text-[#403834]" onClick={handleClickVestidos}>
          Vestidos
        </Link>
      </li>
    </ul>
  );
}
