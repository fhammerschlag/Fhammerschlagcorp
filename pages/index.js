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
{/* DESCARGA PRESENTACIÓN Y GUÍAS */}
<section className="py-16 px-6 md:px-16 text-center bg-blue-50">
  <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
    ¿Querés saber cómo funciona BioFinanzas Conscientes?
  </h2>
  <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
    Descargá la presentación completa en PDF y descubrí cómo transformar tu economía desde la raíz, con un sistema claro, humano y real.
  </p>

  {/* Botón principal presentación */}
  <a
    href="/BioFinanzas.pdf"
    download
    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
  >
    Descargar presentación (PDF)
  </a>
  <p className="mt-4 text-sm text-gray-500">
    Archivo simple | 8 páginas | 100% práctico
  </p>

  {/* NUEVA SECCIÓN CON LOS DOS PDFs EXTRAS */}
  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
    
    {/* Guía de Inteligencia Artificial */}
    <div className="bg-white rounded-xl shadow-md p-6 text-center">
      <h3 className="text-lg font-bold text-gray-900 mb-2">Guía de Inteligencia Artificial</h3>
      <p className="text-sm text-gray-600 mb-4">
        Aprendé a monetizar, crear y automatizar sin ser técnico. Más de 30 páginas prácticas para aplicar ya.
      </p>
      <a
        href="https://biofinanzas.mitiendanube.com/productos/transforma-tu-vida-con-inteligencia-artificial-guia-practica-para-monetizar-crear-y-automatizar-sin-ser-tecnico/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-5 rounded-lg transition duration-300"
      >
        Ver Guía de IA
      </a>
    </div>

    {/* Guía de Finanzas Personales */}
    <div className="bg-white rounded-xl shadow-md p-6 text-center">
      <h3 className="text-lg font-bold text-gray-900 mb-2">Guía de Finanzas Personales</h3>
      <p className="text-sm text-gray-600 mb-4">
        De la deuda a la libertad financiera. Guía práctica con más de 30 páginas para ordenar y transformar tu economía.
      </p>
      <a
        href="https://biofinanzas.mitiendanube.com/productos/guia-completa-de-finanzas-personales-de-la-deuda-a-la-libertad-financiera-pdf/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-5 rounded-lg transition duration-300"
      >
        Ver Guía de Finanzas
      </a>
    </div>

  </div>
</section>

      {/* SERVICIOS */}
      <section className="py-20 bg-gray-50 px-6 md:px-16">
        <h2 className="text-3xl font-extrabold mb-10 text-center text-gray-900">Servicios</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">🔓 Mentoría 1 a 1: Ordená tu economía y desbloqueá tu historia con el dinero</h3>
            <p className="text-gray-700">
              Programa intensivo de 4 semanas para ordenar tus finanzas, liberar bloqueos heredados y transformar tu relación con el dinero desde la raíz.
              Incluye diagnóstico personalizado, herramientas digitales, guía paso a paso y acompañamiento real.
              👉 Ideal si sentís que ganás pero no avanzás.
            </p>
            <a href="https://calendly.com/fhsoluciones/30min" className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300">
            Charla Gratuita
          </a>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">📊 Plan Financiero Personalizado para Invertir con Seguridad</h3>
            <p className="text-gray-700">
              Te ayudo a diseñar tu plan financiero, elegir buenas inversiones y avanzar con claridad.
            Desde cero o con experiencia previa, trabajamos juntos para que entiendas qué hacer con tu dinero y cómo multiplicarlo sin miedo ni confusión.
            👉 Incluye sesiones, herramientas y visión estratégica.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">📄 PDFs que Venden: Diseño, Redacción y Formato Pro</h3>
            <p className="text-gray-700">
              ¿Querés vender tu idea, curso o servicio en PDF? Lo armamos por vos. Diseñamos documentos potentes, claros y visuales para que vendas más.
              👉 Ideal para eBooks, guías prácticas, presentaciones, manuales o propuestas.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">🖥️ Creación de Páginas Web Profesionales</h3>
            <p className="text-gray-700">
              Desarrollamos tu sitio web personalizado en pocos días. Ideal para freelancers, negocios, marcas personales y proyectos que quieren tener presencia online real. Sitios rápidos, modernos, adaptados al celular y con diseño profesional.
              👉 Incluye diseño + desarrollo + publicación online.
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
      <img src="/nftt1.jpg" alt="Mirrors of the World" className="w-full h-56 object-cover" />
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
