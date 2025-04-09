import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-12 bg-black text-white">

      {/* Imagen principal */}
      <div className="w-full max-w-4xl mt-16">
        <Image
          src="/portadaactual.png"
          alt="NFT Cover"
          width={1200}
          height={800}
          className="rounded-2xl shadow-lg"
        />
      </div>

      {/* Imagen complementaria */}
      <div className="w-full max-w-4xl mt-10">
        <Image
          src="/visionestrategica.png"
          alt="Visión Estratégica"
          width={1200}
          height={800}
          className="rounded-2xl shadow-lg"
        />
      </div>

    </main>
  );
}

      
      
