import React from "react";
import Navbar from "../Navbar/Navbar";
import MainSec from "../Main/MainSec";
import Category from "../Category/Category";
import ShowRoom from "../ShowRooms/ShowRoom";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <MainSec />
      <Category />
      <ShowRoom />
        <Footer />
    </>
  );
};

export default Home;
