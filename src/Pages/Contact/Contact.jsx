import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ContactForm from "./ContactForm";
import ShowRoom from "../../components/ShowRooms/ShowRoom";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-colorBackGround">
        <div className="text-colorWhite px-10 py-3">
          <h1 className="text-sm font-semibold uppercase">Contact Form</h1>
        </div>
        <div className="text-center py-10">
          <div className="flex items-center justify-center py-2">
            <div className="border-b-2 border-lightBlueColor w-[60px] "></div>
          </div>
          <h1 className="text-3xl text-colorWhite font-light uppercase">
            Contact Form
          </h1>
        </div>
        <div className="text-center py-2">
          <small className="text-colorWhite text-sm font-light">
            Send us your question by filling out this form, or email the store
            corresponding to the section of stores.
          </small>
        </div>
        <ContactForm />
      </div>
      <ShowRoom />
        <Footer />
    </>
  );
};

export default Contact;
