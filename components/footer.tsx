"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function FooterComp() {
  const pathname = usePathname();
  if (pathname == "/" || pathname == "/catalogo") {
    return (
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-[64px] font-medium font-ButtonBuy pb-24">
          Contáctanos
        </h1>
        <hr className="border-t-2 border-black w-4/5 mx-auto my-4"></hr>
        <div className="flex flex-row justify-around   items-center gap-8 h-48 w-full">
          <div className="flex flex-col font-Poly ">
            <a className="text-[#403834] text-2xl">Contacto</a>
            <a className="text-[#CB9F87] text-xl">+57 301 423 1174</a>
          </div>
          <div className="flex flex-col font-Poly text-xl">
            <a className="text-[#403834]text-2xl">Nestra tienda física</a>
            <a className="text-[#CB9F87] text-xl">Carrera 0#0</a>
          </div>
          <div className="flex flex-col gap-4 font-Poly text-2xl">
            <a className="text-[#403834]">Redes Sociales</a>

            <Link
              href={"https://www.facebook.com/RocioAlemanCollezione/"}
              target="_blank"
              className="flex flex-row items-center text-xl gap-2 text-[#CB9F87]"
            >
              <Image
                src={"/Facebook.svg"}
                alt="Facebook"
                height={40}
                width={40}
              />
              RocioAlemanCollezione
            </Link>
            <Link
              href={"https://www.instagram.com/rocioalemancollezione/"}
              target="_blank"
              className="flex flex-row items-center text-xl gap-2 text-[#CB9F87]"
            >
              <Image
                src={"/Instagram.svg"}
                alt="Instagram"
                height={40}
                width={40}
              />
              RocioAlemanCollezione
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
