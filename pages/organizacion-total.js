import Head from 'next/head';

export default function OrganizacionTotal() {
  return (
    <>
      <Head>
        <title>Control Total – FH Corporate Solutions</title>
      </Head>
      <main
        className="min-h-screen py-20 px-6 md:px-16 bg-cover bg-center text-gray-900"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <h1 className="text-4xl font-extrabold mb-6 text-center">
          Control Total: Ordená tu Economía y Salí del Modo Supervivencia
        </h1>

        <p className="text-lg mb-6 max-w-3xl mx-auto text-center bg-white bg-opacity-80 p-6 rounded-xl">
          No necesitás ser contador, ni inversor, ni tener todo resuelto.
          Solo necesitás dejar de vivir apagando incendios.
          <br /><br />
          Yo te ayudo a organizar tu economía, automatizar tus finanzas con Excel e inteligencia artificial,
          armar tus planillas, tu presentación de la 931, y todo lo que nunca nadie te enseñó sobre cómo tener orden y control.
          <br /><br />
          Si querés que lo hagamos juntos, <strong>solicitá una entrevista</strong>. Yo me encargo del resto.
        </p>

        <form
          action="https://formsubmit.co/fhsoluciones@outlook.com"
          method="POST"
          className="max-w-xl mx-auto bg-gray-50 p-6 rounded-xl shadow-md mt-10"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://fhammerschlagcorp.vercel.app/gracias" />

          <h2 className="text-2xl font-bold mb-4 text-center">Solicitá tu entrevista personalizada</h2>

          <label className="block mb-2 font-semibold">Nombre completo</label>
          <input type="text" name="Nombre" required className="w-full mb-4 p-3 border rounded-lg" />

          <label className="block mb-2 font-semibold">Email</label>
          <input type="email" name="Email" required className="w-full mb-4 p-3 border rounded-lg" />

          <label className="block mb-2 font-semibold">Mensaje o consulta (opcional)</label>
          <textarea name="Mensaje" rows="4" className="w-full mb-4 p-3 border rounded-lg" />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Enviar Solicitud
          </button>
        </form>
      </main>
    </>
  );
}
