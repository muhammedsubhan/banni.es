import React from "react";

const ContactLinks = () => {
  return (
    <>
      <div className=" leading-loose">
        <p className="text-gray-400 font-light hover:underline">Contact Form</p>
        <p className="text-gray-400 font-light">General Information:</p>
        <p>info@banni.es</p>
        <p className="text-gray-400 font-light">Customer Service:</p>
        <p>atencionalcliente@banni.es</p>
        <div className="text-gray-200 font-medium">
          <p className="hover:underline">Legal Warning</p>
          <p className="hover:underline">Privacy Policy</p>
        </div>
      </div>
    </>
  );
};

export default ContactLinks;
