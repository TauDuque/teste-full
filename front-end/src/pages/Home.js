import React, { useEffect, useContext, useReducer } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Home = () => {
  const { showExtra, hideExtra, extra_menus } = useGlobalContext();

  useEffect(() => {
    if (extra_menus) {
      hideExtra();
    }
  }, []);

  return (
    <Wrapper className="section section-center">
      <h2>Bem-Vindo</h2>
      <div>
        <Link to="/starter">
          <button
            onClick={showExtra}
            className="primary-btn primary-btn-2 grow"
          >
            Acessar
          </button>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: absolute;
  top: 60px;
  left: 18px;
  height: 450px;
  background-image: linear-gradient(
    119deg,
    var(--white-smoke) 32%,
    var(--clr-grey) 60%,
    var(--clr-grey-2)
  );
  opacity: 0.94;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-family: var(--primary-font);
    color: var(--classic-black);
    margin-bottom: 100px;
  }
  @media (min-width: 992px) {
    top: 45px;
    left: 200px;
  }
`;

export default Home;
