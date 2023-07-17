import React from "react";

const ServicesLinks = () => {
  return (
    <>
      <div className="leading-loose mb-5">
        <div className="text-colorGray font-light">
          <p className="hover:text-lightBlueColor hover:underline">
            Individuals
          </p>
          <p className="hover:text-lightBlueColor hover:underline">
            Professionals
          </p>
        </div>
        <h1 className="text-colorGray mb-4 font-medium">About Us</h1>
        <div className="text-colorGray font-light">
          <p className="hover:text-lightBlueColor hover:underline">About Us</p>
          <p className="hover:text-lightBlueColor hover:underline">
            Testimonials And Opinions
          </p>
          <p className="hover:text-lightBlueColor hover:underline">Press</p>
        </div>
        <h1 className="text-colorGray mb-4 font-medium hover:underline">
          Brands
        </h1>
        <h1 className="text-colorGray mb-4 font-medium hover:underline">
          Projects
        </h1>
      </div>
    </>
  );
};

export default ServicesLinks;
