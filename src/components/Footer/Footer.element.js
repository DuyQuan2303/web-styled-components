import styled from "styled-components";

export const FooterSec = styled.div`
  background: rgb(249, 249, 249);
  padding: 60px 0px;
`;

export const FooterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const FooterColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const SocialSec = styled.footer`
  position: relative;
  padding: 7.5rem 0px;
  overflow: hidden;
  background-color: rgb(34, 45, 56);
`;

export const SocialList = styled.ul`
  display: flex;
  width: 100%;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 15px 0px;
`;

export const SocialFilter = styled.li`
  list-style: none;
  padding: 0 15px;
`;
export const SocialItems = styled.a`
  font-weight: bold;
  color: #fff;
    display: block;
    width: 45px;
    height: 45px;
    text-align: center;
    line-height: 45px;
    border-radius: 50px;
    font-size: 17px;
    border: 1px solid transparent;
    transition: background-color 0.2s ease-in-out 0s;
  &:hover {
    background: rgb(66, 103, 178) !important;
    color: rgb(255, 255, 255) !important;
    border: 1px solid rgb(66, 103, 178) !important;
  }
`;
