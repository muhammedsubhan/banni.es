import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../components/FirebaseContext/FirebaseContext";

const SignUp = () => {
  const [userData, setUserData] = useState({
    Name: "",
    Email: "",
    Password: "",
    confirmPass: "",
  });

  const navigate = useNavigate();

  const userHandleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const { signUp } = useUserAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();

    await signUp(userData.Email, userData.Password);
    navigate("/login");

    setUserData({
      Name: "",
      Email: "",
      Password: "",
      confirmPass: "",
    });
  };

  return (
    <>
      <div className="bg- bg-colorBackGround h-screen flex items-center justify-center">
        <div>
          <form className="flex flex-col gap-4" onSubmit={handleSignUp}>
            <input
              type="text"
              placeholder="Name"
              name="Name"
              value={userData.Name}
              className="focus:outline-none h-10 w-72"
              onChange={userHandleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="Email"
              value={userData.Email}
              className="focus:outline-none h-10 w-72"
              onChange={userHandleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="Password"
              value={userData.Password}
              className="focus:outline-none h-10 w-72"
              onChange={userHandleChange}
            />
            <input
              type="password"
              placeholder="confirm Password"
              name="confirmPass"
              value={userData.confirmPass}
              className="focus:outline-none h-10 w-72"
              onChange={userHandleChange}
            />
            <button type="submit" className="border text-colorWhite h-10 w-72">
              SignUp
            </button>
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
