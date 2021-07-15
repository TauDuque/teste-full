import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { Home_icn, Menu_icn, SglWorker_icn, Workers_icn } from "../assets";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const MobileLinks = () => {
  const { hideExtra } = useGlobalContext();
  return (
    <Wrapper>
      <div className="mobile-links">
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
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default MobileLinks;
