"use client";

import useIsMobile from "@/hooks/UseIsMobile";
import Image from "next/image";

export default function Logo() {
  const isMobile = useIsMobile();
  return (
    <div>
      {/* Render different images based on the value of isMobile */}
      {isMobile ? (
        <Image src={"/logo/icon.png"} alt="Logo" width={141} height={26} />
      ) : (
        <Image src={"/logo/logo.png"} alt="Logo" width={141} height={26} />
      )}
    </div>
  );
}
