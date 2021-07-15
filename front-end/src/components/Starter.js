import React, { useEffect, useContext, useReducer } from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { MobileLinks } from "../components";
import Slider from "./Slider";

const Starter = () => {
  const location = useLocation();
  const { hideExtra, showExtra } = useGlobalContext();
  function menuHelper() {
    if (location.pathname === "/starter") {
      showExtra();
    } else {
      hideExtra();
    }
  }

  useEffect(() => {
    menuHelper();
  }, []);

  return (
    <Wrapper>
      <h2>
        Utilize os menus laterais <br /> para a navegação...
      </h2>
      <div>
        <Slider />
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
    h2 {
      display: block;
    }
    .mobile-links {
      display: none;
    }
  }
`;

export default Starter;
