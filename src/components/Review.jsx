import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Card from "./Card";

function Review() {
  return (
    <div>
      <Splide
        aria-label="reviews"
        options={{
          rewind: true,
          width: 1250,
          gap: "1.5rem",
          perPage: 3,
        }}
      >
        <SplideSlide>
          <Card />
        </SplideSlide>
        <SplideSlide>
          <Card />
        </SplideSlide>
        <SplideSlide>
          <Card />
        </SplideSlide>
        <SplideSlide>
          <Card />
        </SplideSlide>
        <SplideSlide>
          <Card />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Review;
