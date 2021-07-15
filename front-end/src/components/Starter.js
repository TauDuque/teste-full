import React, { useEffect, useContext, useReducer } from "react";
import styled from "styled-components";
import { useLocation } from "react-router";
import { useGlobalContext } from "../context";

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
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--white-smoke);
  position: absolute;
  height: 475px;
  width: 358px;
  top: 45px;
  left: 8px;
  font-family: var(--secondary-font);
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
  }
`;

export default Starter;
