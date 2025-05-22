"use client";
import React from "react";

const Topheader = () => {
  return (
    <div className="w-full overflow-hidden bg-black text-white md:py-[6px]">
      <div className="relative w-full h-10"> 
        <div
          className="absolute whitespace-nowrap animate-marquee top-0 left-0"
          style={{ willChange: "transform" }}
        >
          <span className="text-2xl font-bold text-white">
            RUBINA FRAGRANCE STORE, YOUR DESTINATION FOR PREMIUM FRAGRANCE AUTHENTIC, CURATED, AND UNFORGETTABLE .  SHOP WITH CONFIDENT.
          </span>
        </div>
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

        .animate-marquee {
          animation: marquee 19s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Topheader;
