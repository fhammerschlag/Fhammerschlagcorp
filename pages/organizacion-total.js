
import Head from 'next/head';

export default function OrganizacionTotal() {
  return (
    <>
      <Head>
        <title>Organización Total - FH Corporate Solutions</title>
      </Head>
      <main className="min-h-screen py-20 px-6 md:px-16 bg-cover bg-center text-gray-900"style={{ backgroundImage: "url('/hero.jpg')" }}>
        <h1 className="text-4xl font-extrabold mb-6 text-center">Organizá tu Economía con IA + Excel</h1>
        <p className="text-lg mb-4 max-w-3xl mx-auto text-center">
          Este servicio está pensado para personas, emprendedores y pequeñas empresas que necesitan tener control total de su economía.
          Te entrego planillas automatizadas en Excel, listas para usar con inteligencia artificial, estructura para la presentación de la 931
          y una guía práctica de más de 25 páginas para que no dependas de nadie.
        </p>
        <p className="text-xl font-semibold mb-6 text-center">Valor inicial del servicio: <span className="text-green-600">$29.990 ARS</span></p>

        <form
          action="mailto:fhsoluciones@outlook.com"
          method="POST"
          encType="text/plain"
          className="max-w-xl mx-auto bg-gray-50 p-6 rounded-xl shadow-md"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Solicitá tu servicio</h2>
          <label className="block mb-2 font-semibold">Nombre completo</label>
          <input type="text" name="Nombre" required className="w-full mb-4 p-3 border rounded-lg" />

          <label className="block mb-2 font-semibold">Email</label>
          <input type="email" name="Email" required className="w-full mb-4 p-3 border rounded-lg" />

          <label className="block mb-2 font-semibold">Mensaje o consulta (opcional)</label>
          <textarea name="Mensaje" rows="4" className="w-full mb-4 p-3 border rounded-lg" />

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Enviar Solicitud
          </button>
        </form>
      </main>
    </>
  );
}
