import React from "react";
import { Container } from "../../globalStyles";
import { FaPlay } from "react-icons/fa";
import {
  Content,
  CreativeColumn,
  CreativeContent,
  CreativeRight,
  CreativeRow,
  CreativeSec,
  CreativeTitle,
  Holder,
  Img,
  ImgHolder,
  ImgWrapper,
  Cont,
  PlayButton,
} from "./CreativeSection.element";

const CreativeSection = ({ src }) => {
  return (
    <>
      <CreativeSec>
        <Cont>
          <CreativeRow>
            <CreativeColumn>
              <CreativeRight>
                <CreativeContent>
                  <CreativeTitle>A Creative Design Agency.</CreativeTitle>
                </CreativeContent>
                <Holder>
                  <Content>
                    Building a brand doesn’t happen overnight. It takes a lot of
                    work to forge strong relationships with people—and much of
                    that work is done through marketing. Unless you have a
                    powerhouse internal team to help you tell your story, it’s
                    likely you’ll need a little support in crafting and
                    executing your marketing strategy. But searching for the
                    right partner to help you do that can be confusing. There
                    are all sorts of agencies out there, so how do you know
                    whether you should hire a creative agency, a digital agency,
                    or an ad agency? Here, we’ll break down everything you need
                    to know about creative agencies, helping you understand what
                    they are, why they’re different, and how to find one.{" "}
                  </Content>
                </Holder>
                <PlayButton>
                  <FaPlay />
                </PlayButton>
              </CreativeRight>
            </CreativeColumn>
            <CreativeColumn>
              <ImgWrapper>
                <ImgHolder>
                  <Img src={src} />
                </ImgHolder>
              </ImgWrapper>
            </CreativeColumn>
          </CreativeRow>
        </Cont>
      </CreativeSec>
    </>
  );
};

export default CreativeSection;
