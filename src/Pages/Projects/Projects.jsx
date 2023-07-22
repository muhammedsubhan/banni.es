import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProjectImages from "../../components/ProjectsImages/ProjectImages";
import { projectImg } from "./images";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-colorBackGround">
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
            Below we show you examples of some of our more than 11,000 national
            and international interior design and
            <br />
            decoration projects carried out.
          </small>
        </div>
        <div className="flex items-center justify-center ">
          <div className=" grid grid-cols-4 gap-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-10">
            {projectImg.map((item) => {
              return <ProjectImages key={item.id} data={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
