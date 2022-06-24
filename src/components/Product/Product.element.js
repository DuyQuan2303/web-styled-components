import styled from "styled-components";

export const ProductSec = styled.div`
  background: rgb(249, 249, 249);
  padding: 60px 0px;
  overflow: hidden;
`;

export const ProductHeader = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  max-width: 660px;
  width: 100%;
  margin: 0px auto;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 28px;
  -webkit-line-clamp: 3;
`;

export const ProductContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 640px) {
    width: 640px;
  }
  @media screen and (max-width: 768px) {
    width: 768px;
  }
`;
