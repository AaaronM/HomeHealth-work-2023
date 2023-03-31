import React from "react";
import Doc_consul5 from "../IMG/Subject.png";
import "../Css/Consultation.css";

function Consultation() {
  return (
    <div>
      <div className="container__consultation">
        <div className="consultation__pic__bg"></div>
        <img
          className="consultation__pic"
          src={Doc_consul5}
          alt="consultation"
        />

        <div className="consultation__text">
          <h2 className="consultation__h2">Consultation starting at $75</h2>
          <p className="consultation__p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            quidem laborum, laboriosam atque perferendis maiores tenetur minus
            distinctio eaque recusandae optio alias.
          </p>
          <button className="consultation__btn">Explore Now</button>
        </div>
      </div>
    </div>
  );
}

export default Consultation;
