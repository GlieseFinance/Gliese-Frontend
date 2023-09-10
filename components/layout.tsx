import { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from "classnames";
import { publicProvider } from "wagmi/providers/public";
import { ConnectButton, darkTheme } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { evmos, evmosTestnet } from "wagmi/chains";
import { WagmiConfig, configureChains, createConfig, useNetwork } from "wagmi";
import "@rainbow-me/rainbowkit/styles.css";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [process.env.NEXT_PUBLIC_EVMOS_NET === "test" ? evmosTestnet : evmos],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "gliese",
  projectId: "27d57be19991e36f3bb9ccc5aa393f6a",
  chains,
});

const wagmiClient = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});
const navs = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Stake",
    path: "/stake",
  },
  {
    text: "gUSD",
    path: "/gusd",
  },
  {
    text: "Dashboard",
    path: "/dashboard",
    children: [
      {
        text: "Mint gUSD",
        path: "/mint",
      },
      {
        text: "Withdraw Evmos",
        path: "/withdraw",
      },
      {
        text: "Repay gUSD",
        path: "/repay",
      },
      {
        text: "Redeem gUSD",
        path: "/redeem",
      },
    ],
  },
  {
    text: "Earn",
    path: "/earn",
  },
  {
    text: "Docs",
    path: "/docs",
  },
];

const footerLinks = [
  {
    text: "Whitepaper",
    path: "/",
  },
  {
    text: "Buy $GLSE",
    path: "/",
  },
  {
    text: "Buy Bounty",
    path: "/",
  },
  {
    text: "Dune",
    path: "/",
  },
];

export default function Layout({ children }: { children: ReactElement }) {
  const pathname = usePathname();

  return (
    <div>
      <Head>
        <title>Gliese</title>
        <meta name="description" content="Gliese,gUSD,Evmos" />
        <link rel="icon" type="image/x-icon" href="/gliese-logo.svg" />
      </Head>
      <body>
        <WagmiConfig config={wagmiClient}>
          <header className="flex justify-between relative header z-[10]">
            <div className="header-left flex items-center">
              <div className="mr-[90px]">
                <img src="/icon-logo-white.svg" />
              </div>
              {navs.map((item, index) => (
                <div
                  className={cx(
                    "header-item mr-[40px] text-[14px] link cursor-pointer",
                    {
                      "header-item-active": item.path === pathname,
                    }
                  )}
                  key={index}
                >
                  {item.children ? (
                    <>
                      <div>{item.text}</div>
                    </>
                  ) : (
                    <Link href={item.path}>{item.text}</Link>
                  )}
                </div>
              ))}
            </div>
            <div className="header-right flex items-center">
              <RainbowKitProvider
                chains={chains}
                theme={darkTheme({
                  accentColor: "#02f5ae",
                })}
              >
                <ConnectButton />
              </RainbowKitProvider>
            </div>
          </header>
          <img
            className="absolute w-[465px] h-[465px] top-[-232px] left-[-232px] z-[0]"
            src="/image-color-left.svg"
          />
          <img
            className="absolute w-[465px] h-[465px] top-[140px] right-[-232px] z-[0]"
            src="/image-color-right.svg"
          />
          <div className="body">{children}</div>
          <footer className="footer flex justify-between items-center">
            <div>
              <img src="/icon-logo-white.svg" />
            </div>
            <div>
              {footerLinks.map((item, index) => (
                <Link
                  target="_blank"
                  key={index}
                  href={item.path}
                  className="mr-[40px] text-[14px] cursor-pointer link"
                >
                  {item.text}
                </Link>
              ))}
            </div>
            <div className="flex">
              <img
                src="/icon-footer-twitter.png"
                className="mr-[20px] w-[25px] cursor-pointer"
              />
              <img
                src="/icon-footer-discord.png"
                className="w-[25px] cursor-pointer"
              />
            </div>
          </footer>
        </WagmiConfig>
      </body>
    </div>
  );
}
