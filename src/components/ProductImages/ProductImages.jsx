import React, { useState } from "react";

const ProductImages = ({ data, setDetails, setShowDetails }) => {
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
            className="h-[200px] bg-cover  w-[280px] hover:opacity-40"
          />
          <div className="text-center">
            {showText && (
              <>
                <p className="absolute imagecity  text-sm">{data.title}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductImages;
