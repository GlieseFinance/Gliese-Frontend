import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gliese</title>
        <meta name="description" content="Gliese,gUSD,Evmos" />
        <link rel="icon" type="image/x-icon" href="/gliese-logo.png" />
      </Head>
      <body>
        <nav></nav>
        <footer className="container flex justify-between items-center">
          <div>
            <img src="/icon-logo-white.svg" />
          </div>
          <div></div>
          <div>
            <img src="/icon-footer-twitter.png" className="mr-[20px]" />
            <img src="/icon-footer-discord.png" />
          </div>
        </footer>
      </body>
    </div>
  );
};

export default Home;
