import Head from 'next/head';
import { useRouter } from 'next/router';

export default function OrganizacionTotal() {
  const router = useRouter();
  const showThanks = router.query.ok === 'true';

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
        Saná tu historia con el dinero y aprendé a invertir con criterio y conciencia
        </h1>
        <p className="text-lg mb-6 max-w-3xl mx-auto text-center bg-white bg-opacity-80 p-6 rounded-xl">
         No necesitás ser experto en finanzas. Solo necesitás dejar de sobrevivir.
          <br /><br />
          Te acompaño a ordenar tu vida financiera, identificar los bloqueos que heredaste, y crear un sistema real con herramientas simples: IA, Biodescodificación y Finanzas conscientes.
          <br /><br />
          Si venís repitiendo patrones familiares, no sabés bien qué hacer con tu plata o te sentís estancado... este proceso es para vos.
         <strong>👉 Comenzamos con una entrevista personalizada y un test gratuito.</strong>
        </p>

        {showThanks && (
          <div className="max-w-xl mx-auto mb-6 bg-green-100 text-green-800 border border-green-300 rounded-lg p-4 text-center">
            ✅ ¡Gracias por tu solicitud! Te voy a contactar a la brevedad. Mientras tanto, revisá tu correo.
          </div>
        )}

        <form
          action="https://formsubmit.co/fhsoluciones@outlook.com"
          method="POST"
          className="max-w-xl mx-auto bg-gray-50 p-6 rounded-xl shadow-md mt-10"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://fhammerschlagcorp.vercel.app/organizacion-total?ok=true" />

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
