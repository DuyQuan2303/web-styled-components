import React from "react";
import {
  homeObjThree,
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
  business,
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
import "bootstrap/dist/css/bootstrap.min.css";

import WOW from "wowjs";
import IndustrySolution from "../../components/IndustrySolution/IndustrySolution";
import Bussiness from "../../components/Bussiness/Bussiness";
class Home extends React.Component {
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }
  render() {
    return (
      <>
        <Navbar {...webLogo} />
        <Slider images={Images} {...homeObjOne} />
        <InfoSection {...homeObjThree} />
        <IndustrySolution />
        <Bussiness {...business} />
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
        <Product />
        <InfoSection {...homeObjNine} />
        <InfoSection {...homeObjTen} />
        <Footer />
      </>
    );
  }
}

export default Home;

