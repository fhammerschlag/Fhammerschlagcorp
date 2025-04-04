
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-12 space-y-20 scroll-smooth">
      <section className="text-center space-y-4">
        <img src="/logo.png" alt="FH Corp" className="mx-auto w-32 h-32 rounded-full border-4 border-white" />
        <h1 className="text-4xl font-bold">El futuro no se espera. Se diseña.</h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto">FH Corporate Solutions es una propuesta concreta para transformar tu economía, tu marca y tu visión en una experiencia poderosa y organizada. Consultoría moderna, estrategias reales.</p>
      </section>

      <section id="quien-soy" className="max-w-3xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 border-gray-700">Quién soy</h2>
        <p>Soy Federico Hammerschlag. No soy una agencia. No soy humo. Soy una cabeza pensante con calle, conocimiento real y obsesión por el orden estratégico. Trabajo con procesos concretos, visión moderna y herramientas que pocos entienden.</p>
      </section>

      <section id="propuesta" className="max-w-3xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 border-gray-700">Qué hago</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Organización financiera personal y empresarial</li>
          <li>Optimización de flujos de dinero</li>
          <li>Diseño de sistemas simples para escalar tu actividad</li>
          <li>Automatización contable, cobranzas y pagos</li>
          <li>Consultoría Web3 y activos digitales</li>
        </ul>
      </section>

      <section id="unidad-web3" className="max-w-3xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 border-gray-700">Unidad Web3</h2>
        <p>No necesitás ser experto en cripto. Solo tener visión. Desde esta unidad exploramos el futuro: NFTs, activos digitales y tecnología blockchain aplicada de forma útil.</p>
        <p>Si querés interactuar, podés hacerlo. Si no, seguí leyendo tranquilo. Todo está diseñado para generar confianza, no presión.</p>
        <div className="pt-4">
          <ConnectWallet theme="dark" btnTitle="Ingresar si querés explorar" />
        </div>
      </section>

      <section id="nfts" className="max-w-3xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 border-gray-700">NFTs</h2>
        <p>Estas son algunas de mis obras digitales únicas. Cada pieza representa una parte de esta visión: arte con identidad, coleccionables con historia.</p>
        <ul className="space-y-4">
          <li className="border p-4 rounded bg-gray-800">NFT 1 - “Orígenes”</li>
          <li className="border p-4 rounded bg-gray-800">NFT 2 - “Conexión Cruda”</li>
          <li className="border p-4 rounded bg-gray-800">NFT 3 - “Fuerza del Silencio”</li>
        </ul>
        <a href="https://opensea.io" target="_blank" className="inline-block mt-4 px-4 py-2 bg-white text-black font-bold rounded hover:bg-gray-200">Explorar en OpenSea</a>
      </section>

      <section id="contacto" className="text-center pt-16">
        <h2 className="text-xl mb-2">¿Querés que resolvamos algo juntos?</h2>
        <p className="text-gray-400 mb-4">Podés escribirme por X/Twitter o por donde sea. No hay excusas, solo acción.</p>
        <a href="https://twitter.com" target="_blank" className="px-6 py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600">Contactar</a>
      </section>
    </main>
  );
}
