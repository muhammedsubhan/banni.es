import React, { useState } from "react";

const ProjectImages = ({ data, setDetails, setShowDetails }) => {
  const [showText, setShowText] = useState(false);

  const handleMouseEnter = () => {
    setShowText(true);
  };

  const handleMouseLeave = () => {
    setShowText(false);
  };

  const dataDetails = () => {
    setShowDetails(true);
    setDetails(data);
  };

  return (
    <>
      <div
        onClick={dataDetails}
        className="text-colorWhite relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
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
