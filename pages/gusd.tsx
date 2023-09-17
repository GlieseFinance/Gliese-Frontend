"use client";

import Layout from "../components/layout";

export default function GUSD() {
  const features = [
    {
      title: "Interest Bearing",
      desc: "Unlike USDT, USDC, TUSD, LUSD and DAI, gUSD is yield-bearing, with APY approx ~7.2%.",
      icon: "/icon-gusd-feature-1.png",
    },
    {
      title: "Censorship Resistance",
      desc: "gUSD is a censorship-resistant, 100% decentralized, fair and transparent stablecoin built on the Gliese Finance protocol.",
      icon: "/icon-gusd-feature-2.png",
    },
    {
      title: "150% \nCollateral Ratio",
      desc: "Each 1 gUSD is backed by at least $1.5 worth of Evmos/stEvmos as collateral, ensuring stability.",
      icon: "/icon-gusd-feature-3.png",
    },
    {
      title: "Yield Boost",
      desc: "Lybra will integrate with other DeFi aggregators to boost yield in V2 if required by the community DAO.",
      icon: "/icon-gusd-feature-4.png",
    },
  ];

  return (
    <Layout>
      <>
        <div className="block-container flex justify-between">
          <div className="flex-1 text-[40px]  mt-[70px]">
            <div>The World's First Interest-</div>
            <div>
              <span className="text-linear">Bearing Stablecoin Backed</span>
            </div>
            <div>by LSD</div>
            <div className="text-[16px] text-[#ffffff80] mt-[16px] w-[486px]">
              gUSD is a decentralized, unbiased, and 1:1 USD-hard-pegged
              stablecoin. Any individual and business can hold gUSD to receive a
              high interest rate.
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
        <div className="block-container flex items-center  gap-[45px] pb-[100px]">
          {features.map((i) => (
            <div
              key={i.title}
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
          ))}
        </div>
      </>
    </Layout>
  );
}
