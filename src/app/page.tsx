"use client";
import Loader from "./Component/Loader";
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
        <main className="mt-2">
          <Image
            src="/image.png"
            alt="image"
            width={2000}
            height={500}
            className="w-auto h-auto"
          />
        </main>
      )}
    </>
  );
}
