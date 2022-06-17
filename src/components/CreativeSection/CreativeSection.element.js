import styled from "styled-components";

export const CreativeSec = styled.div`
  overflow: hidden;
  margin: 60px 0px;
`;
export const Cont = styled.div`
  width: 100%;
`;
export const CreativeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const CreativeColumn = styled.div`
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

export const CreativeRight = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  background-color: rgb(36, 193, 221);
  margin: 0px;
  @media screen and (max-width: 768px) {
    margin: 0 -15px;
  }
`;

export const CreativeContent = styled.div`
  padding: 10px 16px;
`;

export const CreativeTitle = styled.h2`
  font-weight: 600;
  font-size: 35px;
  color: rgb(255, 255, 255);
  margin-bottom: 32px;
`;
export const Holder = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0px 0px 40px auto;
  padding: 0 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;

export const Content = styled.p`
  color: rgb(255, 255, 255);
  font-size: 16px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
  overflow: hidden;
`;

export const ImgHolder = styled.div`
  transition: all 0.5s ease 0s;
  overflow: hidden;
  &:hover {
    transition: all 0.5s ease 0s;
    transform: scale(1.4);
  }
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

export const PlayButton = styled.button`
  height: 70px;
  background: rgb(255, 255, 255);
  display: inline-block;
  z-index: 9;
  top: 50%;
  right: -5% !important;
  transform: translateY(-50%);
  right: 0px;
  position: absolute;
  border: none;
  border-radius: 50px;
  line-height: 68px;
  text-align: center;
  color: black;
  width: 70px !important;
  cursor: pointer;
  &:hover {
    color: red;
    transition: all 0.5s ease 0.2s;
  }

  @media screen and (max-width: 768px) {
    /* bottom: 70%; */
    top: 80%;
    left: 50%;
    transform: translateX(-50%);
  }
`;
