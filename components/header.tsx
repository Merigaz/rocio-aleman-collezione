"use client";
import Image from "next/image";
import Link from "next/link";
import NavbarModa from "./navbarmoda";
import NavbarPijama from "./navbarpijamas";
import { useEffect, useState } from "react";
import useMediaQuery from "@/utils/useMediaQuery";

export default function Header() {
  const [isClient, setIsClient] = useState(false);
  const [isMenuOn, setMenuOn] = useState(false);
  const matches = useMediaQuery("(min-width:1024px)");
  useEffect(() => {
    setIsClient(true);
  }, []);
const onClick:any = (e:any) => {
  if (isMenuOn) {
    setMenuOn(false)
  } else {
    setMenuOn (true)
  }
}




  return (
    <header className="flex flex-col relative w-full">
      <div className="flex justify-center bg-white text-black font-Poly text-xl">
        Envío gratis a partir de $250.000
      </div>
      <nav className="tablet:px-2 w-full flex flex-row justify-center lg:justify-between items-center h-24 bg-pinkybg px-12 drop-shadow-md z-20">
        {isClient ? (
          matches ? (
            <div className="w-full gap-0  flex flex-row items-center justify-center absolute left-1/2 transform -translate-x-1/2 z-10">
              <NavbarPijama />
              <NavbarModa />
              <Link
                href={"/catalogo"}
                className="cel:text-lg font-Poly text-xl text-[#403834]"
              >
                Catálogo
              </Link>
            </div>
          ) : (
            <div className="group/nav-sm absolute top-8 left-4 w-auto h-auto">
              <div
                onClick={onClick}
              >
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
              </div>
              {isMenuOn ? (
                <div className="p-2 bg-white">
                  <NavbarPijama {...onClick} />
                  <NavbarModa {...onClick}/>
                  <Link href={"/catalogo"} className="font-Poly text-base">
                    Catálogo
                  </Link>
                </div>
              ) : null}
            </div>
          )
        ) : null}
        <Link
          href={"/"}
          className="flex items-center hover:cursor-pointer z-10"
        >
          <div>
            <Image
              src={"/logo.svg"}
              alt="Rocío Alemán Collezione"
              width={0}
              height={0}
              quality={100}
              sizes="100%, 100%"
              objectFit="contain"
              className="mr-8 tablet:mr-0 w-[280px] h-[80px] tablet:h-24 lg:w-[348px] laptop:w-[444px]"
            />
          </div>
        </Link>
        <div className="mr-4 flex flex-row w-16 h-16 lg:w-32 lg:h-32 gap-4 items-center absolute right-2 lg:right-0">
          <Link
            href={"https://www.facebook.com/RocioAlemanCollezione/"}
            target="_blank"
          >
            <Image
              src={"/Facebook.svg"}
              alt="Facebook"
              quality={100}
              height={40}
              width={40}
            />
          </Link>
          <Link
            href={"https://www.instagram.com/rocioalemancollezione/"}
            target="_blank"
          >
            <Image
              quality={100}
              src={"/Instagram.svg"}
              alt="Instagram"
              height={40}
              width={40}
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
