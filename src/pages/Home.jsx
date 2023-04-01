import React from "react";

import "../Css/Home.css";

import Mainpic from "../IMG/doc_pic 1.png";
import DocCaracel from "../components/DocCaracel";
import Consultation from "../components/Consultation";
import Review from "../components/Review";
import ServicesProvided from "../components/ServicesProvided";

import Doc_consul51 from "../IMG/Subject.png";
import { TbActivityHeartbeat } from "react-icons/tb";

import { CiHeart, CiHospital1, CiHome, CiPill } from "react-icons/ci";

const Home = () => {
  return (
    <div>
      <div className="home__section__container">
        <div className="home__container">
          <p className="home__p__top">We are here for you</p>
          <h1 className="home__h1">
            Your Healthy Life is Our First Priority{" "}
            <TbActivityHeartbeat className="h1_icon" />
          </h1>
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

            <h2 className="doc__h2__heading">Our specialist doctor team</h2>
            <p className="doc__h2__heading__p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              numquam aut veniam adipisci, odit ratione tempore cumque eos!
              Ipsa.
            </p>

            {/* _____________END OF SERVICES_________ */}
            <DocCaracel />
            {/* ____________CONSULTATION___________ */}
            <Consultation />
            {/* ________________REVIEW_______________ */}
            <h2 className="review__h2">Check Out Recent Reviews</h2>
            <Review />
            {/* _________________ServicesProvided____________ */}
            <div className="service__home__cont">
              <ServicesProvided />
              <div className="div__pic">
                <img
                  src={Doc_consul51}
                  alt="docpic"
                  className="pic__servicees"
                />
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
                <div className="circle4"></div>
                <div className="circle5"></div>
                <div className="circle6"></div>
                <div className="circle7"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
