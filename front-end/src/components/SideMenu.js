import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Menu_icn } from "../assets";
import { useGlobalContext } from "../context";

const SideMenu = () => {
  const { hideExtra } = useGlobalContext();
  return (
    <Wrapper>
      <div className="icon-img">
        <img src={Menu_icn} alt="icon" />
      </div>
      <ul>
        <Link to="/newworker" className="grow">
          <li>Cadastrar Novo Funcionário</li>
        </Link>
        <Link to="/workers" className="grow">
          <li>Visualizar Cadastros</li>
        </Link>
        {/* <Link to={`/workers/${id}`} className="grow">
          <li>Visualizar Último Cadastro</li>
        </Link> */}
        <Link to="/" onClick={hideExtra} className="grow">
          <li>Sair</li>
        </Link>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 520px;
  min-width: 300px;
  background-image: linear-gradient(
    289deg,
    var(--white-smoke) 32%,
    var(--clr-grey) 60%,
    var(--clr-grey-2)
  );
  border-radius: 8px;
  box-shadow: 0 7px 19px rgba(255, 166, 61, 0.35),
    0 14px 35px rgba(255, 61, 119, 0.14), 10px 6px 28px rgba(51, 138, 255, 0.15);
  padding-top: 40px;
  margin-left: 15px;
  a {
    color: var(--classic-black);
  }
  display: flex;
  flex-direction: column;

  .icon-img {
    display: flex;
    justify-content: center;
  }
  ul {
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    line-height: 40px;
  }

  ul li {
    cursor: pointer;
  }

  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;

  @media (max-width: 992px) {
    display: none;
  }
`;

export default SideMenu;
