import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Home_icn, Menu_icn, SglWorker_icn, Workers_icn } from "../assets";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const IconSideBar = () => {
  const { hideExtra } = useGlobalContext();
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/">
            <img
              onClick={hideExtra}
              className="grow"
              src={Home_icn}
              alt="icon"
            />
          </Link>
        </li>
        <li>
          <Link to="/newworker">
            <img className="grow" src={Menu_icn} alt="icon" />
          </Link>
        </li>
        <li>
          <Link to="/workers">
            <img className="grow" src={Workers_icn} alt="icon" />
          </Link>
        </li>
        <li>
          <Link to="/starter">
            <img className="grow" src={SglWorker_icn} alt="icon" />
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: none;
  @media (min-width: 992px) {
    display: block;
    ul {
      position: absolute;
      right: 30px;
      top: 100px;
    }

    li {
      margin: 25px;
    }
  }
`;

export default IconSideBar;
