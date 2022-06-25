import styled from "styled-components";

export const SmallSec = styled.div`
  color: #fff;
  padding: 60px 0;
  background: rgba(0, 0, 0, 0.3);
  min-height: 420px;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 1;
  position: absolute;
  @media screen and (max-width: 768px){
  background-size: auto;
}
`;

export const SmallSecBg = styled.div`
  background-image: url(${(props) => (props.url ? props.url : "")});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: fit-content;
  min-height: 420px;
  position: relative;

`;

export const TextWrapper = styled.div`
  text-align: center;
  top: 100px;
  z-index: 99;
  color: rgb(255, 255, 255);
  width: 100%;

`;

export const SmallTitle = styled.p`
  font-size: 18px;
  margin-bottom: 16px;
  @media screen and (max-width: 500px){
    font-size: 14px;
      
    }
`;

export const BigTitle = styled.h3`
  font-size: 35px;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
