import React, { useState, useEffect } from "react";
import HomeLinks from "../HomeLinks/HomeLinks";
import { images } from "./image";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import SearchInput from "../SearchInput/SearchInput";
import MainSec from "../Main/MainSec";
import Category from "../Category/Category";
import ShowRoom from "../ShowRooms/ShowRoom";
import Footer from "../Footer/Footer";

const Home = () => {
  const [currentState, setCurrentState] = useState(0);
  const [menuToggle, setMenuToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentState((prevState) => (prevState + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const bgImageStyle = {
    backgroundImage: `url(${images[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    // height: "100vh",
  };

  const goToNext = (state) => {
    setCurrentState(state);
  };

  const menuHandleToggle = () => {
    setMenuToggle(true);
  };

  const handleSearchToggle = () => {
    setSearchToggle(true);
  };

  return (
    <>
      <div
        className="relative h-screen md:h-[380px] bg-colorBackGround"
        style={bgImageStyle}
      >
        {menuToggle && (
          <div className="bg-opacity bg-colorBlack relative">
            <Menu setMenuToggle={setMenuToggle} />
          </div>
        )}
        {searchToggle && (
          <div className="bg-opacity bg-colorBlack relative">
            <SearchInput setSearchToggle={setSearchToggle} />
          </div>
        )}
        <div className="flex justify-around items-center py-10 uppercase px-5">
          <div className="space-y-8">
            <div className="flex gap-2">
              <p className="text-colorWhite hover:text-lightBlueColor hover:underline font-medium text-sm transition duration-100 hover:ease-in">
                Contact
                <span className="text-colorWhite ml-3">|</span>
              </p>
              <p className="text-colorWhite transition duration-100 hover:ease-in hover:text-lightBlueColor hover:underline font-medium text-sm ml-2">
                Blog
              </p>
            </div>
            <div className="hidden md:flex">
              <Logo />
            </div>
          </div>
          <div className="flex md:hidden">
            <Logo />
          </div>
          <div className="flex gap-2 text-white font-medium text-sm md:mb-[90px]">
            <p className="transition duration-100 hover:ease-in text-colorWhite hover:text-lightBlueColor hover:underline">
              ES <span className="text-colorWhite">|</span>
            </p>
            <p className="transition duration-100 hover:ease-in text-colorWhite hover:text-lightBlueColor hover:underline">
              EN <span className="text-colorWhite">|</span>
            </p>
            <p className="transition duration-100 hover:ease-in text-colorWhite hover:text-lightBlueColor hover:underline">
              DE
            </p>
          </div>
        </div>
        <div className="md:hidden">
          <HomeLinks handleSearchToggle={handleSearchToggle} />
        </div>
        <div className="flex justify-center items-end text-center text-colorWhite text-3xl">
          <i className="fa-solid fa-arrow-down animate-bounce absolute bottom-0"></i>
        </div>

        <div className="absolute bottom-8 right-14">
          {images.map((_, index) => (
            <span
              key={index}
              className={`circle ${
                currentState === index ? "active" : ""
              } text-colorWhite opacity-20 ml-2`}
              onClick={() => goToNext(index)}
            >
              <i className="fa-solid fa-circle"></i>
            </span>
          ))}
        </div>

        <div className="hidden md:flex absolute right-10 top-24">
          <button
            className="text-3xl text-colorWhite"
            onClick={menuHandleToggle}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      <MainSec />
      <Category />
      <ShowRoom />
      <Footer />
    </>
  );
};

export default Home;
