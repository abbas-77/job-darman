import React from "react";
import { FaCheck, FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { HiOutlineBuildingOffice } from "react-icons/hi2";

function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between budget-bg-image">
      <div className="flex min-h-screen w-full items-center justify-between gap-5 px-36 py-16 bg-[#482BE770]">
        <div className="w-[410px] h-[550px] flex flex-col gap-6 items-center justify-center">
          <p className="text-[44px] text-white font-semibold">
            Let’s Keep in Touch{" "}
          </p>
          <p className="text-[22px] text-white mb-6">
            We have created a new product that will help designers, developers
            and companies create websites for their startups quickly and easily.
          </p>
          <div className="flex flex-col gap-9">
            <p className="flex items-center text-start w-full gap-2 text-[16px] text-white">
              <FaPhone size={25} />
              +1 555 505 5050
            </p>
            <p className="flex items-center text-start w-full gap-2 text-[16px] text-white">
              <IoMdMail size={25} />
              info@designmodo.com
            </p>
            <p className="flex items-center text-start w-full gap-2 text-[16px] text-white">
              <HiOutlineBuildingOffice size={35} />
              San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco,
              230909
            </p>
          </div>
        </div>
        <div className="bg-white w-[470px] h-[550px] rounded-xl">
          <div className="flex flex-col justify-center items-center gap-8 w-full h-full">
            <div className="flex items-center gap-6">
              <div className="flex flex-col gap-1">
                <label className="text-[15px] text-[#1E0E62]">Your Name</label>
                <input
                  placeholder="Your email"
                  className="rounded-full border border-gray-300 w-[180px] h-[50px] ps-4"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[15px] text-[#1E0E62]">Budget</label>
                <input
                  placeholder="500"
                  className="rounded-full border border-gray-300 w-[120px] h-[50px] ps-4"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[15px] text-[#1E0E62]">Input Feild</label>
              <input
                placeholder="name@mail.com"
                className="rounded-full border border-gray-300 w-[330px] h-[50px] ps-4"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[15px] text-[#1E0E62]">Your Message</label>
              <textarea
                placeholder="Message"
                className="rounded-xl border border-gray-300 w-[330px] h-[110px] ps-4"
              />
            </div>
            <div className="flex items-center justify-between w-[330px]">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-sm border border-gray-300 flex items-center justify-center bg-[#25DAC5]">
                  <FaCheck color="white" />
                </div>
                <p className="text-gray-400">Send me a copy</p>
              </div>
              <button className="rounded-full text-lg w-[130px] h-[50px] text-center bg-[#25DAC5] text-white">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
