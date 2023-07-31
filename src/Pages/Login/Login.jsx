import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../components/FirebaseContext/FirebaseContext";
import Logo from "../../components/Logo/Logo";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    Email: "",
    Password: "",
  });

  const { logIn, user } = useUserAuth();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLogin((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const signUpHandle = async (e) => {
    e.preventDefault();

    await logIn(userLogin.Email, userLogin.Password);
    localStorage.setItem("currentUser", JSON.stringify(user));
    navigate("/");
  };

  return (
    <>
      <div className="bg-colorBackGround">
        <div className="  flex items-center justify-center  h-screen">
          <div>
            <div className="flex justify-center mb-10">
              <Logo />
            </div>
            <form className="flex flex-col gap-4" onSubmit={signUpHandle}>
              <input
                type="email"
                placeholder="Email"
                name="Email"
                value={userLogin.Email}
                className="focus:outline-none h-10 w-72"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="Password"
                value={userLogin.Password}
                className="focus:outline-none h-10 w-72"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="border text-colorWhite h-10 w-72"
              >
                LogIn
              </button>
            </form>
            <p className="text-colorWhite text-center pt-5 text-base font-light">
              Dont have an Account ?
              <span className="font-semibold hover:underline">
                <Link to="/signup">SignUp</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
