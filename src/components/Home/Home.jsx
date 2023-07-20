import React from "react";
import Navbar from "../Navbar/Navbar"
import MainSec from "../Main/MainSec";
import Category from "../Category/Category";
import ShowRoom from "../ShowRooms/ShowRoom";

const Home = () => {
  return (
    <>
      <Navbar />
      <MainSec />
      <Category />
      <ShowRoom />
    </>
  );
};

export default Home;
