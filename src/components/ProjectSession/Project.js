import React  from "react";
import {
  Gridbox,
  ProjectDesc,
  ProjectFilter,
  ProjectGrid,
  ProjectHeading,
  ProjectHolder,
  ProjectImg,
  ProjectSec,
  ProjectTitle,
} from "./Project.element";
import { TabPanel, useTabs } from "react-headless-tabs";
import TabSelector from "./TabSelector";

const Project = ({ img1, img2, img3, img4, img5, img6, img7, img8 }) => {
  const [selectedTab, setSelectedTab] = useTabs([
    "account",
    "company",
    "team",
    "billing",
  ]);

  return (
    <>
      <ProjectSec>
        <ProjectHeading>
          <ProjectTitle>Recent Project</ProjectTitle>
          <ProjectDesc>Project overview, technology products.</ProjectDesc>
        </ProjectHeading>
        <ProjectHolder>
          <ProjectFilter>
            <nav className="d-flex p-3">
              <TabSelector
                style
                isActive={selectedTab === "account"}
                onClick={() => setSelectedTab("account")}
              >
                All
              </TabSelector>
              <TabSelector
                isActive={selectedTab === "company"}
                onClick={() => setSelectedTab("company")}
              >
                Graphic
              </TabSelector>
              <TabSelector
                isActive={selectedTab === "team"}
                onClick={() => setSelectedTab("team")}
              >
                SEO
              </TabSelector>
              <TabSelector
                isActive={selectedTab === "billing"}
                onClick={() => setSelectedTab("billing")}
              >
                Web
              </TabSelector>
            </nav>
          </ProjectFilter>
        </ProjectHolder>
        <TabPanel hidden={selectedTab !== "account"}>
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
        </TabPanel>
        <TabPanel hidden={selectedTab !== "company"}>
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
          </ProjectGrid>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "team"}>
          <ProjectGrid>
            <Gridbox>
              <ProjectImg src={img5} />
            </Gridbox>
            <Gridbox>
              <ProjectImg src={img6} />
            </Gridbox>
            <Gridbox>
              <ProjectImg src={img7} />
            </Gridbox> 
           
          </ProjectGrid>
        </TabPanel>

        <TabPanel hidden={selectedTab !== "billing"}>
          <ProjectGrid>
          <Gridbox>
              <ProjectImg src={img4} />
            </Gridbox>
            <Gridbox>
              <ProjectImg src={img5} />
            </Gridbox>
            <Gridbox>
              <ProjectImg src={img6} />
            </Gridbox>
            </ProjectGrid>
        </TabPanel>
      </ProjectSec>
    </>
  );
};

export default Project;
