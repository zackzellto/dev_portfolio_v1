import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import WordSphere from "../components/word-sphere/WordSphere";
import Navbar from "~/components/word-sphere/navbar/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>zackzellto.com</title>
        <meta name="description" content="Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="font-[Poppins] flex min-h-screen bg-[#0C0216]">
        
      </main>
    </>
  );
};

export default Home;
