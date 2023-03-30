import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/sea-green";
import "../Css/Slider.css";

import pic3 from "../IMG/pic_3.jpg";
import pic5 from "../IMG/pic_5.jpg";
import docpic from "../IMG/doc_pic 1.png";

function DocCaracel() {
  return (
    <div className="slider_pics_container">
      <Splide
        options={{
          rewind: true,
          width: 1300,
          gap: "1rem",
          rewindByDrag: true,
          perPage: 3,
        }}
        aria-label="Doctor list"
      >
        <SplideSlide>
          <img className="slider_pics" src={docpic} alt="Image1" />
          <h2 className="slider_text">pic 1</h2>
        </SplideSlide>
        <SplideSlide>
          <img className="slider_pics" src={docpic} alt="Image1" />
          <h2 className="slider_text">pic 2</h2>
        </SplideSlide>
        <SplideSlide>
          <img className="slider_pics" src={docpic} alt="Image1" />
          <h2 className="slider_text">pic 3</h2>
        </SplideSlide>
        <SplideSlide>
          <img className="slider_pics" src={docpic} alt="Image1" />
          <h2 className="slider_text">pic 4</h2>
        </SplideSlide>
        <SplideSlide>
          <img className="slider_pics" src={docpic} alt="Image1" />
          <h2 className="slider_text">pic 5</h2>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default DocCaracel;
