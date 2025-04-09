import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Head>
        <title>FHammerschlagCorp | Consultoría Estratégica</title>
        <meta name="description" content="Consultoría financiera, optimización de negocios, inversiones y tecnología con visión de futuro. Federico Hammerschlag – CEO y fundador de FH Corporate Solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </Head>

      <section className="py-20 px-6 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-900">Sobre mí</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Soy Federico Hammerschlag, CEO y fundador de FH Corporate Solutions. Mi propósito es simple: ayudarte a pensar con claridad, invertir con inteligencia y transformar tus resultados con herramientas reales.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          Vengo del mundo de la acción. Combino años de experiencia en administración, finanzas e inversiones con visión tecnológica y enfoque estratégico. Trabajo con individuos y empresas que quieren pasar al siguiente nivel.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          Me especializo en detectar oportunidades, optimizar estructuras financieras, automatizar flujos y ofrecer soluciones que funcionen en la práctica.
        </p>
      </section>
    </div>
  );
}
