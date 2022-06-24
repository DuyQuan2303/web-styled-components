import styled from "styled-components";

export const BussinessSec = styled.div`
  color: #fff;
  padding: 50px 0;
`;

export const BussinessRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
`;

export const BussinessColumn = styled.div`
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
    flex-direction: column;
    justify-content: center;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  min-height: 280px;
  overflow: hidden;
`;

export const Rarebox = styled.div`
  height: 70%;
  width: 94%;
  background-color: rgb(36, 193, 221);
  position: absolute;
  z-index: 1;
`;

export const ImageHolder = styled.div`
  position: absolute;
  z-index: 3;
  top: 20px;
  left: 20px;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 15px;
  overflow-y: hidden;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    text-align: center;
  }
`;

export const Title = styled.h3`
  color: #000;
  max-width: 820px;
  width: 100%;
  margin: 0px auto;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  font-size: 35px;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const GreenTitle = styled.span`
  color: rgb(102, 201, 4);
  display: inline-block;
  margin-right: 6px;
`;

export const ContentHolder = styled.div`
  max-width: 820px;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px !important;
`;

export const Content = styled.p`
  max-width: 820px;
  text-align: justify;
  color: rgb(76, 76, 76);
  margin: 0px;
`;
