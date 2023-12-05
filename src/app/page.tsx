"use client";

import Image from "next/image";
import Assets from "@/constants/assets.constant";
import { useEffect, useState } from "react";

export default function Home() {
  const [country, setCountry] = useState("us");

  useEffect(() => {
    const us = "sellmedia.us";
    const ca = "sellmedia.ca";

    if (window.location.href.includes(ca)) {
      setCountry(ca);
    }
  }, []);

  return (
    <Image
      src={country === "ca" ? Assets.caImg : Assets.usImg}
      alt="ca"
      className="w-full h-[100vh] object-cover bg-[#2F2F2F]"
      sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33.3vw" // Adjust sizes based on your layout
    />
  );
}
