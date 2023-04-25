import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Navbar from "~/components/navbar/Navbar";
import SocialLinks from "~/components/social-links/SocialLinks";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>zackzellto.com</title>
        <meta name="description" content="Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex min-h-screen bg-[#000000] font-[Poppins]">
        <SocialLinks />
      </main>
    </>
  );
};

export default Home;
