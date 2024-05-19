import React from "react";
import { FaCheck } from "react-icons/fa";

function page() {
  return (
    <div className="flex min-h-[160vh] flex-col items-center justify-between pp-bg-image">
      <div className="flex min-h-[160vh] w-full flex-col items-center justify-between gap-5 px-36 py-16 bg-[#482BE700]">
        <div className="w-[500px]">
          <p className="text-[42px] text-center text-white font-semibold">
            Plans & Pricing
          </p>
          <p className="text-[22px] text-center text-white font-medium">
            Startup Framework is free forever — you only pay for custom domain
            hosting or to export your site.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="border text-white border-gray-400 p-10 rounded-xl w-[370px] h-[730px]">
            <p className="text-[22px] ms-[24px]">Starter</p>
            <p className="text-[58px] ms-[24px] relative">
              9.99{" "}
              <span className="text-[16px] absolute top-4 right-44">$</span>
            </p>
            <div className="flex flex-col gap-4 mt-7">
              <p className="text-[16px] flex items-center gap-2">
                <FaCheck color="#25DAC5" />2 GB of space
              </p>
              <p className="text-[16px] flex items-center gap-2">
                <FaCheck color="#25DAC5" />
                14 days of backups
              </p>
              <p className="text-[16px] flex items-center gap-2">
                <FaCheck color="#25DAC5" />
                Social integrations
              </p>
              <p className="text-[16px] flex items-center gap-2">
                <FaCheck color="#25DAC5" />
                Client billing
              </p>
              <p className="text-[16px] ps-[24px]">Remote access</p>
              <p className="text-[16px] ps-[24px]">Custom domain</p>
              <p className="text-[16px] ps-[24px]">24 hours support</p>
              <p className="text-[16px] ps-[24px]">Admin tools</p>
              <p className="text-[16px] ps-[24px]">Collaboration tools</p>
              <p className="text-[16px] ps-[24px]">User management</p>
            </div>
            <div className="w-full flex items-center justify-center mt-10">
              <button className="w-[230px] h-[60px] rounded-full border border-gray-300 text-white">
                Get Started
              </button>
            </div>
          </div>
          <div className="border text-white border-gray-400 p-10 rounded-xl w-[370px] h-[730px]">
            <p className="text-[22px] ms-[24px]">Professional</p>
            <p className="text-[58px] ms-[24px] relative">
              19.99{" "}
              <span className="text-[16px] absolute top-4 right-44">$</span>
            </p>
            <div className="flex flex-col gap-4 mt-7">
              <p className="text-[16px] flex items-center gap-2">
                <FaCheck color="#25DAC5" />2 GB of space
              </p>
              <p className="text-[16px] flex items-center gap-2">
                <FaCheck color="#25DAC5" />
                14 days of backups
              </p>
              <p className="text-[16px] flex items-center gap-2">
                <FaCheck color="#25DAC5" />
                Social integrations
              </p>
              <p className="text-[16px] flex items-center gap-2">
                <FaCheck color="#25DAC5" />
                Client billing
              </p>
              <p className="text-[16px] flex items-center gap-2">
                <FaCheck color="#25DAC5" />
                Remote access
              </p>
              <p className="text-[16px] flex items-center gap-2">
                <FaCheck color="#25DAC5" />
                Custom domain
              </p>
              <p className="text-[16px] flex items-center gap-2">
                <FaCheck color="#25DAC5" />
                24 hours support
              </p>
              <p className="text-[16px] ps-[24px]">Admin tools</p>
              <p className="text-[16px] ps-[24px]">Collaboration tools</p>
              <p className="text-[16px] ps-[24px]">User management</p>
            </div>
            <div className="w-full flex items-center justify-center mt-10">
              <button className="w-[230px] h-[60px] rounded-full bg-[#E93A7D] text-white">
                Get Started
              </button>
            </div>
          </div>
          <div className="border text-white border-gray-400 p-10 rounded-xl w-[370px] h-[730px]">
            <p className="text-[22px] ms-[24px]">Team</p>
            <p className="text-[58px] ms-[24px] relative">
              49.99{" "}
              <span className="text-[16px] absolute top-4 right-44">$</span>
            </p>
            <div className="flex flex-col gap-4 mt-7">
              <p className="text-[16px] flex items-center gap-2">
                <FaCheck color="#25DAC5" />2 GB of space
              </p>
              <p className="text-[16px] flex items-center gap-2">
                <FaCheck color="#25DAC5" />
                14 days of backups
              </p>
              <p className="text-[16px] flex items-center gap-2">
                <FaCheck color="#25DAC5" />
                Social integrations
              </p>
              <p className="text-[16px] flex items-center gap-2">
                <FaCheck color="#25DAC5" />
                Client billing
              </p>
              <p className="text-[16px] flex items-center gap-2">
                <FaCheck color="#25DAC5" />
                Remote access
              </p>
              <p className="text-[16px] flex items-center gap-2">
                <FaCheck color="#25DAC5" />
                Custom domain
              </p>
              <p className="text-[16px] flex items-center gap-2">
                <FaCheck color="#25DAC5" />
                24 hours support
              </p>
              <p className="text-[16px] flex items-center gap-2">
                <FaCheck color="#25DAC5" />
                Admin tools
              </p>
              <p className="text-[16px] flex items-center gap-2">
                <FaCheck color="#25DAC5" />
                Collaboration tools
              </p>
              <p className="text-[16px] flex items-center gap-2">
                <FaCheck color="#25DAC5" />
                User management
              </p>
            </div>
            <div className="w-full flex items-center justify-center mt-10">
              <button className="w-[230px] h-[60px] rounded-full border border-gray-300 text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
