import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Head>
        <title>BioFinanzas Conscientes | Consultoría en Finanzas Personales y Transformación</title>
        <meta
          name="description"
          content="Consultoría en finanzas personales, inversiones, inteligencia artificial y biodescodificación. Ordená tu economía, desbloqueá patrones y lográ claridad con mentoring profesional y recursos gratuitos. Federico Hammerschlag – Experto en desbloqueo financiero y productividad."
        />
        <meta name="keywords" content="finanzas personales, consultoría financiera, inversiones, biodescodificación, automatización financiera, inteligencia artificial, mentoring financiero, diagnóstico financiero, orden económico, desbloqueo financiero" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="BioFinanzas Conscientes | Consultoría y Transformación Financiera" />
        <meta property="og:description" content="Mentoría en finanzas, desbloqueo de patrones y automatización con IA. Transformá tu relación con el dinero y empezá a invertir con criterio. Consultá a Federico Hammerschlag." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fhammerschlagcorp.vercel.app" />
        <meta property="og:image" content="/biofinanzas-og.jpg" />
      </Head>

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-md py-4 px-6 md:px-16 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">BioFinanzas Conscientes</h1>
        <a href="/organizacion-total" className="bg-white hover:bg-gray-100 text-gray-900 font-semibold py-2 px-4 rounded-lg transition">
  Hablá conmigo
</a>
      </header>
      {/* HERO */}
      <section className="relative h-screen bg-cover bg-center flex items-center justify-center pt-20" style={{ backgroundImage: "url('/hero.jpg')" }}>
        <div className="bg-black bg-opacity-70 p-8 rounded-xl text-center max-w-3xl animate-fade-in-up">
          <h2 className="text-5xl font-bold text-white leading-snug">
            Ordená tu economía.<br />
            Transformá tu relación con el dinero.<br />
            <span className="text-blue-400">Lográ resultados reales.</span>
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Asesoramiento personalizado en finanzas personales, inversiones y desbloqueo de patrones.<br />
            Federico Hammerschlag – Consultor & Terapeuta Certificado.
          </p>
          <a href="https://calendly.com/fhsoluciones/30min" className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300">
            Quiero mi diagnóstico gratuito
          </a>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section className="py-20 px-6 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-900">Sobre mí</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Soy Federico Hammerschlag, consultor financiero y terapeuta en biodescodificación. Ayudo a personas y empresas a salir del desorden financiero, transformar sus patrones con el dinero y empezar a invertir de forma real y consciente.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          Integro herramientas de inteligencia artificial, educación financiera y desbloqueo emocional, para que logres resultados sólidos y duraderos. Nada de fórmulas mágicas: solo método probado y acompañamiento real.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          Si buscás orden, claridad y un cambio verdadero en tu economía, estás en el lugar correcto. Pedí tu diagnóstico gratuito y descubrí cómo podemos trabajar juntos.
        </p>
      </section>
{/* DESCARGA PRESENTACIÓN PDF */}
<section className="py-16 px-6 md:px-16 text-center bg-blue-50">
  <h2 className="text-3xl font-extrabold text-gray-900 mb-4">¿Querés saber cómo funciona BioFinanzas Conscientes?</h2>
  <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
    Descargá la presentación completa en PDF y descubrí cómo transformar tu economía desde la raíz, con un sistema claro, humano y real.
  </p>
  <a
    href="/BioFinanzas.pdf"
    download
    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
  >
    Descargar presentación (PDF)
  </a>
  <p className="mt-4 text-sm text-gray-500">Archivo simple | 8 páginas | 100% práctico</p>
</section>

      {/* SERVICIOS */}
      <section className="py-20 bg-gray-50 px-6 md:px-16">
        <h2 className="text-3xl font-extrabold mb-10 text-center text-gray-900">Servicios</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Mentoría BioFinanzas Conscientes</h3>
            <p className="text-gray-700">
              Proceso personalizado de 4 semanas para ordenar tus finanzas, detectar bloqueos y transformar tu historia con el dinero. Incluye diagnóstico, plan a medida, herramientas digitales y acompañamiento real.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Asesoramiento Financiero Real</h3>
            <p className="text-gray-700">
              Te ayudo a tomar decisiones de inversión, crear tu plan financiero y avanzar con seguridad. Desde lo más básico hasta inversiones avanzadas.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Automatización Inteligente</h3>
            <p className="text-gray-700">
              Herramientas de IA y Excel para automatizar tareas, organizar tu economía y liberar tiempo. Ganá orden y foco en tus procesos.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Recursos Descargables</h3>
            <p className="text-gray-700">
              planillas, guías prácticas y recursos exclusivos para transformar tu economía y mentalidad.
            </p>
          </div>

        </div>
      </section>

{/* COLECCIONES DIGITALES */}
<section className="py-20 px-6 md:px-16 max-w-3xl mx-auto">
  <h2 className="text-3xl font-extrabold mb-10 text-center text-gray-900">Colecciones Digitales</h2>
  <p className="text-lg text-gray-700 text-center mb-8">
    NFTs y arte digital como activos de valor, historia y contemplación. Descubrí mis colecciones exclusivas en OpenSea.
  </p>

  <div className="grid md:grid-cols-1 gap-10 justify-items-center">
    <div className="bg-white shadow-xl rounded-xl overflow-hidden transition hover:shadow-2xl w-full">
      <img src="/nftt1" alt="Mirrors of the World" className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">Mirrors of the World</h3>
        <p className="text-gray-700">
          Obra digital 1/1. Una colección que explora los paisajes emocionales, filosóficos y simbólicos del alma humana.
          Cada pieza es un espejo visual que invita a la contemplación interior y la conexión con lo invisible.
        </p>
        <a href="https://opensea.io/es/collection/mirrors-of-the-world" target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 inline-block hover:underline">
          Ver en OpenSea
        </a>
      </div>
    </div>
  </div>
</section>

      {/* CONTACTO */}
      <section className="py-20 bg-gray-900 text-white text-center px-6">
        <h2 className="text-3xl font-extrabold mb-6">¿Listo para transformar tu economía?</h2>
        <p className="text-lg mb-6 text-gray-300">Damos el primer paso juntos. Pedí tu diagnóstico gratuito y empecemos hoy.</p>
        <a href="/organizacion-total" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300">
  Escribime ahora
</a>
        <p className="mt-4 text-sm text-gray-400">
          Seguime en Twitter para tips y novedades: <a href="https://twitter.com/FHammer_" className="underline">@FHammer_</a>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="py-6 bg-black text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} BioFinanzas Conscientes – Todos los derechos reservados.
      </footer>

      {/* RECURSOS GRATUITOS */}
      <section className="py-20 bg-blue-50 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Recursos Gratuitos</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          Descargá gratis mi eBook práctico y empezá a ordenar tus finanzas hoy mismo. Técnicas reales, ejemplos y estrategias para avanzar desde cero o potenciar tus inversiones.
        </p>
        <a
          href="/Ebook-finanzas.pdf"
          download
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
        >
          Descargar eBook gratuito
        </a>
        <p className="mt-4 text-sm text-gray-500">PDF simple | 100% práctico | Accesible para todos los niveles</p>
      </section>
    </div>
  );
}
