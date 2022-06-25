import styled from "styled-components";

export const ISSec = styled.div`
  color: #fff;
  padding: 50px 0;
  background: #101522;
`;

export const ISRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
`;

export const ISColumn = styled.div`
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

export const TextWrapper = styled.div``;
export const TitleWrapper = styled.div`
padding: 10px 0;
  -webkit-line-clamp: 2;
  position: relative;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 48px ;
  font-weight: 600;
  @media screen and (max-width: 768px) {
  text-align: left;
  font-size: 35px ;
  margin: 0 20px;

  }
`;

export const Line = styled.span`
  position: absolute;
  width: 100%;
  margin: 5px 0;
  &::after {
    content: "";
    position: absolute;
    width: 40%;
    height: 2px;
    background-color: rgb(102, 201, 4);
    top: 98%;
    left: 0px;
  }
  @media screen and (max-width: 768px) {
    &::after {
      content: "";
      position: absolute;
      width: 30%;
      height: 2px;
      background-color: rgb(102, 201, 4);
      top: 98%;
      left: 5.5%;
    }
  }
`;

export const ContentHolder = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0px auto;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin: 10px 0;
`;

export const Content = styled.p`
  color: #fff;
  padding-top: 15px;
  text-align: left;
  padding-bottom: 0px !important;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    text-align: left;
    margin: 0 20px;
  }
  @media screen and (max-width: 500px) {
    font-size: 14px;
    text-align: left;
    margin: 0 20px;
  }
`;

export const ItemRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    padding: 15px 0;
    flex-direction: column;
    flex-wrap: unset;
    gap: 15px;
  }
`;

export const ItemColumn = styled.div`
  flex: 0 0 33.333333%;
  max-width: 33.33333%;
  padding: 0 15px;
  @media screen and (max-width: 500px) {
    max-width: 100%;
  }
`;

export const ItemBox = styled.div`
  cursor: pointer;
  transition: all 1s ease 0s;
`;
export const ItemImg = styled.div`
  max-width: 40px;
  width: 100%;
  overflow: hidden;
  margin: 0px auto;
  height: 55px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;

export const Img = styled.img`
  height: auto;
  max-width: 100%;
`;

export const ItemTitle = styled.div`
  margin-top: 15px;
`;

export const TopLine = styled.h3`
  text-align: center;
  font: 30px "Noto Sans" sans-serif;
`;

export const ItemDesc = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0px auto;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  @media screen and (max-width: 768px) {
    -webkit-line-clamp: 2;
  }
  @media screen and (max-width: 500px) {
    -webkit-line-clamp: 2;
    width: 200px;
  }
`;

export const Desc = styled.p`
  color: #fff;
  align-items: center;
  padding-bottom: 0;
  text-align: center;
  
`;
