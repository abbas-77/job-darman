"use client";
import React from "react";
import { FaDribbble } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="flex items-center justify-center gap-5">
      <div
        onClick={() => router.push("/")}
        className={`w-[60px] cursor-pointer hover:text-gray-300 ${
          pathname === "/" ? "text-gray-300 font-medium" : "text-white"
        }`}
      >
        Home
      </div>
      <div
        onClick={() => router.push("login")}
        className={`w-[60px] cursor-pointer hover:text-gray-300 ${
          pathname === "/login" ? "text-gray-300 font-medium" : "text-white"
        }`}
      >
        Feature
      </div>
      <div
        onClick={() => router.push("plans&pricing")}
        className={`w-[60px] cursor-pointer hover:text-gray-300 ${
          pathname === "/plans&pricing"
            ? "text-gray-300 font-medium"
            : "text-white"
        }`}
      >
        Pricing
      </div>
      <div
        onClick={() => router.push("pursche-budget")}
        className={`w-[60px] cursor-pointer hover:text-gray-300 ${
          pathname === "/pursche-budget"
            ? "text-gray-300 font-medium"
            : "text-white"
        }`}
      >
        Blog
      </div>
      <div className="w-[50px] text-white">
        <FaDribbble />
      </div>
      <div className="w-[60px] cursor-pointer hover:text-gray-300 text-white">
        Be
      </div>
    </div>
  );
}

export default Navbar;
