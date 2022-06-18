import styled from "styled-components";

export const ProjectSec = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  flex-direction: column;
  margin: 50px 0;
`;

export const ProjectHeading = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const ProjectTitle = styled.h3`
  font-size: 2.7rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #222222;
  text-align: center;
`;

export const ProjectDesc = styled.span`
  color: rgb(76, 76, 76);
  text-align: center;
`;

export const ProjectHolder = styled.div``;

export const ProjectFilter = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid rgba(237,237,237,0.6); */
  flex-wrap: wrap;
  margin: 20px;
`;

export const ProjectList = styled.li`
  margin: 10px;
  padding: 5px 20px;
  color: #9b9b9b;
  font-size: 1rem;
  letter-spacing: 0.5px;
  font-weight: 400;
  cursor: pointer;
  user-select: none;
  list-style: none;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-areas:
    "one two three three"
    "one four three three"
    "five five six six"
    "five five seven eight";
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, auto);
    grid-template-areas:
      "one one two"
      "one one four"
      "three three three"
      "three three three"
      "five six six"
      "five seven eight";
      /* padding: 0 2rem; */

  }
`;

export const Gridbox = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  overflow: hidden;
  max-width: 100%;
  cursor: pointer;

  &:nth-of-type(1) {
    grid-area: one;
  }
  &:nth-of-type(2) {
    grid-area: two;
  }
  &:nth-of-type(3) {
    grid-area: four;
  }
  &:nth-of-type(4) {
    grid-area: three;
  }
  &:nth-of-type(5) {
    grid-area: five;
  }
  &:nth-of-type(6) {
    grid-area: six;
  }
  &:nth-of-type(7) {
    grid-area: seven;
  }
  &:nth-of-type(8) {
    grid-area: eight;
  }
`;

export const ProjectImg = styled.img`
  transition: 0.4s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`;
