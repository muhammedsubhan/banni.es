import React, { useEffect, useState } from "react";
import HomeLinks from "../HomeLinks/HomeLinks";
import { images } from "../Home/image";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import SearchInput from "../SearchInput/SearchInput";
import { Link, useLocation } from "react-router-dom";
import contactImage from "../../Pages/Contact/bgContact.jpg";
import projectImage from "../../Pages/Projects/projectimage.jpg";
import electronicsImage from "../../Pages/Products/electronics.jpg";
const Navbar = () => {
  const [currentState, setCurrentState] = useState(0);
  const [menuToggle, setMenuToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentState((prevState) => (prevState + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const bgImageStyle =
    location.pathname === "/contact"
      ? {
          backgroundImage: `url(${contactImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "550px",
        }
      : location.pathname === "/projects"
      ? {
          backgroundImage: `url(${projectImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "550px",
        }
      : location.pathname === "/products/electronics"
      ? {
          backgroundImage: `url(${electronicsImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "550px",
        }
      : location.pathname === "/products/jewelery"
      ? {
          backgroundImage: `url(${projectImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "550px",
        }
      : location.pathname === "/products/men's%20clothing"
      ? {
          backgroundImage: `url(${contactImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "550px",
        }
      : location.pathname === "/products/women's%20clothing"
      ? {
          backgroundImage: `url(${projectImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "550px",
        }
      : {
          backgroundImage: `url(${images[currentState].url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
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
            <div>
              <Link to="/contact">
                <p className="text-colorWhite hover:text-lightBlueColor hover:underline font-medium text-sm transition duration-100 hover:ease-in">
                  Contact
                </p>
              </Link>
            </div>
            <div className="hidden md:flex">
              <Logo />
            </div>
          </div>
          <div className="flex md:hidden">
            <Logo />
          </div>
          <div className="flex text-white font-medium text-sm gap-2">
            <Link to="/login">
              <button className="text-colorWhite border px-4 py-1 rounded-xl ">
                LogIn
              </button>
            </Link>

            <Link to="/signup">
              <button className="text-colorWhite border px-4 py-1 rounded-xl">
                SignUp
              </button>
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <HomeLinks handleSearchToggle={handleSearchToggle} />
        </div>

        {location.pathname === "/contact" && (
          <div className="py-24">
            <p className="text-colorWhite text-center text-4xl font-light leading-relaxed sm:text-3xl sm:leading-light ">
              Entrust us with your decoration projects <br /> both national and
              international
            </p>
          </div>
        )}

        {location.pathname === "/projects" && (
          <div className="py-24">
            <p className="text-colorWhite text-center text-4xl font-light leading-relaxed sm:text-3xl sm:leading-light ">
              Interior design and high decoration
              <br /> projects
            </p>
          </div>
        )}

        {location.pathname === "/products/electronics" && (
          <div className="py-24">
            <p className="text-colorWhite text-center text-4xl font-light leading-relaxed sm:text-2xl sm:leading-light ">
              High quality Electronics
            </p>
          </div>
        )}

        {location.pathname === "/contact" ? (
          " "
        ) : location.pathname === "/projects" ? (
          " "
        ) : location.pathname === "/products/electronics" ? (
          " "
        ) : location.pathname === "/products/jewelery" ? (
          " "
        ) : location.pathname === "/products/men's%20clothing" ? (
          " "
        ) : location.pathname === "/products/women's%20clothing" ? (
          " "
        ) : (
          <div className="flex justify-center items-end text-center text-colorWhite text-3xl">
            <i className="fa-solid fa-arrow-down animate-bounce absolute bottom-0"></i>
          </div>
        )}
        {location.pathname === "/contact" ? (
          " "
        ) : location.pathname === "/projects" ? (
          " "
        ) : location.pathname === "/products/electronics" ? (
          " "
        ) : location.pathname === "/products/jewelery" ? (
          " "
        ) : location.pathname === "/products/men's%20clothing" ? (
          " "
        ) : location.pathname === "/products/women's%20clothing" ? (
          " "
        ) : (
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
        )}

        <div className="hidden md:flex absolute right-10 top-24">
          <button
            className="text-3xl text-colorWhite"
            onClick={menuHandleToggle}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
