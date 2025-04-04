
import Head from 'next/head'
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Head>
        <title>HammerschlagCorp</title>
      </Head>
      <main className="flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">El futuro no se espera. Se diseña.</h1>
        <p className="text-xl mb-6">Una consultora con mentalidad cruda, clara y poderosa.</p>
        <ConnectWallet accentColor="#00ff9d" colorMode="dark" />
      </main>
    </div>
  );
}
