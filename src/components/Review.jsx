import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import pic123 from "../IMG/pic_5.jpg";

function Review() {
  return (
    <div>
      <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <p>HELLO</p>
        </SplideSlide>
        <SplideSlide>
          <p>HELLO</p>
        </SplideSlide>
        <SplideSlide>
          <p>HELLO</p>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Review;
