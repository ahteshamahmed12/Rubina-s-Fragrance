"use client";
import React from "react";

const Topheader = () => {
  return (
    <div className="w-full overflow-hidden bg-black text-white">
      <div className="marquee whitespace-nowrap md:py-[6px]">
        <span className="mx-4 text-2xl font-bold ">
          RUBINA FRAGRANCE STORE ADVANCE PAYMENT 10% OFF SHOPPING UPTO 5000 SHIPPING FREE
        </span>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .marquee {
          display: inline-block;
          animation: marquee 14s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Topheader;
