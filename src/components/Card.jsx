import React from "react";
import pic123 from "../IMG/Subject.png";
import { BsStarFill } from "react-icons/bs";
import "../Css/Card.css";

function Card() {
  return (
    <div>
      <div className="container__card">
        <div className="container__top">
          <img src={pic123} alt="picpic" className="review__pic" />
          <p>Erik Johnson</p>
        </div>
        <div className="container__middle">
          <p className="review__highlight">Awsome Work </p>
          <p>
            This is unbelivable. He is too such a great doctor and the facility
            is clean and really professionall{" "}
          </p>
        </div>
        <div className="icon__cont">
          <BsStarFill className="icon__review" />
          <BsStarFill className="icon__review" />
          <BsStarFill className="icon__review" />
          <BsStarFill className="icon__review" />
          <BsStarFill className="icon__review" />
        </div>
      </div>
    </div>
  );
}

export default Card;
