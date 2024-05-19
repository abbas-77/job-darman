"use client";
import React from "react";
import { FaDribbble } from "react-icons/fa";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-center gap-5">
      <div
        className={`w-[60px] ${
          pathname === "/" ? "text-gray-300 font-medium" : "text-white"
        }`}
      >
        Home
      </div>
      <div className="w-[60px] text-white">Feature</div>
      <div className="w-[60px] text-white">Pricing</div>
      <div className="w-[60px] text-white">Blog</div>
      <div className="w-[50px] text-white">
        <FaDribbble />
      </div>
      <div className="w-[60px] text-white">Be</div>
    </div>
  );
}

export default Navbar;
