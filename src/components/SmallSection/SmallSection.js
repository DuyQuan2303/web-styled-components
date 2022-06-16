import React from "react";
import { Button, Container } from "../../globalStyles";
import {
  BigTitle,
  SmallSec,
  SmallSecBg,
  SmallTitle,
  TextWrapper,
} from "./SmallSection.element";

const SmallSection = ({
  url,
  smallTitle,
  bigTitle,
  primary,
  buttonLabel,
  opacity,
}) => {
  return (
    <>
      <SmallSecBg url={url}>
        <SmallSec>
          <Container>
            <TextWrapper>
              <SmallTitle>{smallTitle}</SmallTitle>
              <BigTitle>{bigTitle}</BigTitle>
              <Button big fontBig primary={primary} opacity={opacity}>
                {buttonLabel}
              </Button>
            </TextWrapper>
          </Container>
        </SmallSec>
      </SmallSecBg>
    </>
  );
};

export default SmallSection;
