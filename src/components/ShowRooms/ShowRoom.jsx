import React, { useState } from "react";
import { image1, image2, image3, image4 } from "./ShowRoomImages";

const ShowRoom = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <div className="py-4 bg-black ">
        <div className="text-center py-10">
          <h1 className="text-2xl text-white font-light">Showrooms</h1>
        </div>
        <div className="flex flex-wrap">
          <div
            className="relative hover:border-b-2 border-blue-400 "
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={image1}
              alt="MADRID"
              className="h-[290px] w-[375px] opacity-30 "
            />
            <h1 className="absolute top-[100px] left-[160px] text-base text-gray-300 font-medium">
              MADRID
            </h1>
            {hoveredIndex === 0 && (
              <div className="absolute top-[150px] left-[90px]  text-gray-200 font-light">
                <p className="text-center ">
                  Jose Ortenga Gasset, 26
                  <br />
                  28006, Madrid
                  <br />
                  91 431 70 62
                </p>
              </div>
            )}
          </div>
          <div
            className="relative  hover:border-b-2 border-blue-400"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={image2}
              alt="BARCELONA"
              className="h-[290px] w-[375px] opacity-30"
            />

            <h1 className="absolute top-[100px] left-[150px] text-base text-gray-300 font-medium">
              BARCELONA
            </h1>
            {hoveredIndex === 1 && (
              <div className="absolute top-[150px] left-[120px]  text-gray-200 font-light ">
                <p className="text-center ">
                  Av de Pau Casals 6,
                  <br />
                  Barcelona
                  <br />
                  93 209 06 09
                </p>
              </div>
            )}
          </div>
          <div
            className="relative  hover:border-b-2 border-blue-400"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={image3}
              alt="MARBELLA"
              className="h-[290px] w-[375px] opacity-30"
            />
            <h1 className="absolute top-[100px] left-[150px] text-base text-gray-300 font-medium">
              MARBELLA
            </h1>
            {hoveredIndex === 2 && (
              <div className="absolute top-[150px] left-[90px] text-gray-200 font-light ">
                <p className="text-center ">
                  CC. EI Capricho, Local 2 y 7
                  <br />
                  Marbella
                  <br />
                  95 277 70 50
                </p>
              </div>
            )}
          </div>
          <div
            className="relative  hover:border-b-2 border-blue-400"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={image4}
              alt="MALLORCA"
              className="h-[290px] w-[375px] opacity-40"
            />
            <h1 className="absolute top-[100px] left-[150px] text-base text-gray-300 font-medium">
              MALLORCA
            </h1>
            {hoveredIndex === 3 && (
              <div className="absolute top-[150px] left-[120px] text-gray-200 font-light ">
                <p className="text-center ">
                  Can Veri, 10
                  <br />
                  Plama de Mallorca
                  <br />
                  97 109 91 80
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowRoom;
