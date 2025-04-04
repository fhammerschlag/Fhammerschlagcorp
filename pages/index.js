import Head from "next/head";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import NFTSection from "../components/NFTSection";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>FHammerschlagCorp – Inversiones, NFTs y Consultoría Financiera</title>
        <meta name="description" content="Federico Hammerschlag, inversor, creador de NFTs y consultor financiero. Asesorías, optimización financiera, cursos y más." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <main className="bg-gray-900">
        <Hero />
        <About />
        <Services />
        <NFTSection />
        <Contact />
      </main>
    </>
  );
}