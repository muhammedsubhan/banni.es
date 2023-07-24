import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProjectImages from "../../components/ProjectsImages/ProjectImages";
import { projectImg } from "./images";
import ShowRoom from "../../components/ShowRooms/ShowRoom";
import Footer from "../../components/Footer/Footer";

const Projects = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState({});

  return (
    <>
      <div className="relative">
        <div
          className={`min-h-screen bg-colorBackGround relative ${
            showDetails ? " blur " : ""
          }`}
        >
          <Navbar />
          <div>
            <div className="text-colorWhite px-10 py-3">
              <h1 className="text-sm font-semibold uppercase">Projects</h1>
            </div>
            <div className="text-center py-10">
              <div className="flex items-center justify-center py-2">
                <div className="border-b-2 border-lightBlueColor w-[60px] "></div>
              </div>
              <h1 className="text-3xl text-colorWhite font-light uppercase">
                Projects
              </h1>
            </div>
            <div className="text-center py-2">
              <small className="text-colorWhite text-sm font-light text-center">
                Below we show you examples of some of our more than 11,000
                national and international interior design and
                <br />
                decoration projects carried out.
              </small>
            </div>
            <div className="flex items-center justify-center ">
              <div className=" grid grid-cols-4 gap-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-10 ">
                {projectImg.map((item) => {
                  return (
                    <ProjectImages
                      key={item.id}
                      data={item}
                      setShowDetails={setShowDetails}
                      setDetails={setDetails}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <ShowRoom />
          <Footer />
        </div>
        <div className="flex items-center justify-center ">
          {showDetails && (
            <div className="text-colorWhite fixed top-32  z-[999]  flex bg-colorBlack">
              <img
                src={details.image}
                alt={details.title}
                className="h-[500px] bg-cover bg-center	"
              />
              <div className="  w-96 p-5">
                <p className="text-colorWhite text-3xl uppercase font-semibold pb-2">
                  {details.red}
                </p>
                <p className="text-colorWhite text-xl uppercase font-light pb-4">
                  {details.city}
                </p>
                <p className="text-colorWhite text-base font-light">
                  {details.title}
                </p>
              </div>

              <button
                className="absolute -top-16 right-0 text-2xl"
                onClick={() => setShowDetails(false)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
