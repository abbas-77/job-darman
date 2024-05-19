import React from "react";

function login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between login-bg-image">
      <div className="flex min-h-screen w-full items-center justify-between gap-5 px-36 py-16 bg-[#482BE770]">
        <div className="w-[410px] h-[550px] flex flex-col items-center justify-center">
          <p className="text-[44px] text-white font-semibold">
            We solve digital problems with an outstanding creative flare
          </p>
          <p className="text-[16px] text-white">
            We have created a new product that will help designers, developers
            and companies create websites for their startups quickly and easily.
          </p>
        </div>
        <div className="bg-white w-[470px] h-[550px] rounded-xl">
          <div className="flex items-center w-full">
            <div className="w-1/2 text-center text-[18px] text-[#1E0E62] font-medium border-b-4 border-[#1E0E62] py-4">
              Sign up
            </div>
            <div className="w-1/2 text-center text-[18px] text-[#47474780] font-medium border-b-4 border-[#47474780] py-4">
              Login
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-8 w-full h-[calc(100%-62px)]">
            <input
              placeholder="Your email"
              className="rounded-full border border-gray-300 w-[330px] h-[50px] ps-4"
            />
            <input
              placeholder="Your password"
              className="rounded-full border border-gray-300 w-[330px] h-[50px] ps-4"
            />
            <button className="rounded-full text-lg w-[330px] h-[50px] text-center bg-[#25DAC5] text-white">
              Create an Account
            </button>
            <div className="relative">
              <div className="h-0.5 w-[330px] bg-gray-300 rounded-full"></div>
              <div className="text-gray-300 absolute bg-white right-[145px] -bottom-[9px] text-center w-[40px]">
                or
              </div>
            </div>
            <button className="rounded-full text-lg w-[330px] h-[50px] text-center bg-[#1DA1F2] text-white">
              Login via Twitter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
