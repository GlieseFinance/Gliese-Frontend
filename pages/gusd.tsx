"use client";

import { CSSTransition } from "react-transition-group";
import Layout from "../components/layout";
import { useEffect, useState } from "react";

export default function GUSD() {
  const features = [
    {
      title: "Censorship Resistance",
      desc: "gUSD is a censorship-resistant, 100% decentralized, fair and transparent stablecoin built on the Gliese Finance protocol.",
      icon: "/icon-gusd-feature-2.png",
    },
    {
      title: "-% \nCollateral Ratio",
      desc: "Each 1 gUSD is backed by at least $1.5 worth of stEvmos as collateral, ensuring stability.",
      icon: "/icon-gusd-feature-3.png",
    },
    {
      title: "Yield Boost",
      desc: "Gliese will integrate with other DeFi aggregators to boost yield if required by the community DAO.",
      icon: "/icon-gusd-feature-4.png",
    },
  ];

  const [featureIn, setFeatureIn] = useState(false);

  useEffect(() => {
    setFeatureIn(true);
  }, []);

  return (
    <Layout>
      <>
        <div className="block-container flex justify-between">
          <div className="flex-1 text-[40px]  mt-[140px]">
            <div>
              <span className="text-linear">
                The First stablecoin Backed by LSD on EVMOS
              </span>
              <div className="text-[16px] text-[#ffffff80] mt-[16px] w-[486px]">
                gUSD is a decentralized, unbiased, and 1:1 USD-hard-pegged
                stablecoin.
              </div>
            </div>
          </div>
          <div className="relative flex-1 h-[400px] mt-[70px]">
            <img src="/ring.svg" className="ring-border" />
            <img src="/icon-coin.png" className="w-[320px] ml-[104px]" />
            {/* <div className="line">
            <img src="/icon-dollar.svg" className="icon-dollar" />
            </div> */}
            {/* <div className="icon-ring"></div> */}
            <img src="/ring.svg" className="ring-border" />
            <img src="/ring.svg" className="ring-border-2" />
          </div>
        </div>
        <div className="block-container flex items-center  gap-[45px] pb-[100px] h-[380px]">
          {features.map((i) => (
            <CSSTransition
              timeout={2000}
              classNames="down-animation"
              in={featureIn}
              mountOnEnter
              unmountOnExit
              key={i.title}
            >
              <div
                className="flex-1 r flex flex-col justify-start items-center gusd-item"
                style={{ whiteSpace: "pre-wrap" }}
              >
                <div className="text-center">
                  <img src={i.icon} className="w-[58px] h-[58px]" />
                </div>
                <div
                  className="text-[#02F5AE] mb-[12px] mt-[16px] text-[28px] text-center"
                  style={{ lineHeight: "28px" }}
                >
                  {i.title}
                </div>
                <div className="text-[14px] text-center text-[#ffffff80]">
                  {i.desc}
                </div>
              </div>
            </CSSTransition>
          ))}
        </div>
      </>
    </Layout>
  );
}
