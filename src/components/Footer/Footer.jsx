import React from "react";
import ProductLinks from "./ProductLinks";
import ServicesLinks from "./ServicesLinks";
import ContactLinks from "./ContactLinks";
import SocialLinks from "./SocialLinks";
import footerLogo from "../../img/footer-logo.png";

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-center  bg-colorBackGround pt-20">
        <div className="border-b border-colorGrayDark w-[1200px] xs:w-[300px] "></div>
      </div>
      <div className="p-16 bg-colorBackGround ">
        <div className=" flex justify-evenly md:flex-wrap sm:justify-start">
          <div>
            <h1 className="text-colorGray mb-4 font-medium">Products</h1>
            <ProductLinks />
          </div>
          <div>
            <h1 className="text-colorGray mb-4 font-medium">Services</h1>
            <ServicesLinks />
          </div>
          <div>
            <h1 className="text-colorGray mb-4 font-medium">Contact</h1>
            <ContactLinks />
          </div>
          <div>
            <SocialLinks />
          </div>
        </div>
        <div className="flex items-center justify-center mt-3 flex-col">
          <img src={footerLogo} alt="logo" className="h-[40px] mt-2" />
          <p className="text-colorGray mt-4 font-light text-sm xs:text-xs">
            BANNI - Elegant Interiors. All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
