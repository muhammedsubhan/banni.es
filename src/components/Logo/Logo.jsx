import React from "react";
import logoImg from "../../img/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <div>
        <Link to="/">
          <img src={logoImg} alt="logo" className="w-[245px]" />
        </Link>
      </div>
    </>
  );
};

export default Logo;
