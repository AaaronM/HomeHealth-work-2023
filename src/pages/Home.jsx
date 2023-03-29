import React from "react";

import "../Css/Home.css";

import Mainpic from "../IMG/doc_pic 1.png";

const Home = () => {
  return (
    <div className="home__section__container">
      <div className="home__container">
        <p className="home__p__top">We are here for you</p>
        <h1 className="home__h1">Your Healthy Life is Our First Priority.</h1>
        <p className="home__p__bttm">
          From treating the rarest symptoms to performing the most complicated
          surgeries, We have expertise in your condition
        </p>
        <button className="home__main__btn"> Get Appointment</button>
      </div>
      <div className="home__pic__cont">
        <img className="home__pic" src={Mainpic} alt="homepic" />
        <div className="pic_bg"></div>
        <div className="pic_bg_dotted"></div>
      </div>
    </div>
  );
};
export default Home;
