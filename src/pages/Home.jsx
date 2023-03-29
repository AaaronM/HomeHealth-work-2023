import React from "react";

import "../Css/Home.css";

import Mainpic from "../IMG/doc_pic 1.png";

// import { AiOutlineHeart } from "react-icons/ai";
// import { GiStethoscope } from "react-icons/gi";
// import { BsFillHouseHeartFill } from "react-icons/bs";
// import { FaHandHoldingHeart } from "react-icons/fa";

import { CiHeart, CiHospital1, CiHome, CiPill } from "react-icons/ci";

// CiHeart
// CiHospital1
// CiHome
// CiPill

const Home = () => {
  return (
    <div>
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
      <div>
        <p className="part_2_heading">Services</p>
        <h2 className="part_2_heading_h2"> Our Home Health Services</h2>

        <div className="container">
          <div className="services">
            <div className="service">
              <div className="icon">
                <CiHeart />
              </div>
              <div className="text-cont">
                <div>
                  <p className="service__info__heading">Expert Doctor</p>
                  <p className="service__info__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse mollitia praesentium voluptatem est maiores optio
                    voluptas quis
                  </p>
                  <button className="service__info__btn">Read More</button>
                </div>
              </div>
            </div>

            {/*  2 */}
            <div className="service">
              <div className="icon">
                <CiHospital1 />
              </div>
              <div className="text-cont">
                {" "}
                <div>
                  <p className="service__info__heading">Expert Doctor</p>
                  <p className="service__info__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse mollitia praesentium voluptatem est maiores optio
                    voluptas quis
                  </p>
                  <button className="service__info__btn">Read More</button>
                </div>
              </div>
            </div>
            {/*  3 */}
            <div className="service">
              <div className="icon">
                <CiHome />
              </div>
              <div className="text-cont">
                {" "}
                <div>
                  <p className="service__info__heading">Expert Doctor</p>
                  <p className="service__info__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse mollitia praesentium voluptatem est maiores optio
                    voluptas quis
                  </p>
                  <button className="service__info__btn">Read More</button>
                </div>
              </div>
            </div>
            {/*  4 */}
            <div className="service">
              <div className="icon">
                <CiPill />
              </div>
              <div className="text-cont">
                {" "}
                <div>
                  <p className="service__info__heading">Expert Doctor</p>
                  <p className="service__info__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse mollitia praesentium voluptatem est maiores optio
                    voluptas quis
                  </p>
                  <button className="service__info__btn">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
