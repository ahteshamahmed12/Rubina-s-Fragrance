"use client"
import Loader from "./Component/Loader";
import Topheader from "./Component/Topheader";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      
      



      {loading ? (
        <Loader />
      ) : (
        <main>
          <Topheader />
        </main>
      )}

<main className="mt-3">
  <Image
    src="/image.png"
    alt="image"
    width={2000}
    height={500}   
    className="w-auto h-auto"
  />
</main>

    </>
  );
}
