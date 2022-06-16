import React from "react";
import { Container } from "../../globalStyles";
import {
  designChart,
  marketingChart,
  developerChart,
  blockchainChart,
  seoChart,
} from "../../pages/HomePage/Data";
import Chart from "./Chart";
import {
  Img,
  ImgWrapper,
  SkillChart,
  SQColumn,
  SQRow,
  SQSec,
  SQTitle,
} from "./SQ.element";
const SQ = ({ img, alt }) => {
  return (
    <>
      <SQSec>
        <Container>
          <SQTitle>Our Skills And Qualities</SQTitle>
          <SQRow>
            <SQColumn>
              <ImgWrapper>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </SQColumn>
            <SQColumn>
              <SkillChart>
                <Chart {...designChart} />
                <Chart {...marketingChart} />
                <Chart {...developerChart} />
                <Chart {...blockchainChart} />
                <Chart {...seoChart} />
              </SkillChart>
            </SQColumn>
          </SQRow>
        </Container>
      </SQSec>
    </>
  );
};

export default SQ;
