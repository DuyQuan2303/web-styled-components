import React from "react";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
  homeObjSix,
  homeObjSeven,
  homeObjEight,
  sQ,
} from "./Data";
import { InfoSection } from "../../components";
import Service from "../../components/Service/Service";
import SQ from "../../components/SkillQualities/SQ";

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjFive} />
      <InfoSection {...homeObjSix} />
      <InfoSection {...homeObjSeven} />
      <InfoSection {...homeObjEight} />
      <Service />
      <SQ {...sQ} />
    </>
  );
}

export default Home;
