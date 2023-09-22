"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import Layout from "../components/layout";
import { InputAdornment, OutlinedInput, Popover } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

interface EvmosSimple {
  usd: number;
}

interface CoingeckoSimpleResponse {
  evmos: EvmosSimple;
}

const infoTextMap: any = {
  locked:
    "Collateral Locked: This is the amount of stEvmos that you have deposited on Gliese Protocol in USD value based on the current market price of stEvmos.",
  ratio:
    "Collateral Ratio is expressed as a percentage and calculated bydividing the value of your deposited stEvmos in USD by the amount ofyour minted gUSD. A lower Collateral Ratio means you have less stEvmos backing your USD, which increases the risk of liquiation.",
  price:
    "Liquidation Price: this is the price at which your position will be at risk of being liquidated if the market moves against you and your collateral Ratio falls below the minimum required level.",
};

const leftBlockTextMap: any = {
  mint: {
    title: "Mint gUSD",
    desc: "To mint (borrow) gUSD, you are required to deposit a specific amount of collateral (stEvmos) using the Gliese platform, or have a pre-existing balance of stEvmos within the Gliese Protocol. You can then generate gUSD against your collateral up to a maximum collateral ratio of -%.",
  },
  withdraw: {
    title: "Withdraw stEvmos",
    desc: "By withdrawing stEvmos collateral, you will get your deposited stEvmos back and reduce your exposure to price fluctuations. However, this also means that your collateral Ratio drops and you may face liquidation if the price of stEvmos falls below a certain threshold. You should always monitor your loan and keep a healthy collateral Ratio to avoid losing your funds.",
  },
  repay: {
    title: "Repay gUSD",
    desc: `If you have borrowed gUSD from Gliese Protocol, you may want to repay some of your debt to increase your collateral Ratio. Your funds will become more stable and safe by doing this. However, you won't be able to continue earning yield from this part of the gUSD once you pay it back.`,
  },
  redeem: {
    title: "Redeem gUSD",
    desc: `At some point, you may consider exchanging your gUSD for stEvmos. The Gliese Protocol's Rigid Redemption Mechanism ensures a consistent 1:1 exchange rate between gUSD and stEvmos.`,
  },
};

const tabs = [
  {
    text: "Mint",
    icon: "/icon-evmons-2.svg",
    key: "mint",
  },
  {
    text: "Withdraw",
    icon: "/icon-evmons.svg",
    key: "withdraw",
  },
  {
    text: "Repay",
    icon: "/icon-evmons-2.svg",
    key: "repay",
  },
  {
    text: "Redeem",
    icon: "/icon-evmons-2.svg",
    key: "redeem",
  },
];

function MintPart() {
  return (
    <div>
      <div className="flex justify-between">
        <div>stEvmos</div>
        <div style={{ color: "rgba(255,255,255,0.6)" }}>stEVMOS</div>
      </div>
      <div>
        <OutlinedInput
          placeholder="0 stEvmos"
          className="custom-input"
          endAdornment={
            <InputAdornment position="end">
              ≈ 0 USD <span className="max-button">MAX</span>
            </InputAdornment>
          }
        />
      </div>{" "}
      <div className="flex justify-between">
        <div>Mint gUSD</div>
        <div style={{ color: "rgba(255,255,255,0.6)" }}>Max 0 gUSD</div>
      </div>
      <div>
        <OutlinedInput
          placeholder="0 gUSD"
          className="custom-input"
          endAdornment={
            <InputAdornment position="end">
              <span className="max-button">MAX</span>
            </InputAdornment>
          }
        />
      </div>
      <div>Transaction overview</div>
      <div className="flex justify-between mt-[15px] text-[#02f5ae]">
        <div>Collateral Ratio</div>
        <div>∞</div>
      </div>
      <div className="flex justify-between mt-[15px] text-[#02f5ae]">
        <div className="flex items-center">
          <img src="/icon-gas.svg" className="mr-[4px]" /> $0
        </div>
        <div>Liquidation at {"<"} -%</div>
      </div>
      <div
        className="custom-button cursor-not-allowed"
        onClick={() => toast("Coming Soon")}
      >
        Connect Wallet
      </div>
    </div>
  );
}

function WithdrawPart() {
  return (
    <div className="relative h-[446px]">
      <div className="flex justify-between">
        <div>Withdraw stEvmos</div>
        <div style={{ color: "rgba(255,255,255,0.6)" }}>Max 0 stEvmos</div>
      </div>
      <div>
        <OutlinedInput
          placeholder="0 stEvmos"
          className="custom-input"
          endAdornment={
            <InputAdornment position="end">
              ≈ 0 USD <span className="max-button">MAX</span>
            </InputAdornment>
          }
        />
      </div>
      <div>Transaction overview</div>
      <div className="flex justify-between mt-[15px] text-[#02f5ae]">
        <div>Collateral Ratio</div>
        <div>∞</div>
      </div>
      <div className="flex justify-between mt-[15px] text-[#02f5ae]">
        <div className="flex items-center">
          <img src="/icon-gas.svg" className="mr-[4px]" /> $0
        </div>
        <div>Liquidation at {"<"} -%</div>
      </div>
      <div
        className="custom-button fixed-bottom cursor-not-allowed"
        onClick={() => toast("Coming Soon")}
      >
        Withdraw
      </div>
    </div>
  );
}

function RepayPart() {
  return (
    <div className="relative h-[446px]">
      <div className="flex justify-between">
        <div>Repay gUSD</div>
        <div style={{ color: "rgba(255,255,255,0.6)" }}>Balance 0 gUSD</div>
      </div>
      <div>
        <OutlinedInput
          placeholder="0 stEvmos"
          className="custom-input"
          endAdornment={
            <InputAdornment position="end">
              ≈ 0 USD <span className="max-button">MAX</span>
            </InputAdornment>
          }
        />
      </div>
      <div>Transaction overview</div>
      <div className="flex justify-between mt-[15px] text-[#02f5ae]">
        <div>Collateral Ratio</div>
        <div>∞</div>
      </div>
      <div className="flex justify-between mt-[15px] text-[#02f5ae]">
        <div className="flex items-center">
          <img src="/icon-gas.svg" className="mr-[4px]" /> $0
        </div>
        <div>Liquidation at {"<"} -%</div>
      </div>
      <div
        className="custom-button fixed-bottom cursor-not-allowed"
        onClick={() => toast("Coming Soon")}
      >
        Repay
      </div>
    </div>
  );
}

function RedeemPart() {
  return (
    <div className="relative h-[446px]">
      <div className="flex justify-between">
        <div>Redeem gUSD</div>
        <div style={{ color: "rgba(255,255,255,0.6)" }}>Balance 0 gUSD</div>
      </div>
      <div>
        <OutlinedInput
          placeholder="0 stEvmos"
          className="custom-input"
          endAdornment={
            <InputAdornment position="end">
              ≈ 0 USD <span className="max-button">MAX</span>
            </InputAdornment>
          }
        />
      </div>
      <div
        className="custom-button fixed-bottom cursor-not-allowed"
        onClick={() => toast("Coming Soon")}
      >
        Redeem
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [price, setPrice] = useState<number>(0);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [infoText, setInfoText] = useState<string>("");
  const [tab, setActiveTab] = useState<string>("mint");
  const searchParams = useSearchParams();

  useEffect(() => {
    setActiveTab(searchParams.get("tab") || "mint");
  }, [searchParams]);

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement>,
    key: string
  ) => {
    setAnchorEl(event.currentTarget);
    setInfoText(infoTextMap[key]);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const fetchEvmosPrice = () => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=evmos&vs_currencies=usd"
    )
      .then((res) => res.json())
      .then((res: CoingeckoSimpleResponse) => {
        setPrice(res.evmos.usd);
      });
  };

  useEffect(() => {
    fetchEvmosPrice();
  }, []);

  const getActivePart = () => {
    if (tab === "mint") {
      return <MintPart />;
    }
    if (tab == "repay") {
      return <RepayPart />;
    }

    if (tab === "withdraw") {
      return <WithdrawPart />;
    }
    return <RedeemPart />;
  };

  const open = Boolean(anchorEl);
  return (
    <Layout>
      <>
        <div className="block-container flex items-center pt-[40px] pb-[40px]">
          <div className="text-linear text-[40px]">Overview</div>
          <img
            src="/icon-eth.png"
            className="w-[30px] h-[30px] ml-[16px] mr-[16px]"
          />
          <div className="text-[24px]">
            Evmos/USD $<CountUp end={price} decimals={6} />
          </div>
        </div>
        <Popover
          sx={{
            pointerEvents: "none",
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          className="popover-custom"
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <div className="popover-container">{infoText}</div>
        </Popover>
        <div className="block-container flex justify-between">
          <div className="w-[300px]">
            <div className="flex mb-[16px]">
              Collateral Locked
              <img
                src="/icon-info.svg"
                className="w-[16px] ml-[6px] pointer"
                onMouseEnter={(e) => handlePopoverOpen(e, "locked")}
                onMouseLeave={handlePopoverClose}
              />
            </div>
            <div className="dashboard-number">
              $<CountUp end={0} />
            </div>
          </div>
          <div className="w-[300px]">
            <div className="flex mb-[16px]">
              Collateral Ratio
              <img
                src="/icon-info.svg"
                className="w-[16px] ml-[6px] pointer"
                onMouseEnter={(e) => handlePopoverOpen(e, "ratio")}
                onMouseLeave={handlePopoverClose}
              />
            </div>
            <div className="dashboard-number flex items-center">
              <img src="/icon-unlimited.svg" className="w-[20px]" />
              <img src="/icon-safe.svg" className="w-[20px] ml-[5px]" />
            </div>
          </div>
          <div className="w-[300px]">
            <div className="flex mb-[16px] justify-end">
              Collateral Locked
              <img
                src="/icon-info.svg"
                className="w-[16px] ml-[6px] pointer"
                onMouseEnter={(e) => handlePopoverOpen(e, "price")}
                onMouseLeave={handlePopoverClose}
              />
            </div>
            <div className="dashboard-number text-right">
              $<CountUp end={0} />
            </div>
          </div>
        </div>
        <div className="block-container flex justify-between mt-[32px]">
          <div className="w-[300px]">
            <div className="flex mb-[16px]">
              gUSD Minted / gUSD Debt
              <img
                src="/icon-info.svg"
                className="w-[16px] ml-[6px] pointer"
                onMouseEnter={(e) => handlePopoverOpen(e, "locked")}
                onMouseLeave={handlePopoverClose}
              />
            </div>
            <div className="dashboard-number">
              <CountUp end={0} /> gUSD
            </div>
          </div>
          <div className="w-[300px]">
            <div className="flex mb-[16px]">
              Available to Withdraw
              <img
                src="/icon-info.svg"
                className="w-[16px] ml-[6px] pointer"
                onMouseEnter={(e) => handlePopoverOpen(e, "ratio")}
                onMouseLeave={handlePopoverClose}
              />
            </div>
            <div className="dashboard-number flex items-center">
              <CountUp end={0} /> gUSD
            </div>
          </div>
          <div className="w-[300px]">
            <div className="flex mb-[16px] justify-end">
              Available to Mint
              <img
                src="/icon-info.svg"
                className="w-[16px] ml-[6px] pointer"
                onMouseEnter={(e) => handlePopoverOpen(e, "price")}
                onMouseLeave={handlePopoverClose}
              />
            </div>
            <div className="dashboard-number text-right">
              <CountUp end={0} /> gUSD
            </div>
          </div>
        </div>
        <div className="block-container flex justify-between items-center h-[600px] mt-[60px] mb-[60px]">
          <div className="w-[500px]">
            <div className="text-[40px] mb-[24px]">
              {leftBlockTextMap[tab].title}
            </div>
            <div className="text-[16px]">{leftBlockTextMap[tab].desc}</div>
          </div>
          <div className="dashboard-card flex-1 ml-[40px]">
            <div className="dashboard-card-tab flex items-center">
              {tabs.map((i) => (
                <div
                  key={i.key}
                  className={`flex flex-1 items-center justify-center tab-item ${
                    tab === i.key ? "tab-selected" : ""
                  }`}
                  onClick={() => setActiveTab(i.key)}
                >
                  {i.text} <img src={i.icon} className="w-[23px] ml-[7px]" />
                </div>
              ))}
            </div>
            <div className="mt-[24px]">{getActivePart()}</div>
          </div>
        </div>
      </>
    </Layout>
  );
}
