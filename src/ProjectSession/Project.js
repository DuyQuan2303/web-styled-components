import React from "react";
import {
  Gridbox,
  ProjectDesc,
  ProjectFilter,
  ProjectGrid,
  ProjectHeading,
  ProjectHolder,
  ProjectImg,
  ProjectList,
  ProjectSec,
  ProjectTitle,
} from "./Project.element";

const Project = ({ img1, img2, img3, img4, img5, img6, img7, img8 }) => {
  return (
    <>
      <ProjectSec>
        <ProjectHeading>
          <ProjectTitle>Recent Project</ProjectTitle>
          <ProjectDesc>Project overview, technology products.</ProjectDesc>
        </ProjectHeading>
        <ProjectHolder>
          <ProjectFilter>
            <ProjectList>All</ProjectList>
            <ProjectList>Graphic Design</ProjectList>
            <ProjectList>Web Design</ProjectList>
            <ProjectList>SEO</ProjectList>
            <ProjectList>Marketing</ProjectList>
          </ProjectFilter>
        </ProjectHolder>
        <ProjectGrid>
          <Gridbox>
            <ProjectImg src={img1} />
          </Gridbox>
          <Gridbox>
            <ProjectImg src={img2} />
          </Gridbox>
          <Gridbox>
            <ProjectImg src={img3} />
          </Gridbox>
          <Gridbox>
            <ProjectImg src={img4} />
          </Gridbox>
          <Gridbox>
            <ProjectImg src={img5} />
          </Gridbox>
          <Gridbox>
            <ProjectImg src={img6} />
          </Gridbox>
          <Gridbox>
            <ProjectImg src={img7} />
          </Gridbox>
          <Gridbox>
            <ProjectImg src={img8} />
          </Gridbox>
        </ProjectGrid>
      </ProjectSec>
    </>
  );
};

export default Project;
