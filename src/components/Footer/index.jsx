import React from "react";
import FooterLogo from "../../assets/svgs/footerLogo.svg";

const Footer = () => {
  return (
    <div className="bg-[#252641] p-4">
      <div className="items-center flex justify-center gap-5 ">
        <div className="border-r border-r-[#626381] ">
          <img className="w-24 p-3 h-auto pr-4" src={FooterLogo} alt="" />
        </div>
        <span className="w-28 text-white">Virtual Class for Zoom</span>
      </div>
      <div className="mx-auto flex flex-col justify-center text-center mt-12">
        <p className="text-[#B2B3CF] text-lg mb-3">
          Subscribe to get our Newsletter
        </p>
        <div className="flex items-center mx-auto">
          <input
            type="email"
            placeholder="Your Email"
            className="border-[#83839A] py-2 px-4 text-[#83839A] border bg-transparent rounded-full mr-4"
          />
          <button className="bg-primaryGradient py-2 text-lg px-12 rounded-full text-white">
            Submit
          </button>
        </div>
        <div className="text-[#B2B3CF] mt-12">
          <div>
            <span>
              Careers <span className="text-[#626381] outline-none">|</span>
            </span>
            <span>
              {" "}
              Privacy Policy <span className="text-[#626381]">|</span>
            </span>
            <span> Terms & Conditions</span>
          </div>
          <div className="mt-3">© 2021 Class Technologies Inc.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
