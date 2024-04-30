import React, { Fragment } from "react";
import Header from "../layout/Header";
import PopularMovie from "../home/PopularMovie";
import TrendingMovie from "../home/TrendingMovie";
import Dowload from "../home/Dowload";
import Footer from "../layout/Footer";
import Banner from "../home/Banner";
import TvShow from "../home/TvShow";

const HomePage = () => {
  return (
    <Fragment>
      <Header></Header>
      <Banner></Banner>
      <PopularMovie></PopularMovie>
      <Dowload></Dowload>
      <TrendingMovie></TrendingMovie>
      <TvShow></TvShow>
      <Footer></Footer>
    </Fragment>
  );
};

export default HomePage;
