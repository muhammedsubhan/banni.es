import React from "react";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
} from "./CategoryImages";
const Category = () => {
  return (
    <>
      <div className="py-5 bg-black  text-white flex flex-wrap uppercase">
        <div className="relative">
          <div className=" text z-20 px-40">
            <h1 className=" hover:border-2  py-2 text-xl text-white font-medium">
              kitchens
            </h1>
          </div>
          <img
            src={image1}
            alt="kitchens"
            className="h-[319px] hover:opacity-20 opacity-50 transition-all ease-linear"
          />
        </div>
        <div className="relative">
          <div className=" text z-20 px-40">
            <h1 className=" hover:border-2  py-2 text-xl text-white font-medium">
              BathRooms
            </h1>
          </div>
          <img
            src={image2}
            alt="BathRooms"
            className="h-[319px] hover:opacity-20 opacity-50 transition-all ease-linear"
          />
        </div>

        <div className="relative">
          <div className=" text z-20 px-28">
            <h1 className=" hover:border-2  py-2 text-xl text-white font-medium">
              InDoor Furniture
            </h1>
          </div>
          <img
            src={image3}
            alt="InDoor"
            className="h-[319px] hover:opacity-20 opacity-50 transition-all ease-linear"
          />
        </div>

        <div className="relative">
          <div className=" text z-20 px-20">
            <h1 className=" hover:border-2  py-2 text-xl text-white font-medium">
              Closets and Dressing Rooms
            </h1>
          </div>
          <img
            src={image4}
            alt="Closets"
            className="h-[319px] hover:opacity-20 opacity-50 transition-all ease-linear"
          />
        </div>

        <div className="relative">
          <div className=" text z-20 px-40">
            <h1 className=" hover:border-2  py-2 text-xl text-white font-medium">
              Door
            </h1>
          </div>
          <img
            src={image5}
            alt="Door"
            className="h-[319px] hover:opacity-20 opacity-50 transition-all ease-linear"
          />
        </div>

        <div className="relative">
          <div className=" text z-20 px-28">
            <h1 className=" hover:border-2  py-2 text-xl text-white font-medium">
              OutDoor Furniture
            </h1>
          </div>
          <img
            src={image6}
            alt="OutDoor"
            className="h-[319px] hover:opacity-20 opacity-50 transition-all ease-linear"
          />
        </div>

        <div className="relative">
          <div className=" text z-20 px-20">
            <h1 className=" hover:border-2  py-2 text-xl text-white font-medium">
              Accessories and Complements
            </h1>
          </div>
          <img
            src={image7}
            alt="Accessories"
            className="h-[319px] hover:opacity-20 opacity-50 transition-all ease-linear"
          />
        </div>

        <div className="relative">
          <div className=" text z-20 px-28">
            <h1 className=" hover:border-2  py-2 text-xl text-white font-medium">
              Floors and Coatings
            </h1>
          </div>
          <img
            src={image8}
            alt="Floors"
            className="h-[319px] hover:opacity-20 opacity-50 transition-all ease-linear"
          />
        </div>

        <div className="relative">
          <div className=" text z-20 px-40">
            <h1 className=" hover:border-2  py-2 text-xl text-white font-medium">
              Lighting
            </h1>
          </div>
          <img
            src={image9}
            alt="Lighting"
            className="h-[319px] hover:opacity-20 opacity-50 transition-all ease-linear"
          />
        </div>

        <div className="relative">
          <div className=" text z-20 px-40">
            <h1 className=" hover:border-2  py-2 text-xl text-white font-medium">
              Office Furniture
            </h1>
          </div>
          <img
            src={image10}
            alt="Office"
            className="h-[319px] hover:opacity-20 opacity-50 transition-all ease-linear"
          />
        </div>

        <div className="relative ">
          <div className=" text z-20">
            <h1 className="  text-xl text-white font-medium">
              Office Furniture
            </h1>
            <h1 className="  text-xl text-blue-300 font-medium hover:underline mt-1">
              by Appointment
            </h1>
          </div>
          <img
            src={image11}
            alt="Office"
            className="h-[319px] w-[1010px]  opacity-50 "
          />
        </div>
      </div>
    </>
  );
};

export default Category;
