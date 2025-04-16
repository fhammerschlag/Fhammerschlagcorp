import Head from 'next/head';

export default function Gracias() {
  return (
    <>
      <Head>
        <title>Gracias – FH Corporate Solutions</title>
      </Head>
      <main
        className="min-h-screen py-20 px-6 md:px-16 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="max-w-2xl mx-auto bg-black bg-opacity-70 p-10 rounded-2xl text-center shadow-2xl">
          <h1 className="text-4xl font-extrabold mb-6">¡Gracias por dar el primer paso!</h1>
          <p className="text-lg mb-6">
            Acabás de tomar una decisión clave para transformar tu economía.
            En breve voy a revisar tu solicitud y te voy a contactar personalmente para ayudarte a organizar tu economía con IA y Excel.
          </p>
          <p className="text-lg font-semibold mb-8">
            Mientras tanto, te dejo dos herramientas gratuitas para que empieces hoy mismo:
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="/organizacion.xlsx"
              download
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition text-lg"
            >
              📥 Descargar Planilla de Organización
            </a>
            <a
              href="/Ebook-finanzas.pdf"
              download
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition text-lg"
            >
              📘 Descargar Ebook Financiero
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
