import styled from "styled-components";

export const ServiceSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: rgba(0, 0, 0, 0.83);

  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 1;
  @media screen and (max-width: 768px) {
  }
`;

export const ServiceBg = styled.div`
  background-image: url("https://spacefintech.com/images/bgrskill.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  width: 100%;
  height: auto;
`;

export const ServiceTitle = styled.h3`
  /* text-align: center !important; */
  text-align: center;
  margin-bottom: 35px;
  font-weight: 600;
  font-size: 35px;
`;

export const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 25px;
  align-items: center;
  justify-content: center;
`;

export const ServiceBox = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0;
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: 30%;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ServiceLogo = styled.div`
  max-width: 65px;
  width: 100%;
  overflow: hidden;
  margin: 0px auto;
`;
export const ServiceImg = styled.img`
  width: 60px;
  margin-bottom: 25px;
`;

export const ItemTitle = styled.h2`
  font-size: 24px;
`;

export const ItemFooter = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ItemDesc = styled.p`
  font-size: 16px;
`;
