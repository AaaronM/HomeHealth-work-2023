import React from "react";
import "../Css/ServicesProvided.css";

function ServicesProvided() {
  return (
    <div className="service__container__flex">
      <div className="service__container">
        <div className="service__icon"></div>
        <div className="text__container">
          <h2 className="service__h2">Expert Doctors</h2>
          <p className="service__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            tempore doloremque.
          </p>
          <div className="service__btn">Read More</div>
        </div>
      </div>

      {/* ___________________1____________________ */}

      <div className="service__container">
        <div className="service__icon"></div>
        <div className="text__container  two">
          <h2 className="service__h2">Expert Doctors</h2>
          <p className="service__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            tempore doloremque.
          </p>
          <div className="service__btn">Read More</div>
        </div>
      </div>
    </div>
  );
}

export default ServicesProvided;
