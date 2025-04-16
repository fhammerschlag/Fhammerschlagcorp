import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Head>
        <title>FHammerschlagCorp | Consultoría Estratégica</title>
        <meta name="description" content="Consultoría financiera, optimización de negocios, inversiones y tecnología con visión de futuro. Federico Hammerschlag – CEO y fundador de FH Corporate Solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </Head>

{/* HEADER */}
<header className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-md py-4 px-6 md:px-16 flex justify-between items-center">
  <h1 className="text-xl font-bold text-white">FH Corporate Solutions</h1>
  <a href="/organizacion-total" className="bg-white hover:bg-gray-100 text-gray-900 font-semibold py-2 px-4 rounded-lg transition">
    Contactame
  </a>
</header>

      {/* HERO */}
      <section className="relative h-screen bg-cover bg-center flex items-center justify-center pt-20" style={{ backgroundImage: "url('/hero.jpg')" }}>
        <div className="bg-black bg-opacity-70 p-8 rounded-xl text-center max-w-3xl animate-fade-in-up">
          <h2 className="text-5xl font-bold text-white leading-snug">
            Claridad, estrategia y <span className="text-blue-400">resultados reales</span> para tu libertad financiera.
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Federico Hammerschlag – CEO | Consultor Estratégico | Inversor con visión de futuro.
          </p>
          <a href="/organizacion-total" className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300">
            Organiza tu economía 
          </a>
        </div>
      </section>
            {/* SOBRE MÍ */}
      <section className="py-20 px-6 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-900">Sobre mí</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Soy Federico Hammerschlag, CEO y fundador de FH Corporate Solutions. Mi propósito es ayudarte a pensar con claridad, invertir con inteligencia y transformar tus resultados con herramientas reales.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          Vengo del mundo de la acción. Combino años de experiencia en administración, finanzas e inversiones con visión tecnológica y enfoque estratégico. Trabajo con individuos y empresas que quieren pasar al siguiente nivel.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          Me especializo en detectar oportunidades, optimizar estructuras financieras, automatizar flujos y ofrecer soluciones que funcionen en la práctica.
        </p>
      </section>
            {/* SERVICIOS */}
      <section className="py-20 bg-gray-50 px-6 md:px-16">
        <h2 className="text-3xl font-extrabold mb-10 text-center text-gray-900">Servicios</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Consultoría Estratégica 1:1</h3>
            <p className="text-gray-700">Te acompaño en decisiones clave: inversiones, optimización financiera, estructuras empresariales o crecimiento personal.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Diagnóstico Financiero</h3>
            <p className="text-gray-700">Analizo tu situación actual y te entrego un plan claro para que tu dinero fluya mejor, se multiplique y trabaje para vos.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Automatización & IA</h3>
            <p className="text-gray-700">Uso herramientas tecnológicas para automatizar tareas, mejorar tus decisiones y liberar tu tiempo.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Material gratuito</h3>
            <p className="text-gray-700">Accedé a contenido exclusivo sobre estrategias reales, inversiones, mentalidad, IA y negocios.</p>
          </div>
        </div>
      </section>
            {/* COLECCIONES DIGITALES */}
      <section className="py-20 px-6 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-10 text-center text-gray-900">Colecciones Digitales</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white shadow-xl rounded-xl overflow-hidden transition hover:shadow-2xl">
            <img src="/nft1.jpg" alt="Humanos Eternos" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Humanos Eternos – Ídolos del Mundo</h3>
              <p className="text-gray-700">NFTs de ídolos históricos, representados con alma y arte. Una colección única con valor simbólico y visual.</p>
              <a href="https://opensea.io/collection/idoloseternos" target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 inline-block hover:underline">Ver en OpenSea</a>
            </div>
          </div>
          <div className="bg-white shadow-xl rounded-xl overflow-hidden transition hover:shadow-2xl">
            <img src="/nft2.jpg" alt="Argentipicos" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Argentipicos</h3>
              <p className="text-gray-700">Personajes digitales con identidad fuerte. Representan una comunidad que prioriza libertad, arte y conocimiento.</p>
              <a href="https://opensea.io/collection/agentipicos" target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 inline-block hover:underline">Ver en OpenSea</a>
            </div>
          </div>
        </div>
      </section>
            {/* CONTACTO */}
      <section className="py-20 bg-gray-900 text-white text-center px-6">
        <h2 className="text-3xl font-extrabold mb-6">¿Querés mejorar tu economía, tu marca o tu visión?</h2>
        <p className="text-lg mb-6 text-gray-300">Demos el primer paso.</p>
        <a href="/organizacion-total" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300">
          Escribime ahora
        </a>
        <p className="mt-4 text-sm text-gray-400">Seguime en Twitter para más contenido: <a href="https://twitter.com/FHammer_" className="underline">@FHammer_</a></p>
      </section>
            {/* FOOTER */}
      <footer className="py-6 bg-black text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} FHammerschlagCorp – Todos los derechos reservados.
      </footer>
            {/* RECURSOS GRATUITOS */}
      <section className="py-20 bg-blue-50 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Recursos Gratuitos</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          Descargá gratis el eBook <strong>“De 0 a Inversor”</strong> y empezá a transformar tu economía con herramientas claras, simples y reales. Es una guía práctica con estrategias probadas sobre finanzas, inversiones, mercado de capitales, DeFi y trading.
        </p>
        <a
          href="/Ebook-finanzas.pdf"
          download
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
        >
          Descargar eBook gratuito
        </a>
        <p className="mt-4 text-sm text-gray-500">Formato PDF | Lectura rápida | Nivel principiante a intermedio</p>
      </section>
    </div>
  );
}
      
      
