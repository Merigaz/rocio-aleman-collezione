import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="flex flex-col relative">
      <div className="flex justify-center bg-white text-black">
        Envío gratis a partir de $250.000
      </div>
      <nav className="flex flex-row justify-between items-center h-18 bg-pinkybg px-12">
        <Image
          src={"/logo.svg"}
          alt="Rocío Alemán Collezione"
          width={288}
          height={288}

        />

        <ul className="flex flex-row justify-center gap-20 items-center absolute left-1/2 -translate-x-1/2">
          <li className="group relative block">
            <Link href={"/facebook"} className="link">
              moda <Image
              src={"/arrow.svg"}
              alt="Icono"
              height={15}
              width={15}
              className="group-hover:arrow-rotate"
            />
            </Link>
            <a className="submenu-hover pl-2">link</a>
          </li>
          <li>
            <Link href={"/facebook"} className="link">
              moda
            </Link>
          </li>
          <li>
            <Link href={"/facebook"} className="link">
              moda
            </Link>
          </li>
        </ul>
        <div className="flex flex-row gap-4">
          <Link href={"/facebook"}>
            <Image
              src={"/Facebook.svg"}
              alt="Facebook"
              height={30}
              width={30}
            />
          </Link>
          <Link href={"/instagram"}>
            <Image
              src={"/Instagram.svg"}
              alt="Instagram"
              height={30}
              width={30}
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
