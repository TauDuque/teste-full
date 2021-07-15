import React from "react";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import { img_1, img_2, img_3, img_4 } from "../assets";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1 },
};

const Slider = () => {
  const items = [
    <img src={img_1} alt="working" />,
    <img src={img_2} alt="working" />,
    <img src={img_3} alt="working" />,
    <img src={img_4} alt="working" />,
  ];

  return (
    <Wrapper>
      <AliceCarousel
        items={items}
        autoPlay
        infinite
        disableButtonsControls
        disableDotsControls
        animationDuration={1550}
        autoPlayInterval={1800}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
width: 355px;
.row-img {
    display: flex;
  }

  ul li {
      width: 380px;
  }

  img {
    height: 255px;
    width: 325px%;
    margin-top: 15px;
    vertical-align: middle;
    box-shadow: 7px 2px 10px rgba(0, 0, 0, 0.22);
    overflow: hidden;
  }
  }
`;

export default Slider;
