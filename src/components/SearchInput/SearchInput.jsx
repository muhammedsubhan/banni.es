import React from "react";

const SearchInput = ({ setSearchToggle }) => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="text-colorWhite text-3xl absolute right-5 top-5">
          <button onClick={() => setSearchToggle(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <form>
          <input
            type="text"
            placeholder="Search... "
            className="w-[400px] h-[40px]  border-b-4 outline-none border-lightBlueColor"
          />
        </form>
      </div>
    </>
  );
};

export default SearchInput;
