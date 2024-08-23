export default function Header() {
  return (
    <header className="flex flex-col">
      <div className="flex justify-center bg-white text-black">Envío gratis a partir de $250.000</div>
      <nav className="flex flex-row justify-center">
        <ul className="flex flex-row gap-2">
          <li>Moda</li>
          <li>Pijamería</li>
          <li>Catálogo</li>
        </ul>
      </nav>
    </header>
  );
}
