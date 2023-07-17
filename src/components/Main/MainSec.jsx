import React from "react";

const MainSec = () => {
  return (
    <>
      <div className="py-4 px-20 md:px-10 bg-colorBackGround text-colorWhite flex items-center justify-around min-h-full md:flex-col">
        <div className=" w-[440px] md:w-full md:text-start leading-loose">
          <span className=" text-colorWhite text-3xl md:text-2xl font-light">
            BANNI – Market leader showrooms for quality decoration and interior
            design projects in Spain
          </span>
        </div>
        <div className="md:hidden border-r-2 border-lightBlueColor h-24"></div>
        <div className=" w-[720px] p-10 md:w-screen text-colorGray ">
          <p className="text-sm leading-loose">
            We have a wide catalog of custom-made products in designer
            furniture, modern or classic kitchens and bathrooms, high-quality
            wardrobes and dressing rooms, doors, and luxury outdoor furniture.
            We are official distributors of the best international brands and
            our own firm BANNI, excellent value for money in kitchen furniture,
            bathroom furniture, living room furniture, wardrobes and dressing
            rooms.
          </p>
          <br />
          <p className="text-sm leading-loose">
            We offer high-quality modern, contemporary and classic decorative
            objects and accessories that adapt to all styles. We carry out
            interior design projects and partial or integral decoration of the
            environment you want, or we supply products individually.
            <span className="text-colorWhite text-base font-semibold">
              We provide services to professionals and individuals.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default MainSec;
