import React from "react";

const ContactLinks = () => {
  return (
    <>
      <div className=" leading-loose">
        <p className="hover:text-lightBlueColor  text-colorGray font-light hover:underline">
          Contact Form
        </p>
        <p className="text-colorGray font-light">General Information:</p>
        <p className="text-lightBlueColor hover:underline">info@banni.es</p>
        <p className="text-colorGray font-light">Customer Service:</p>
        <p className="text-lightBlueColor hover:underline">
          atencionalcliente@banni.es
        </p>
        <div className="text-colorGray font-medium">
          <p className="hover:text-lightBlueColor hover:underline">
            Legal Warning
          </p>
          <p className="hover:text-lightBlueColor hover:underline">
            Privacy Policy
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactLinks;
