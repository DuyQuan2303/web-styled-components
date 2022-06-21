import React from "react";
import {
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
  homeObjSix,
  homeObjSeven,
  homeObjEight,
  sQ,
  smallSecBg,
  creativeTech,
  smallSecBg2,
  homeObjOne,
  projectImg,
  homeObjNine,
  homeObjTen,
  webLogo,
} from "./Data";
import { InfoSection, Navbar } from "../../components";
import Service from "../../components/Service/Service";
import SQ from "../../components/SkillQualities/SQ";
import SmallSection from "../../components/SmallSection/SmallSection";
import CreativeSection from "../../components/CreativeSection/CreativeSection";
import Project from "../../components/ProjectSession/Project";
import Slider from "../../components/Slider/Slider";
import Images from "../../components/Slider/images";
import Footer from "../../components/Footer/Footer";
import Product from "../../components/Product/Product";
function Home() {
  return (
    <>
      <Navbar {...webLogo} />
      <Slider images={Images} {...homeObjOne} />
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
      <CreativeSection {...creativeTech} />
      <Project {...projectImg} />
      <SmallSection {...smallSecBg2} />
      <Product/>
      <InfoSection {...homeObjNine} />
      <InfoSection {...homeObjTen} />
      <Footer />
    </>
  );
}

export default Home;
