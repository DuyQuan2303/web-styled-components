import styled from "styled-components";

export const SQSec = styled.div`
  color: #000;
  padding: 60px 0;
`;
export const SQTitle = styled.h1`
  font-size: 30px;
  text-align: center;
`;
export const SQRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;

export const SQColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: flex-start;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  height: 100%;
`;

export const SkillChart = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    text-align: center;
    width: 100%;
  }
`;

export const ChartHolder = styled.div`
  margin: 25px 0;
`;

export const ChartTitle = styled.p`
  font-size: 16px;
  text-align: left;
  padding: 10px 0;
  font-weight: 500;
`;

export const LineChart = styled.div`
  height: 1rem;
  width: 100%;
  margin: 0 auto 10px;
  line-height: 25px;
  font-size: 14px;
  border-radius: 0.25rem;
  overflow: hidden;
  padding: 0 0 0 10px;
  position: relative;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  &::before {
    content: "";
    width: 100%;
    position: absolute;
    left: 0;
    height: 25px;
    top: 0;
    z-index: -2;
    background: #d2d6d7;
  }
  &::after {
    content: "";
    background: ${(props) => (props.color ? props.color : "black")};
    height: 25px;
    transition: 0.8s;
    display: block;
    animation: animate 1 2s;
    width: ${(props) => (props.percentage ? props.percentage : "0%")};
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.7s ease 0s;
  }
  @keyframes animate {
    0% {
      width: 0%;
    }
    100% {
      width: ${(props) => (props.percentage ? props.percentage : "0%")};
    }
  }
`;
