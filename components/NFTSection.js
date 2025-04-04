export default function NFTSection() {
  return (
    <section id="nfts" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-gray-100 mb-8">Colecciones NFT</h2>
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-gray-100">Humanos Eternos – Ídolos del Mundo</h3>
        <p className="text-gray-200 mt-2 mb-4">Arte digital de ídolos legendarios del deporte y la cultura.</p>
        <a href="https://opensea.io/collection/idoloseternos" target="_blank" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded">Ver en OpenSea</a>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-100">KODE KREW – La Nueva Generación Digital</h3>
        <p className="text-gray-200 mt-2 mb-4">Colección NFT inspirada en la innovación y la cultura digital.</p>
        <a href="https://opensea.io/collection/kode-krew" target="_blank" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded">Ver en OpenSea</a>
      </div>
    </section>
  );
}