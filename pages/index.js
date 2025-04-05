
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Head>
        <title>FHammerschlagCorp</title>
        <meta name="description" content="Federico Hammerschlag | CEO, inversor y consultor estratégico. Asesorías, optimización financiera, NFTs y más." />
      </Head>

      {/* HERO */}
      <section className="relative h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
        <div className="bg-black bg-opacity-60 p-6 rounded-xl text-center max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Estrategia, claridad y <span className="text-blue-400">acción real</span> para alcanzar tu libertad financiera.
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Federico Hammerschlag – CEO | Inversor | Consultor Estratégico
          </p>
          <a href="mailto:fhsoluciones@outlook.com" className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl">
            Contactame ahora
          </a>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section className="py-20 px-6 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Soy Federico Hammerschlag, un profesional con amplia experiencia en el mundo de las finanzas e inversiones. Mi enfoque combina estrategia sólida con el uso de inteligencia artificial para generar resultados concretos. Me especializo en asesorar a empresas y particulares, integrando tecnología, análisis profundo de datos y visión de negocio.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          A lo largo de mi carrera lideré procesos clave en organizaciones, optimicé operaciones, diseñé esquemas de inversión y acompañé a múltiples proyectos hacia su rentabilidad. Como CEO, mi visión se enfoca en claridad estratégica, liderazgo real y acción concreta.
        </p>
      </section>

      {/* SERVICIOS */}
      <section className="py-20 bg-gray-50 px-6 md:px-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Servicios</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Asesorías personalizadas</h3>
            <p>Consultorías 1:1 para definir tu estrategia financiera, optimizar tu negocio o tomar decisiones clave de inversión.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Optimización financiera</h3>
            <p>Mejora de rentabilidad, eficiencia y flujo de dinero en empresas o proyectos personales.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Cursos gratuitos</h3>
            <p>Material educativo exclusivo sobre inversiones, IA, estrategias y gestión empresarial.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Integración de IA</h3>
            <p>Aplicación de herramientas tecnológicas para análisis de datos, automatización y toma de decisiones inteligentes.</p>
          </div>
        </div>
      </section>

      {/* NFTs */}
      <section className="py-20 px-6 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">NFTs</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img src="/nft1.jpg" alt="Humanos Eternos" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Humanos Eternos – Ídolos del Mundo</h3>
              <p className="text-gray-700">Una colección digital que inmortaliza ídolos históricos en formato NFT. Arte con identidad, disponible en OpenSea.</p>
              <a href="https://opensea.io/collection/idoloseternos" target="_blank" className="text-blue-500 mt-2 inline-block">Ver colección</a>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img src="/nft2.jpg" alt="Kode Krew" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Argentipicos</h3>
              <p className="text-gray-700">Personajes digitales con identidad fuerte, diseñados para una comunidad que valora la libertad financiera, el arte y la tecnología.</p>
              <a href="https://opensea.io/collection/agentipicos" target="_blank" className="text-blue-500 mt-2 inline-block">Ver colección</a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="py-20 bg-gray-900 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-6">¿Querés llevar tus finanzas al siguiente nivel?</h2>
        <p className="text-lg mb-6">Escribime y demos el primer paso.</p>
        <a href="mailto:fhsoluciones@outlook.com" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl">
          Escribime ahora
        </a>
        <p className="mt-4 text-sm text-gray-400">También podés seguirme en Twitter: <a href="https://twitter.com/FHammer_" className="underline">@FHammer_</a></p>
      </section>

      {/* FOOTER */}
      <footer className="py-6 bg-black text-center text-gray-400 text-sm">
        © 2025 FHammerschlagCorp. Todos los derechos reservados.
      </footer>
    </div>
  );
}
