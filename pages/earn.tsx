"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import Layout from "../components/layout";
import { Slider } from "@mui/material";
import { toast } from "react-hot-toast";

export default function Earn() {
  return (
    <Layout>
      <>
        <div className="block-container flex items-center pt-[40px] pb-[40px]">
          <div className="text-linear text-[40px]">Earn</div>
        </div>
        <div className="flex justify-between block-container gap-[24px]">
          <div className="flex-1 earn-card">
            <div className="flex items-center earn-card-header earn-card-border">
              Boost
            </div>
            <div className="earn-card-content">
              <div>
                The longer the vesting period of your esGLSE, the more esGLSE
                you will receive.
              </div>
              <div className="flex justify-between mt-[32px]">
                <div>Boost</div>
                <div className="w-[300px]">
                  <Slider defaultValue={50} className="custom-slider" />
                </div>
              </div>
              <div className="flex justify-between">
                <div>Your Vesting Peroid</div>
                <div>6 Months</div>
              </div>
            </div>
            <div className="earn-card-bottom">
              <div
                className="custom-button custom-button-mini w-[115px] cursor-not-allowed"
                onClick={() => toast("Coming Soon")}
              >
                Restart
              </div>
            </div>
          </div>
          <div className="flex-1 earn-card">
            <div className="flex items-center earn-card-header earn-card-border">
              gUSD mint pool
            </div>
            <div className="earn-card-content">
              <div className="flex justify-between mb-[12px]">
                <div>Minted gUSD</div>
                <div>0 gUSD</div>
              </div>
              <div className="flex justify-between mb-[12px]">
                <div>gUSD Circulation</div>
                <div>0 gUSD </div>
              </div>
              <div className="flex justify-between mb-[12px]">
                <div>APR</div>
                <div>0%</div>
              </div>
              <div className="flex justify-between">
                <div>Rewards</div>
                <div>0 esGLSE</div>
              </div>
            </div>
            <div className="earn-card-bottom flex justify-between">
              <div
                className="custom-button custom-button-mini w-[115px] cursor-not-allowed"
                onClick={() => toast("Coming Soon")}
              >
                Mint gUSD
              </div>{" "}
              <div
                className="custom-button custom-button-mini w-[115px] cursor-not-allowed"
                onClick={() => toast("Coming Soon")}
              >
                Claim esGLSE
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}
