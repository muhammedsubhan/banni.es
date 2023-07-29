import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="bg- bg-colorBackGround h-screen flex items-center justify-center">
        <div>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="focus:outline-none h-10 w-72"
            />
            <input
              type="email"
              placeholder="Email"
              className="focus:outline-none h-10 w-72"
            />
            <input
              type="password"
              placeholder="Password"
              className="focus:outline-none h-10 w-72"
            />
            <input
              type="password"
              placeholder="confirm Password"
              className="focus:outline-none h-10 w-72"
            />
            <button className="border text-colorWhite h-10 w-72">SignUp</button>
          </form>
          <p className="text-colorWhite text-center pt-5 text-base font-light">
            Alreay have an Account ?
            <span className="font-semibold hover:underline">
              <Link to="/login">LogIn</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
