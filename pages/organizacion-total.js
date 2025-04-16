
import Head from 'next/head';

export default function OrganizacionTotal() {
  return (
 import Head from 'next/head';

export default function OrganizacionTotal() {
  return (
    <>
      <Head>
        <title>Control Total - FH Corporate Solutions</title>
      </Head>
      <main
        className="min-h-screen py-20 px-6 md:px-16 bg-cover bg-center text-gray-900"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <h1 className="text-4xl font-extrabold mb-6 text-center drop-shadow-lg">
          Control Total – Ordená tu Economía Real
        </h1>
        <p className="text-xl mb-6 max-w-3xl mx-auto text-center bg-white/80 py-4 px-4 rounded-2xl shadow">
          <strong>No necesitás ser inversor, contador ni experto.</strong>  
          Lo único que hace falta es dejar de vivir en modo supervivencia y tomar el control de tus finanzas.  
          Con este servicio te ayudo a salir del desorden y la incertidumbre:
          <ul className="list-disc text-left mx-auto mt-4 mb-4 max-w-lg pl-6">
            <li>Planillas Excel a medida (listas para usar y entender)</li>
            <li>Automatización con inteligencia artificial</li>
            <li>Herramientas simples para presentar tu 931 y ordenar tu actividad</li>
            <li>Guía paso a paso para lograr independencia y claridad financiera</li>
            <li>Asesoría personalizada, con seguimiento real (si lo querés, lo hacemos juntos)</li>
          </ul>
          <span className="font-semibold">
            Dejá de improvisar. Accedé a las herramientas que nunca nadie te enseñó y hacé lo que siempre postergaste: <br />
            Viví tranquilo, organizado y enfocado en crecer.
          </span>
        </p>

        <form
          action="https://formsubmit.co/fhsoluciones@outlook.com"
          method="POST"
          className="max-w-xl mx-auto bg-white/95 p-6 rounded-xl shadow-md"
        >
          <input type="hidden" name="_captcha" value="false" />
          {/* <input type="hidden" name="_next" value="https://fhammerschlagcorp.vercel.app/gracias" /> */}
          <h2 className="text-2xl font-bold mb-4 text-center">Solicitá tu entrevista personalizada</h2>

          <label className="block mb-2 font-semibold">Nombre completo</label>
          <input type="text" name="Nombre" required className="w-full mb-4 p-3 border rounded-lg" />

          <label className="block mb-2 font-semibold">Email</label>
          <input type="email" name="Email" required className="w-full mb-4 p-3 border rounded-lg" />

          <label className="block mb-2 font-semibold">¿Qué te gustaría ordenar o lograr? Contame tu situación.</label>
          <textarea name="Mensaje" rows="4" required className="w-full mb-4 p-3 border rounded-lg" />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Solicitar Entrevista
          </button>
        </form>
      </main>
    </>
  );
}
