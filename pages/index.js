
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
  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {/* Guía IA */}
    <div className="bg-white rounded-xl shadow-md p-6 text-center">
      <h3 className="text-lg font-bold text-gray-900 mb-2">Guía de Inteligencia Artificial</h3>
      <p className="text-sm text-gray-600 mb-4">
        Monetizá, creá y automatizá sin ser técnico. Más de 30 páginas prácticas con herramientas reales.
      </p>
      <a
        href="https://fhcorpsolutions.mitiendanube.com/productos/transforma-tu-vida-con-inteligencia-artificial-guia-practica-para-monetizar-crear-y-automatizar-sin-ser-tecnico/"
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
        href="https://fhcorpsolutions.mitiendanube.com/productos/guia-completa-de-finanzas-personales-de-la-deuda-a-la-libertad-financiera-pdf/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-5 rounded-lg transition duration-300"
      >
        Ver Guía de Finanzas
      </a>
    </div>

    {/* Guía Biodescodificación */}
    <div className="bg-white rounded-xl shadow-md p-6 text-center">
      <h3 className="text-lg font-bold text-gray-900 mb-2">Guía de Biodescodificación</h3>
      <p className="text-sm text-gray-600 mb-4">
        Saná tu relación con el dinero desde la raíz. Guía práctica con más de 30 páginas para liberar bloqueos, transformar tu economía emocional y crear abundancia real.
      </p>
      <a
        href="https://fhcorpsolutions.mitiendanube.com/productos/la-guia-definitiva-de-biodescodificacion-sana-tu-historia-libera-tu-futuro/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-5 rounded-lg transition duration-300"
      >
        Ver Guía de Biodescodificación
      </a>
    </div>
  </div>
</section>

<section className="py-16 px-6 md:px-16 text-center bg-white" aria-label="Comunidad FH Corporate Solutions">
  <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
    Unite a nuestra Comunidad Privada
  </h2>
  <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
    Accedé al grupo exclusivo de Telegram y rodeate de personas que buscan lo mismo que vos: evolución personal, libertad financiera y conciencia estratégica.
  </p>
  <a
    href="https://t.me/comunidadbfc"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
  >
    Entrar a la Comunidad
  </a>
  <p className="mt-4 text-sm text-gray-500">
    Grupo privado | Acceso gratuito | Contenido exclusivo
  </p>
</section>

<section className="py-16 px-6 md:px-16 text-center bg-gray-100" aria-label="Serie de Genios en YouTube">
  <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
    🎥 Serie: Piensa como un Genio
  </h2>
  <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
    Inspirate con videos breves y poderosos basados en las mentes más brillantes de la historia: Maquiavelo, Sun Tzu, Nietzsche, Buda y más.
  </p>
  <a
    href="https://www.youtube.com/@fedehammer"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
  >
    Ver en YouTube
  </a>
  <p className="mt-4 text-sm text-gray-500">
    Nuevos episodios cada semana | Contenido transformador
  </p>
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
<section 
  className="py-20 px-6 md:px-16 max-w-3xl mx-auto" 
  id="colecciones" 
  role="region" 
  aria-label="Galería de colecciones NFT y arte digital"
>
  <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-gray-900">
    Colecciones Digitales
  </h2>

  <p className="text-lg md:text-xl text-gray-700 text-center mb-12">
    Arte NFT como activo simbólico, contemplativo y coleccionable. Explorá piezas únicas creadas con estética curada y profundidad emocional.
  </p>

  <div className="grid md:grid-cols-1 gap-10 justify-items-center">

    {/* Colección: Mirrors of the World */}
    <article 
      className="bg-white shadow-xl rounded-xl overflow-hidden transition hover:shadow-2xl w-full" 
      aria-label="Obra digital Mirrors of the World"
    >
      <img 
        src="/nftt1.jpg" 
        alt="Imagen de la colección NFT Mirrors of the World" 
        className="w-full h-56 object-cover" 
        loading="lazy" 
      />
      <div className="p-6 text-left">
        <h3 className="text-xl font-bold mb-2 text-gray-900">Mirrors of the World</h3>
        <p className="text-gray-700 mb-3">
          Colección NFT 1/1 que explora los paisajes emocionales, filosóficos y simbólicos del alma humana.
          Cada obra es un espejo visual creado con inteligencia artificial y visión curatorial, para conectar con lo invisible y lo esencial.
        </p>
        <a 
          href="https://opensea.io/collection/mirrors-of-the-world" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 mt-2 inline-block hover:underline font-medium"
        >
          Ver colección en OpenSea →
        </a>
      </div>
    </article>

  </div>
</section>

{/* CTA FINAL */}
<section 
  className="text-center py-16 px-6 md:px-16 bg-white" 
  role="region" 
  aria-label="Llamado a la acción final"
>
  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
    ¿Querés empezar ahora?
  </h2>
  <p className="text-lg text-gray-700 mb-6">
    Reservá tu sesión gratuita y diseñemos juntos tu próximo paso financiero, emocional y digital.
  </p>
  <a 
    href="https://calendly.com/fhsoluciones/30min" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
    aria-label="Reservar sesión gratuita con Federico"
  >
    Reservar ahora →
  </a>
</section>

{/* TESTIMONIOS */}
<section 
  className="py-20 px-6 md:px-16 bg-gray-50 text-center" 
  role="region" 
  aria-label="Testimonios de clientes reales"
>
  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">
    Lo que dicen quienes ya transformaron su economía
  </h2>
  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">

    {/* Testimonio 1 */}
    <blockquote className="bg-white p-6 rounded-xl shadow-md">
      <p className="text-gray-800 italic">“En solo 4 semanas logré organizar mis finanzas, entender en qué gastaba y comencé a ahorrar. Lo que más me ayudó fue el enfoque humano y el desbloqueo emocional.”</p>
      <footer className="mt-4 text-sm font-medium text-gray-600">– Luciana F., Emprendedora</footer>
    </blockquote>

    {/* Testimonio 2 */}
    <blockquote className="bg-white p-6 rounded-xl shadow-md">
      <p className="text-gray-800 italic">“Nunca pensé que iba a entender sobre inversiones. Federico lo hace claro, práctico y sin humo. Hoy tengo un plan, invierto y siento seguridad por primera vez.”</p>
      <footer className="mt-4 text-sm font-medium text-gray-600">– Marcos A., Diseñador UX</footer>
    </blockquote>

    {/* Testimonio 3 */}
    <blockquote className="bg-white p-6 rounded-xl shadow-md">
      <p className="text-gray-800 italic">“La mentoría me ayudó a desbloquear patrones familiares de carencia. No es solo plata, es un proceso profundo que te cambia la cabeza y la vida.”</p>
      <footer className="mt-4 text-sm font-medium text-gray-600">– Florencia T., Psicóloga</footer>
    </blockquote>

  </div>
</section>

{/* CONTACTO */}
<section 
  className="py-20 bg-gray-900 text-white text-center px-6" 
  role="region" 
  aria-label="Sección de contacto final"
>
  <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
    ¿Listo para transformar tu economía?
  </h2>
  <p className="text-lg mb-6 text-gray-300">
    Damos el primer paso juntos. Pedí tu diagnóstico gratuito o escribime directamente.
  </p>
  <a 
    href="/organizacion-total" 
    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
  >
    Escribime ahora
  </a>
  <p className="mt-6 text-sm text-gray-400">
    También podés seguirme en <a href="https://twitter.com/FHammer_" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">@FHammer_</a> para más contenido.
  </p>
</section>

{/* FOOTER */}
<footer 
  className="py-6 bg-black text-center text-gray-400 text-sm" 
  role="contentinfo" 
  aria-label="Pie de página"
>
  © {new Date().getFullYear()} BioFinanzas Conscientes® – Todos los derechos reservados.
</footer>

</div>
  );
}