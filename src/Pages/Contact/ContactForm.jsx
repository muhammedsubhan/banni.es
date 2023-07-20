import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="">
        <div className="flex items-center justify-center">
          <form className=" p-4 xs:p-2">
            <div className="">
              <input
                type="text"
                placeholder="*NAME"
                className="contact-form mr-4 mb-4 xs:w-[290px]"
              />
              <input
                type="text"
                placeholder="*SURNAME"
                className="contact-form mr-4 mb-4 xs:w-[290px]"
              />
              <input
                type="email"
                placeholder="*E-MAIL"
                className="contact-form mr-4 mb-4 xs:w-[290px]"
              />
              <br />
              <input
                type="text"
                placeholder="*PHONE"
                className="contact-form mr-4 mb-4 xs:w-[290px]"
              />
              <input
                type="text"
                placeholder="*COUNTRY"
                className="contact-form mr-4 mb-4 xs:w-[290px]"
              />
              <input
                type="text"
                placeholder="*CITY"
                className="contact-form mr-4 mb-4 xs:w-[290px]"
              />
            </div>
            <div className="flex lg:flex-col gap-6">
              <p className="text-colorWhite leading-8 font-light text-xl sm:text-base w-[550px] md:w-[400px] sm:w-[310px]">
                Our team of professionals has extensive experience and will be
                able to assist you with your project.
                <br />
                <br />
                Let's talk?
              </p>
              <textarea
                cols="50"
                rows="10"
                placeholder="*MESSAGE"
                className="contact-textarea sm:w-[320px] xs:w-[310px]"
              ></textarea>
            </div>
            <div className="flex items-end justify-end p-16 ">
              <button className="text-colorWhite border px-10 py-2 text-base font-normal hover:bg-colorWhite hover:text-colorBlack">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
