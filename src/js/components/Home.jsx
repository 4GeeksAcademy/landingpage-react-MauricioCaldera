import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbo from "./Jumbo";
import CardList from "./CardList";
import Footer from "./Footer";
//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbo />
      <CardList />
      <Footer />
    </>
  );
};

export default Home;
