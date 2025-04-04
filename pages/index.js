
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>FHammerschlagCorp</title>
        <meta name="description" content="Consultoría de inversiones, NFTs y soluciones financieras profesionales." />
      </Head>
      <main className="min-h-screen bg-black text-white px-8 py-20 font-sans">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-pulse">
          El futuro no se espera. Se diseña.
        </h1>
        <p className="text-lg md:text-xl mb-12 max-w-2xl">
          Bienvenido a FH Corporate Solutions. Consultoría integral en inversiones, NFTs, automatización financiera y visión realista. Una marca seria para quienes quieren crecer con base.
        </p>
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-4">Servicios</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Asesorías personalizadas en inversiones y trading</li>
            <li>Optimización financiera para personas y empresas</li>
            <li>Cursos gratuitos y formación con valor real</li>
            <li>Posibilidad de formar parte del equipo FH</li>
          </ul>
        </section>
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-4">NFTs destacados</h2>
          <p className="mb-4">Estas son mis colecciones:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Humanos Eternos – Ídolos del Mundo →{' '}
              <a href="https://opensea.io/collection/idoloseternos" target="_blank" className="underline text-blue-400">Ver en OpenSea</a>
            </li>
            <li>
              KODE KREW – La Nueva Generación Digital →{' '}
              <a href="https://opensea.io/collection/kode-krew" target="_blank" className="underline text-blue-400">Ver en OpenSea</a>
            </li>
          </ul>
        </section>
        <footer className="border-t border-gray-700 pt-10 text-sm">
          <p>Contacto: fhsoluciones@outlook.com | <a href="https://x.com/FHammer_" target="_blank" className="underline">Twitter</a></p>
        </footer>
      </main>
    </>
  );
}
