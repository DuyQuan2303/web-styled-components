import React from "react";
import { Container } from "react-bootstrap";
import { Button } from "../../globalStyles";
import {
  BussinessColumn,
  BussinessRow,
  BussinessSec,
  Content,
  ContentHolder,
  GreenTitle,
  Image,
  ImageHolder,
  ImageWrapper,
  Rarebox,
  TextWrapper,
  Title,
} from "./Bussiness.element";

const Bussiness = ({opacity,buttonLabel}) => {
  return (
    <>
      <BussinessSec>
        <Container>
          <BussinessRow>
            {/*------------------------- Left Column---------------------------------------------- */}
            <BussinessColumn className="wow fadeInLeftBig" data-wow-offset="10">
              <ImageWrapper>
                <Rarebox />
                <ImageHolder>
                  <Image src="https://spacefintech.com/images/business.jpg" />
                </ImageHolder>
              </ImageWrapper>
            </BussinessColumn>
            {/*----------------------- Right Column ----------------------------------------- */}
            <BussinessColumn className="wow fadeInUp" data-wow-offset="10">
              <TextWrapper>
                <Title>
                  We are <GreenTitle>making business</GreenTitle>better for
                  everyone
                </Title>
                <ContentHolder>
                  <Content>
                    Fintech or Financial technology translates the potential of
                    data to be monetized. We provide comprehensive consulting
                    services, financial services software engineering together
                    with the key technology acceleration solutions to gear up
                    for fintech software development consumer-oriented services
                    in different industry sectors.
                  </Content>
                </ContentHolder>
                <ContentHolder>
                  <Content>
                    From ideation to POC, to deployment, to all-inclusive
                    support, our professionals harness innovation and deliver an
                    end-to-end experience that includes strategy, architecture,
                    customer experience, service management - all within a new
                    fintech ecosystem. Actualize innovations with the right tech
                    partner.
                  </Content>
                </ContentHolder>
              <Button opacity={opacity} >{buttonLabel}</Button>

              </TextWrapper>
            </BussinessColumn>
          </BussinessRow>
        </Container>
      </BussinessSec>
    </>
  );
};

export default Bussiness;
