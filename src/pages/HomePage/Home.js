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
  smallSecBg,
} from "./Data";
import { InfoSection, Navbar } from "../../components";
import Service from "../../components/Service/Service";
import SQ from "../../components/SkillQualities/SQ";
import SmallSection from "../../components/SmallSection/SmallSection";
import CreativeSection from "../../components/CreativeSection/CreativeSection";

function Home() {
  return (
    <>
    <Navbar/>
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
      <SmallSection {...smallSecBg} />
      <CreativeSection/>
    </>
  );
}

export default Home;
