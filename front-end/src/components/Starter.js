import React, { useEffect, useContext, useReducer } from "react";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import { img_1, img_2, img_3, img_4 } from "../assets";
import "react-alice-carousel/lib/alice-carousel.css";
import { useGlobalContext } from "../context";
import { MobileLinks, Loading } from "../components";

const Starter = () => {
  const { showExtra, showLoading, is_loading, hideLoading } =
    useGlobalContext();

  useEffect(() => {
    showLoading();
    showExtra();
    setTimeout(() => {
      hideLoading();
    }, 2700);
  }, []);

  const items = [
    <img src={img_1} alt="working" />,
    <img src={img_2} alt="working" />,
    <img src={img_3} alt="working" />,
    <img src={img_4} alt="working" />,
  ];

  return (
    <Wrapper>
      <h2>
        Utilize os menus laterais <br /> para a navegação...
      </h2>
      <div className="center-container">
        {is_loading ? (
          <Loading />
        ) : (
          <div className="carousel">
            <AliceCarousel
              items={items}
              autoPlay
              infinite
              disableButtonsControls
              disableDotsControls
              animationDuration={1550}
              autoPlayInterval={1800}
            />
          </div>
        )}
      </div>
      <div className="mobile-links">
        <MobileLinks />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--white-smoke);
  position: absolute;
  height: 475px;
  width: 358px;
  top: 45px;
  left: 25px;
  font-family: var(--secondary-font);
  h2 {
    display: none;
  }
  .mobile-links {
    height: 120px;
  }
  .mobile-links ul {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .mobile-links ul li {
    padding: 10px;
  }
  .carousel {
    width: 355px;
  }
  .row-img {
      display: flex;
    }
  
    ul li {
        width: 380px;
    }
  
    img {
      height: 285px;
      width: 375px;
      margin-top: 15px;
      vertical-align: middle;
      box-shadow: 7px 2px 10px rgba(0, 0, 0, 0.22);
      overflow: hidden;
    }
    }

  @media (min-width: 992px) {
    position: static;
    height: 85%;
    width: 50%;
    border-radius: 8px;
    margin-left: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    .center-container {
      height: 100%;
    }
    h2 {
      margin-top: 10px;
      display: block;
    }
    .mobile-links {
      display: none;
    }
  }
`;

export default Starter;
