import { useState } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Button,
} from "@headlessui/react";
import Image from "next/image";
import { FilterDataContext } from "@/utils/createContext";
import { useContext } from "react";
import Link from "next/link";

export default function ModalNav() {
  let [isOpen, setIsOpen] = useState(false);
  const { filterData, setFilterData } = useContext(FilterDataContext);

  const handleClickModaCasual = () => {
    setFilterData(["Moda Casual"]);
    setIsOpen(false);
  };
  const handleClickVestidos = () => {
    setFilterData(["Vestidos"]);
    setIsOpen(false);
  };

  const handleClickModaDestacados = () => {
    setFilterData(["vip-Moda"]);
    setIsOpen(false);
  };
  const handleClickPijamaDestacados = () => {
    setFilterData(["vip-Pijamas"]);
    setIsOpen(false);
  };
  const handleClickSeda = () => {
    setFilterData(["Pijamas de Seda"]);
    setIsOpen(false);
  };
  const handleClickAlgodon = () => {
    setFilterData(["Pijamas de Algodón"]);
    setIsOpen(false);
  };
  const handleClickDurazno = () => {
    setFilterData(["Pijamas de Piel de Durazno"]);
    setIsOpen(false);
  };
  return (
    <div className="relative">
      <Button onClick={() => setIsOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </Button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        transition
        className="absolute top-[126px] left-0  transition duration-300 ease-in-out data-[closed]:-translate-x-[480px] "
      >
        <DialogPanel className="bg-white">
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
          <div className="bg-pinkybg border border-[#403834] border-opacity-30">
            <Link href={"/catalogo"} className="ml-2 h-8 font-Poly text-lg">
              Catálogo
            </Link>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}
