import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Head>
        <title>BioFinanzas Conscientes | Consultoría en Finanzas Personales y Transformación</title>
        <meta
          name="description"
          content="Mentoría en finanzas personales, automatización con IA, inversiones y desbloqueo de patrones emocionales. Lográ orden y resultados reales con Federico Hammerschlag."
        />
        <meta name="keywords" content="finanzas personales, consultoría financiera, inversiones, biodescodificación, inteligencia artificial, mentoría, automatización, análisis técnico, trading, orden económico, desbloqueo financiero" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="BioFinanzas Conscientes | Consultoría y Transformación Financiera" />
        <meta property="og:description" content="Mentoría en finanzas, automatización y desbloqueo emocional. Aprendé a invertir con análisis técnico e inteligencia artificial aplicada. Consultá a Federico Hammerschlag." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fhammerschlagcorp.vercel.app" />
        <meta property="og:image" content="/biofinanzas-og.jpg" />
      </Head>

      {/* HERO */}
      <section className="relative h-screen bg-cover bg-center flex items-center justify-center pt-20" style={{ backgroundImage: "url('/hero.jpg')" }}>
        <div className="bg-black bg-opacity-70 p-8 rounded-xl text-center max-w-3xl animate-fade-in-up">
          <h2 className="text-5xl font-bold text-white leading-snug">
            Ordená tu economía.<br />
            Automatizá tu vida.<br />
            <span className="text-blue-400">Invertí con estrategia real.</span>
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Mentoría y servicios digitales en finanzas personales, análisis técnico, IA aplicada y desbloqueo emocional. <br />
            Federico Hammerschlag – Consultor & Estratega Digital.
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
          Soy Federico Hammerschlag, consultor financiero, estratega en inteligencia artificial aplicada y terapeuta en biodescodificación. Ayudo a personas y emprendedores a salir del caos financiero, desbloquear patrones heredados y activar sistemas que funcionen para su vida real.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          Combino educación financiera, automatización con IA, análisis técnico y trabajo emocional profundo. No vendo fórmulas mágicas, sino un sistema probado para ordenar, invertir y crecer con foco y propósito.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          Si querés salir del desorden y construir una nueva economía con claridad, podés agendar una llamada gratuita y empezar hoy.
        </p>
      </section>

{/* QUÉ PODÉS CONTRATAR CONMIGO */}
<section className="py-20 px-6 md:px-16 text-center bg-gray-100">
  <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
    ¿Qué podés contratar conmigo?
  </h2>
  <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
    Ofrezco mentorías personalizadas, desarrollo de sitios web, PDFs profesionales, clases de IA y formación en análisis técnico para ayudarte a transformar tu economía, automatizar tu vida y tomar decisiones con criterio.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
    {/* Mentoría */}
    <div className="bg-white shadow-md rounded-xl p-6 text-left">
      <h3 className="text-xl font-bold mb-2 text-blue-600">Mentoría BioFinanzas Conscientes</h3>
      <p className="text-sm text-gray-700 mb-4">
        Programa intensivo 1 a 1 para ordenar tus finanzas, liberar bloqueos y diseñar un nuevo plan económico con sentido.
      </p>
      <a href="https://calendly.com/fhsoluciones/30min" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        Reservar sesión
      </a>
    </div>

    {/* Webs */}
    <div className="bg-white shadow-md rounded-xl p-6 text-left">
      <h3 className="text-xl font-bold mb-2 text-gray-900">Creación de Páginas Web</h3>
      <p className="text-sm text-gray-700 mb-4">
        Sitios profesionales, modernos y rápidos. Ideal para freelancers, negocios, consultores o marcas personales. Diseño + publicación incluida.
      </p>
      <a href="https://calendly.com/fhsoluciones/30min" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
        Pedir cotización
      </a>
    </div>

    {/* PDFs */}
    <div className="bg-white shadow-md rounded-xl p-6 text-left">
      <h3 className="text-xl font-bold mb-2 text-gray-900">Diseño de PDFs Profesionales</h3>
      <p className="text-sm text-gray-700 mb-4">
        Armado completo de eBooks, guías, presentaciones o propuestas. Redacción clara + diseño visual para que vendas mejor.
      </p>
      <a href="https://calendly.com/fhsoluciones/30min" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
        Solicitar servicio
      </a>
    </div>

    {/* Enseñanza de IA + Trading */}
    <div className="bg-white shadow-md rounded-xl p-6 text-left">
      <h3 className="text-xl font-bold mb-2 text-gray-900">IA, Automatización y Trading</h3>
      <p className="text-sm text-gray-700 mb-4">
        Aprendé a usar IA y herramientas digitales para ordenar tu vida, automatizar tareas o analizar el mercado. También doy formación práctica en análisis técnico y estrategia real para invertir con criterio.
      </p>
      <a href="https://calendly.com/fhsoluciones/30min" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
        Agendar clase inicial
      </a>
    </div>
  </div>
</section>

{/* DESCARGA DE PDFs */}
<section className="py-16 px-6 md:px-16 text-center bg-blue-50">
  <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
    ¿Querés saber cómo funciona BioFinanzas Conscientes?
  </h2>
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

  {/* Guías extras */}
  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
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

{/* CTA FINAL */}
<section className="text-center py-16 px-6 md:px-16 bg-white">
  <h2 className="text-3xl font-semibold text-gray-900 mb-4">¿Querés empezar ahora?</h2>
  <p className="text-lg text-gray-700 mb-6">Reservá tu sesión gratuita y diseñemos juntos tu próximo paso financiero y digital.</p>
  <a href="https://calendly.com/fhsoluciones/30min" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
    Reservar ahora
  </a>
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

</div>
  );
}