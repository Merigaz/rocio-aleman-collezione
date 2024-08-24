import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="flex flex-col relative">
      <div className="flex justify-center bg-white text-black">
        Envío gratis a partir de $250.000
      </div>
      <nav className="flex flex-row justify-between items-center h-16 bg-pinkybg px-12">
        <Image
          src={"/logo.svg"}
          alt="Rocío Alemán Collezione"
          width={264}
          height={264}
        />

        <ul className="flex flex-row justify-center gap-20 items-center absolute left-1/2 -translate-x-1/2">
          <li className="link-underline link-underline-black link-underline:hover">Moda</li>
          <li className="link-underline link-underline-black link-underline:hover">Pijamería</li>
          <li className="link-underline link-underline-black link-underline:hover">Catálogo</li>
        </ul>
        <div className="flex flex-row gap-4">
            <Link href={"/facebook"}><Image src={"/Facebook.svg"} alt="Facebook" height={30} width={30}/></Link>
            <Link href={"/instagram"}><Image src={"/Instagram.svg"} alt="Instagram" height={30} width={30}/></Link>
        </div>
      </nav>
    </header>
  );
}
