import styled from "styled-components";

export const SliderSec = styled.div `
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    
  `
  
  export const SliderContent = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    @media screen and (max-width: 768px){
      width: 100vw;
      justify-content: center;
    }
    @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .fadeIn {
    animation: fadeIn 0.5s;
  }
    `
  
  
  export const SliderFeature = styled.div`
    text-align: center;`
  
  
  export const FeatureTitle = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;`
  
  
  export const FeatureText = styled.p`
    font-size: 1rem;
    color: #fff;
    margin: 1rem 0;`
  
  
export const SliderButton = styled.button`
    background: transparent;
    border: none;
    outline: none;
    font-size: 4rem;
    color: #eee;
    padding: 0 1rem;
    cursor: pointer;
    transition: transform 0.1s ease-in-out;
    
    &:hover{
      transform: scale(0.95);
    }

    `
  
  
  
  
  
  