import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";
import {
  serObjFive,
  serObjFour,
  serObjOne,
  serObjThree,
  serObjTwo,
} from "../../pages/HomePage/Data";
import {
  ServiceBg,
  ServiceBox,
  ServiceSec,
  ServiceTitle,
} from "./Service.element";
import ServiceProd from "./ServiceItem";
const Service = () => {
  return (
    <>
      <ServiceBg>
        <ServiceSec>
          <Container>
            <ServiceTitle>Our Service</ServiceTitle>
            <ServiceBox>
              <ServiceProd {...serObjOne} />
              <ServiceProd {...serObjTwo} />
            </ServiceBox>
            <ServiceBox>
              <ServiceProd {...serObjThree} />
              <ServiceProd {...serObjFour} />
              <ServiceProd {...serObjFive} />
            </ServiceBox>
          </Container>
        </ServiceSec>
      </ServiceBg>
    </>
  );
};

export default Service;
