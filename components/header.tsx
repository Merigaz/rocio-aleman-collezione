import Image from "next/image";
import Link from "next/link";
import NavbarModa from "./navbarmoda";
import NavbarPijama from "./navbarpijamas";
export default function Header() {
  return (
    <header className="flex flex-col relative">
      <div className="flex justify-center bg-white text-black font-Poly text-xl">
        Envío gratis a partir de $250.000
      </div>
      <nav className="flex flex-row justify-between items-center h-24 bg-pinkybg px-12">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt="Rocío Alemán Collezione"
            width={420}
            height={420}
            quality={100}
            className="h-full object-cover"
          />
        </Link>
        <div className="flex flex-row items-center justify-center gap-6 absolute left-1/2 transform -translate-x-1/2 z-10" >
          <NavbarPijama />
          <NavbarModa />
          <Link href={"/catalogo"} className="font-Poly text-xl text-[#403834]">
            Catálogo
          </Link>
        </div>
        <div className="flex flex-row gap-4">
          <Link href={"https://www.facebook.com/RocioAlemanCollezione/"} target="_blank">
            <Image
              src={"/Facebook.svg"}
              alt="Facebook"
              height={40}
              width={40}
            />
          </Link>
          <Link href={"https://www.instagram.com/rocioalemancollezione/"} target="_blank">
            <Image
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
