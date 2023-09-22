"use client";

import type { NextPage } from "next";
import Layout from "../components/layout";
import CountUp from "react-countup";
import { daoFeatures, questions } from "../constants";
import { toast } from "react-hot-toast";
import { DOMElement, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useRouter } from "next/router";

const whyGUSD = [
  {
    title: "Stable & Safe",
    desc: "gUSD stability is maintained through a combination of overcollateralization, liquidation mechanisms, and arbitrage opportunities. These factors work together to ensure that the value of gUSD remains close to its 1 USD peg.",
    icon: "/icon-gusd-3.png",
  },
  {
    title: "0 Mint/Loan Cost",
    desc: "Gliese stands out from other stablecoin protocols by offering 0 minting fee and 0 loan interest for users. This feature allows users to leverage their stEvmos holdings and mint gUSD stablecoins without incurring any additional costs.",
    icon: "/icon-gusd-1.png",
  },
];

const Home: NextPage = () => {
  const [summaryIn, setSummaryIn] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const card3Ref = useRef<HTMLDivElement | null>(null);
  const iconPhase1Ref = useRef<HTMLImageElement | null>(null);
  const iconPhase1RingRef = useRef<HTMLImageElement | null>(null);
  const iconExternal1 = useRef<HTMLImageElement | null>(null);
  const iconExternal2 = useRef<HTMLImageElement | null>(null);
  const iconExternal3 = useRef<HTMLImageElement | null>(null);
  const iconExternal4 = useRef<HTMLImageElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const leftInLoaded = useRef<Boolean>();
  const [leftInFlag, setLeftInFlag] = useState([false, false]);
  const [faqVisible, setFaqVisible] = useState(
    new Array(questions.length).fill(false)
  );
  const router = useRouter();

  useEffect(() => {
    (card2Ref.current as any).top = 0;
    const onScroll = () => {
      const top = (scrollRef.current as any).getClientRects()[0].top;

      if (top < -100) {
        if (!leftInLoaded.current) {
          setLeftInFlag([true, false]);

          setTimeout(() => setLeftInFlag([true, true]), 500);
          leftInLoaded.current = true;
        }
      }

      (card2Ref.current as any).style.top = (top > 63 ? top : 63) + "px";
      (iconPhase1Ref.current as any).style.top =
        (top > 0 ? (250 - top > 0 ? 250 - top : 0) : 250) + "px";
      if (top < 70) {
        (iconPhase1Ref.current as any).src = "/icon-phase-2.svg";
      } else {
        (iconPhase1Ref.current as any).src = "/icon-phase-1.svg";
      }
      if (top < 125) {
        (card3Ref.current as any).style.visibility = "visible";
        (card3Ref.current as any).style.top =
          (top > -70 ? top + 200 : 130) + "px";
      } else {
        (card3Ref.current as any).style.visibility = "hidden";
      }
      if (top < -5) {
        (iconPhase1RingRef.current as any).style.opacity = 0;

        if (top > -106) {
          (lineRef.current as any).style.transform = `scale(${
            Math.abs(top) * 0.005
          })`;
          (iconExternal1.current as any).style.opacity = 1;
          (iconExternal2.current as any).style.opacity = 1;
          (iconExternal3.current as any).style.opacity = 1;
          (iconExternal4.current as any).style.opacity = 1;
          (iconExternal1.current as any).style.marginLeft = top * 3 + "px";
          (iconExternal1.current as any).style.marginTop = top * 1 + "px";

          // let calcTop =

          (iconExternal2.current as any).style.marginLeft = -top * 3 + "px";
          (iconExternal2.current as any).style.marginTop = top * 1 + "px";

          (iconExternal3.current as any).style.marginLeft = top * 3 + "px";
          (iconExternal3.current as any).style.marginTop = -top * 1 + "px";

          (iconExternal4.current as any).style.marginLeft = -top * 3 + "px";
          (iconExternal4.current as any).style.marginTop = -top * 1 + "px";
        }
      } else {
        (iconPhase1RingRef.current as any).style.opacity = 1;
        (lineRef.current as any).style.transform = "scale(0)";
        (iconExternal1.current as any).style.opacity = 0;
        (iconExternal2.current as any).style.opacity = 0;
        (iconExternal3.current as any).style.opacity = 0;
        (iconExternal4.current as any).style.opacity = 0;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setSummaryIn(true);
  }, []);

  return (
    <Layout>
      <>
        <div className="block-container flex justify-between pt-[60px]">
          <img src="/image-bg-left.png" className="w-[169px] h-[290px]" />
          <div>
            <div className="text-center text-[72px] font-black">Unleash</div>
            <div className="text-linear text-center text-[72px] font-black">
              Power Of LSD
            </div>

            <div className="text-[16px] font-normal text-center text-[#aaa]">
              The Stablecoin Backed by LST
            </div>

            <div className="flex justify-center">
              <div
                className="bg-[#02f5ae] pt-[12px] pb-[12px] pl-[36px] pr-[36px] text-[#000] mt-[32px] rounded-md custom-button-hover"
                onClick={() => {
                  router.push("/dashboard?tab=mint");
                }}
              >
                Launch APP
              </div>
            </div>
          </div>
          <img src="/image-bg-right.png" className="w-[171px] h-[292px]" />
        </div>
        <div
          className="block-container flex justify-between mt-[68px]"
          style={{ gap: 40, height: 206 }}
        >
          <CSSTransition
            timeout={2000}
            classNames="down-animation"
            in={summaryIn}
            mountOnEnter
            unmountOnExit
          >
            <div className="card">
              <div className="flex justify-center">
                <img src="/icon-evmons.svg" className="w-[58px] h-[58px]" />
              </div>
              <div className="text-center font-bold text-[28px] text-[#02f5ae] mt-[20px] mb-[12px]">
                $ N/A
              </div>
              <div className="text-[14px] font-normal text-center text-[#aaa]">
                Total stEvmos Staked
              </div>
            </div>
          </CSSTransition>
          <CSSTransition
            timeout={2000}
            classNames="down-animation"
            in={summaryIn}
            mountOnEnter
            unmountOnExit
          >
            <div className="card">
              <div className="flex justify-center">
                <img src="/icon-lsd-2.svg" />
              </div>
              <div className="text-center font-bold text-[28px] text-[#02f5ae] mt-[20px] mb-[12px]">
                $ N/A
              </div>
              <div className="text-[14px] font-normal text-center text-[#aaa]">
                Total gUSD in Circulation
              </div>
            </div>
          </CSSTransition>
          <CSSTransition
            timeout={2000}
            classNames="down-animation"
            in={summaryIn}
            mountOnEnter
            unmountOnExit
          >
            <div className="card">
              <div className="flex justify-center">
                <img src="/icon-lsd-3.svg" />
              </div>
              <div className="text-center font-bold text-[28px] text-[#02f5ae] mt-[20px] mb-[12px]">
                $ N/A
              </div>
              <div className="text-[14px] font-normal text-center text-[#aaa]">
                Total gUSD Yield Paid
              </div>
            </div>
          </CSSTransition>
        </div>
        <div className="block-container h-[600px]" ref={scrollRef}>
          <div className="title">
            How Gliese <span className="text-linear">Works</span>
          </div>
          <div className="works relative flex justify-between items-center">
            <div className="flex relative flex-1 flex-col" style={{ gap: 10 }}>
              <div className="card card-1">
                <div className="text-center font-bold text-[20px]  mt-[0px] mb-[20px]">
                  STEP 1 - Deposit
                </div>
                <div className="text-[14px] font-normal text-center text-[#aaa]">
                  Deposit stEvmos as collateral.
                </div>
              </div>
              <div className="card absolute card-2" ref={card2Ref}>
                <div className="text-center font-bold text-[20px]  mt-[0px] mb-[20px]">
                  STEP 2 - Mint gUSD
                </div>
                <div className="text-[14px] font-normal text-center text-[#aaa]">
                  Mint/Borrow gUSD against your collateral.
                </div>
              </div>
              <div className="card absolute card-3" ref={card3Ref}>
                <div className="text-center font-bold text-[20px]  mt-[0px] mb-[20px]">
                  STEP 3 - Hold or Spend
                </div>
                <div className="text-[14px] font-normal text-center text-[#aaa]">
                  Hold gUSD to use it in other Defi protocols.
                </div>
              </div>
            </div>
            <div className="flex-1 justify-center flex flex-col items-center">
              <img
                src="/icon-phase-1.svg"
                className="w-[205px] ml-[-20px] icon-phase-1"
                ref={iconPhase1Ref}
              />
              <img
                src="/icon-ring.svg"
                className="w-[305px]  icon-phase-1-ring z-[1]"
                ref={iconPhase1RingRef}
              />
              <img
                src="/icon-phase-2-1.svg"
                className="w-[123px] icon-phase-2"
                ref={iconExternal1}
              />
              <img
                src="/icon-phase-2-2.svg"
                className="w-[123px] icon-phase-2"
                ref={iconExternal2}
              />
              <img
                src="/icon-phase-2-3.svg"
                className="w-[123px] icon-phase-2"
                ref={iconExternal3}
              />
              <img
                src="/icon-phase-2-4.svg"
                className="w-[123px] icon-phase-2"
                ref={iconExternal4}
              />
              <div
                className="mt-[-60px] ml-[10px] line-container"
                ref={lineRef}
              >
                <img src="/line-left.svg" className="w-[605px]" />
                <img src="/line-right.svg" className="w-[605px] mt-[-350px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="block-container">
          <div className="title">
            Why do you need <span className="text-linear">gUSD?</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="mr-[75px] ">
              <img src="/image-intro-2.svg" className="w-[337px]" />
            </div>
            <div className="flex flex-col flex-1 h-[320px]">
              {whyGUSD.map((i, index) => (
                <CSSTransition
                  timeout={2000}
                  classNames="left-animation"
                  mountOnEnter
                  unmountOnExit
                  in={leftInFlag[index]}
                  key={i.title}
                >
                  <div className="why-item flex items-center h-[144px]">
                    <div>
                      <img src={i.icon} className="w-[80px]" />
                    </div>
                    <div className="flex-1 ml-[16px]">
                      <div className="text-[16px] font-bold mb-[8px]">
                        {i.title}
                      </div>
                      <div className="font-normal text-[14px] text-[#aaa]">
                        {i.desc}
                      </div>
                    </div>
                  </div>
                </CSSTransition>
              ))}
            </div>
          </div>
        </div>
        <div className="block-container">
          <div className="title">
            Gliese <span className="text-linear">DAO</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[615px]">
              <div className="text-[24px] mb-[24px] font-semi-bold">
                Gliese DAO serves as the backbone of Gliese Finance's
                decision-making process.
              </div>
              <div className="font-normal text-[14px] text-[#aaa]">
                The Gliese DAO will be governed by GLSE token holders who will
                have the power to influence the direction of the project,
                propose and vote on various decisions, and collectively manage
                the protocol. This community-driven approach helps ensure that
                the Gliese Finance project remains true to its decentralized
                nature and that its development is in line with the interests of
                its users.
              </div>
            </div>
            <div>
              <img src="/image-intro-1.svg" className="w-[350px]" />
            </div>
          </div>
        </div>
        <div className="block-container flex items-center mt-[60px]">
          {daoFeatures.map((i) => (
            <div key={i.text} className="flex-1">
              <div className="flex justify-center ">
                <img src={i.icon} className="w-[82px] dao-icon" />
              </div>
              <div className="text-center text-[14px] font-normal mt-[24px]">
                {i.text}
              </div>
            </div>
          ))}
        </div>
        <div className="block-container mb-[60px]">
          <div className="title">
            Frequently Asked <span className="text-linear">Questions</span>
          </div>
          <div>
            {questions.map((item, index) => (
              <div key={index}>
                <div
                  className="cursor-pointer flex items-center question justify-between"
                  onClick={() => {
                    setFaqVisible((list) =>
                      list.map((j, k) => (k === index ? !j : j))
                    );
                  }}
                >
                  <div>{item.questions}</div>
                  <img
                    src="/icon-arrow.svg"
                    style={{
                      transform: `rotate(${
                        faqVisible[index] ? "180" : "0"
                      }deg)`,
                      transition: "all 0.3s",
                    }}
                  />
                </div>
                <div
                  className="font-normal text-[14px] text-[#aaa] answer"
                  style={{ display: faqVisible[index] ? "block" : "none" }}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Home;
