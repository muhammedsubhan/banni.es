import React, { useState } from "react";

const ProjectImages = ({ data }) => {
  const [showText, setShowText] = useState(false);

  const handleMouseEnter = () => {
    setShowText(true);
  };

  const handleMouseLeave = () => {
    setShowText(false);
  };

  return (
    <>
      <div
        className="text-colorWhite"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative">
          <img
            src={data.image}
            alt={data.title}
            className="h-[250px] md:h-[280px] sm:h-[350px] xs:h-[250px] hover:opacity-40"
          />
          <div className="text-center">
            {showText && (
              <>
                <p className="absolute imagetext  text-xl font-semibold">
                  {data.red}
                </p>
                <p className="absolute imagecity  text-sm">{data.city}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectImages;
