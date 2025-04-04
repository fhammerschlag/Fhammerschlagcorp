import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="w-full py-4 bg-gray-900 fixed top-0 z-10 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo FH" width={40} height={40} />
          <span className="text-xl font-semibold text-gray-100">FHammerschlag<span className="text-blue-500">Corp</span></span>
        </div>
        <div className="space-x-6 text-gray-200 text-sm font-medium">
          <a href="#inicio" className="hover:text-white">Inicio</a>
          <a href="#sobre" className="hover:text-white">Sobre Mí</a>
          <a href="#servicios" className="hover:text-white">Servicios</a>
          <a href="#nfts" className="hover:text-white">NFTs</a>
          <a href="#contacto" className="hover:text-white">Contacto</a>
        </div>
      </div>
    </nav>
  );
}