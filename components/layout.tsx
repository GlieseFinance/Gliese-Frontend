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
import toast, { ToastBar, Toaster } from "react-hot-toast";
import { Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/router";

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
    text: "gUSD",
    path: "/gusd",
  },
  {
    text: "Dashboard",
    path: "/dashboard",
    children: [
      {
        text: "Mint gUSD",
        path: "/dashboard?tab=mint",
      },
      {
        text: "Withdraw stEvmos",
        path: "/dashboard?tab=withdraw",
      },
      {
        text: "Repay gUSD",
        path: "/dashboard?tab=repay",
      },
      {
        text: "Redeem gUSD",
        path: "/dashboard?tab=redeem",
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
    disabled: true,
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Head>
        <title>Gliese</title>
        <meta name="description" content="Gliese,gUSD,Evmos" />
        <link rel="icon" type="image/x-icon" href="/gliese-logo.svg" />
      </Head>
      <body>
        <img
          className="absolute w-[451px] h-[484px] top-[0px] left-[0px] z-[12]"
          style={{ pointerEvents: "none" }}
          src="/image-color-left.svg"
        />
        <img
          className="absolute w-[386px] h-[811px] top-[0px] right-[0px]"
          style={{ pointerEvents: "none" }}
          src="/image-color-right.svg"
        />
        <WagmiConfig config={wagmiClient}>
          <header className="flex justify-between relative header z-[11]">
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
                      <Link
                        href={item.path}
                        className="cursor-pointer flex items-center"
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick(e);
                        }}
                      >
                        {item.text}

                        <img
                          src="/icon-arrow.svg"
                          className={`w-[10px] ml-[7px] ${
                            open ? "rotate-up" : ""
                          }`}
                        />
                      </Link>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        className="custom-menu"
                      >
                        {item.children.map((i) => (
                          <MenuItem
                            key={i.text}
                            onClick={(e) => {
                              router.push(i.path);
                              handleClose();
                            }}
                            className="custom-menu-item"
                          >
                            {i.text}
                          </MenuItem>
                        ))}
                      </Menu>
                    </>
                  ) : (
                    <Link
                      className="cursor-pointer"
                      href={item.path}
                      onClick={(e) => {
                        if (item.disabled) {
                          e.preventDefault();
                          toast("Coming Soon");
                        }
                      }}
                    >
                      {item.text}
                    </Link>
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
                  onClick={(e) => {
                    e.preventDefault();
                    toast("Coming Soon");
                  }}
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
                onClick={() => toast("Coming Soon")}
              />
              <img
                src="/icon-footer-discord.png"
                className="w-[25px] cursor-pointer"
                onClick={() => toast("Coming Soon")}
              />
            </div>
          </footer>
        </WagmiConfig>

        <Toaster position="top-center">
          {(t) => (
            <ToastBar toast={t}>
              {({ icon, message }) => (
                <div className="gliese-toast">
                  {icon}
                  {message}
                </div>
              )}
            </ToastBar>
          )}
        </Toaster>
      </body>
    </div>
  );
}
