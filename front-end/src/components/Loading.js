import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <div className="loading"></div>
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

  @media (min-width: 992px) {
    position: static;
    height: 85%;
    width: 50%;
    border-radius: 8px;
    margin-left: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default Loading;
