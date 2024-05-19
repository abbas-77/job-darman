import React from "react";
import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#2F1893] h-[240px] py-10 px-10">
      <div className="h-[50px] flex items-center justify-between">
        <p className="text-[24px] text-white font-semibold">Startup 3</p>
        <div>
          <div className="flex items-center gap-4 text-white">
            <p>Privacy Policy</p>
            <p>Terms</p>
            <p>
              <FaTwitter size={25} />
            </p>
            <p>
              <FaFacebookF size={25} />
            </p>
            <p>
              <FaGooglePlusG size={35} />
            </p>
          </div>
        </div>
      </div>
      <div className="h-0.5 bg-gray-400 rounded-full my-10"></div>
      <div className="h-[50px] flex items-center justify-between">
        <div>
          <div className="flex items-center gap-4 text-white">
            <p>Tour</p>
            <p>Features</p>
            <p>Pricing Plans</p>
            <p>Our Works</p>
            <p>Brands</p>
            <p>Contacts</p>
          </div>
        </div>
        <p className="text-[16px] text-white">
          © 2017 Designmodo. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
