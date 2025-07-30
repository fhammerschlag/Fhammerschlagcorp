
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
<section 
  className="relative h-screen bg-cover bg-center flex items-center justify-center pt-20" 
  style={{ backgroundImage: "url('/hero.jpg')" }}
  role="banner"
  aria-label="Sección principal: BioFinanzas Conscientes"
>
  <div className="bg-black bg-opacity-60 p-8 rounded-xl text-center max-w-3xl animate-fade-in-up shadow-xl">
    
    <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-snug">
      BioFinanzas Conscientes®<br />
      <span className="text-blue-400">Ordená tu dinero.<br /> Saná tu historia.</span>
    </h1>
    
    <p className="mt-6 text-lg md:text-xl text-gray-200 font-medium">
      Mentoría personalizada para transformar tus finanzas desde la raíz.<br />
      Combinamos inteligencia financiera, desbloqueo emocional y herramientas con IA.
    </p>
    
    <p className="mt-3 text-sm text-gray-400 italic">
      Federico Hammerschlag – Consultor en Finanzas & Terapeuta Certificado
    </p>
    
    <a 
      href="https://calendly.com/fhsoluciones/30min" 
      className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
      aria-label="Agendá tu diagnóstico gratuito con Federico"
    >
      Quiero mi diagnóstico gratuito
    </a>
    
  </div>
</section>

{/* SOBRE MÍ */}
<section 
  className="py-20 px-6 md:px-16 max-w-5xl mx-auto" 
  role="region" 
  aria-label="Información sobre Federico Hammerschlag"
>
  <h2 className="text-4xl font-extrabold mb-8 text-gray-900 text-center">
    Sobre mí
  </h2>

  <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
    Soy <strong>Federico Hammerschlag</strong>, mentor en finanzas personales y terapeuta en biodescodificación. 
    Acompaño a personas y emprendedores a salir del caos financiero, sanar su relación con el dinero y crear un plan real para vivir con más orden, libertad y propósito.
  </p>

  <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
    Mi enfoque combina <strong>educación financiera consciente</strong>, desbloqueo emocional profundo y herramientas prácticas de <strong>inteligencia artificial aplicada</strong>. 
    No vendo fórmulas mágicas: diseño estrategias reales, personalizadas y sostenibles para que logres resultados concretos y duraderos.
  </p>

  <p className="text-lg md:text-xl leading-relaxed text-gray-700">
    Si buscás claridad, transformación y acompañamiento profesional en tu camino hacia la abundancia, 
    estás en el lugar correcto. <a href="https://calendly.com/fhsoluciones/30min" className="text-blue-500 underline hover:text-blue-700 font-semibold">Reservá tu diagnóstico gratuito</a> y empecemos a trabajar en tu nueva economía personal.
  </p>
</section>
      
{/* DESCARGA PRESENTACIÓN Y GUÍAS */}
<section className="py-16 px-6 md:px-16 text-center bg-blue-50" aria-label="Descargas de presentación y guías">
  <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
    ¿Querés saber cómo funciona BioFinanzas Conscientes?
  </h2>
  <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
    Accedé a la presentación completa en PDF y descubrí cómo transformar tu economía desde la raíz, con un sistema claro, humano y real.
  </p>

  {/* Botón presentación */}
  <a
    href="/BioFinanzas.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
  >
    Ver presentación (PDF)
  </a>
  <p className="mt-4 text-sm text-gray-500">
    Archivo online | 8 páginas | 100% práctico
  </p>

  {/* Guías */}
  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
    {/* Guía IA */}
    <div className="bg-white rounded-xl shadow-md p-6 text-center">
      <h3 className="text-lg font-bold text-gray-900 mb-2">Guía de Inteligencia Artificial</h3>
      <p className="text-sm text-gray-600 mb-4">
        Monetizá, creá y automatizá sin ser técnico. Más de 30 páginas prácticas con herramientas reales.
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

    {/* Guía Finanzas */}
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
<section 
  className="py-20 bg-white px-6 md:px-16 text-center" 
  id="servicios" 
  role="region" 
  aria-label="Listado de Servicios Profesionales"
>
  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
    Servicios Profesionales
  </h2>

  <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">

    {/* Mentoría BioFinanzas */}
    <div className="bg-white shadow-xl rounded-xl p-6 text-left flex items-start space-x-4">
      <svg className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" role="img" aria-label="Icono mentoría">
        <path d="M9 12l2 2 4-4" />
        <path d="M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z" />
      </svg>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Mentoría BioFinanzas Conscientes
        </h3>
        <p className="text-gray-700 mb-3">
          Acompañamiento 1:1 durante 4 semanas para sanar tu relación con el dinero, ordenar tu economía y diseñar un nuevo modelo financiero personal. Combinamos desbloqueo emocional + educación financiera + estrategia digital.
        </p>
        <a 
          href="https://calendly.com/fhsoluciones/30min" 
          className="text-blue-500 hover:underline font-medium"
        >
          Reservá tu diagnóstico gratuito →
        </a>
      </div>
    </div>

    {/* Asesoramiento Financiero */}
    <div className="bg-white shadow-xl rounded-xl p-6 text-left flex items-start space-x-4">
      <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" role="img" aria-label="Icono asesoramiento financiero">
        <path d="M12 8v4l3 3" />
        <path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" />
      </svg>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Asesoramiento Financiero Real
        </h3>
        <p className="text-gray-700 mb-3">
          Diseñamos un plan financiero personalizado desde cero. Te enseño a invertir de forma estratégica, evitar errores comunes y tomar decisiones con claridad. Ideal si querés salir del caos financiero y comenzar a crecer.
        </p>
        <a 
          href="https://calendly.com/fhsoluciones/30min" 
          className="text-green-600 hover:underline font-medium"
        >
          Pedí tu sesión inicial →
        </a>
      </div>
    </div>

    {/* Creación de PDFs Profesionales */}
    <div className="bg-white shadow-xl rounded-xl p-6 text-left flex items-start space-x-4">
      <svg className="h-10 w-10 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" role="img" aria-label="Icono creación de PDFs">
        <path d="M12 4v16m8-8H4" />
      </svg>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Creación de PDFs Profesionales
        </h3>
        <p className="text-gray-700 mb-3">
          Diseño estratégico de PDFs para vender, presentar o educar. Desde guías digitales hasta presentaciones comerciales. Visuales impactantes y textos que convierten, pensados para tu cliente ideal.
        </p>
        <a 
          href="https://calendly.com/fhsoluciones/30min" 
          className="text-purple-600 hover:underline font-medium"
        >
          Consultá tu idea conmigo →
        </a>
      </div>
    </div>

    {/* Diseño Web Profesional */}
    <div className="bg-white shadow-xl rounded-xl p-6 text-left flex items-start space-x-4">
      <svg className="h-10 w-10 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" role="img" aria-label="Icono diseño web">
        <path d="M3 5h18M9 3v2m6-2v2M4 8h16v11H4z" />
      </svg>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Diseño Web Profesional
        </h3>
        <p className="text-gray-700 mb-3">
          Creamos tu web desde cero con enfoque estratégico: responsive, rápida, elegante y optimizada para buscadores. Ideal para transformar tu marca personal en una plataforma digital que vende.
        </p>
        <a 
          href="https://calendly.com/fhsoluciones/30min" 
          className="text-red-600 hover:underline font-medium"
        >
          Hablemos de tu sitio →
        </a>
      </div>
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

{/* CTA FINAL */}
<section className="text-center py-16 px-6 md:px-16 bg-white">
  <h2 className="text-3xl font-semibold text-gray-900 mb-4">¿Querés empezar ahora?</h2>
  <p className="text-lg text-gray-700 mb-6">Reservá tu sesión gratuita y diseñemos juntos tu próximo paso financiero y digital.</p>
  <a href="https://calendly.com/fhsoluciones/30min" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
    Reservar ahora
  </a>
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