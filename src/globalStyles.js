import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
      position: relative;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Noto Sans', sans-serif;
        .mainContainer{
          overflow-x: hidden;
        }
    }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 50px;
  display: inline-block;
  line-height: 25px;
  font-weight: 600;
  position: relative;
  text-align: center;
  transition: all 0.5s ease 0s;
  font-size: 14px;
  background: rgb(255, 255, 255);
  color: rgb(34, 45, 56);
  border: 1px solid;
  z-index: 1;
  padding: 9px 34px !important;
  cursor: pointer;
  opacity: ${({ opacity }) => (opacity ? "1" : "0")};
  &:hover {
    color: rgb(255, 255, 255);
    text-decoration: none;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    background: rgb(102, 201, 4);
    z-index: -1;
    inset: 0px;
    border-radius: 38px;
    transform: scaleX(0);
    transform-origin: 50% center;
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  &:hover::before {
    transform: scaleX(1);
    border-color: rgb(102, 201, 4);
  }

  /* @media screen and (max-width: 960px) {
    width: 100%;
  } */
`;

export const SButton = styled.div`
  position: fixed;
  width: 100%;
  left: 95%;
  bottom: 50px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: #0056b3;
  @media screen and (max-width: 768px) {
    left: 80%;
    bottom: 40px;
  }
`;

export default GlobalStyle;
