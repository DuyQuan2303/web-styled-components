import React, { Component } from "react";
import {
  Content,
  ContentHolder,
  Desc,
  Img,
  ISColumn,
  ISRow,
  ISSec,
  ItemBox,
  ItemColumn,
  ItemDesc,
  ItemImg,
  ItemRow,
  ItemTitle,
  Line,
  TextWrapper,
  Title,
  TitleWrapper,
  TopLine,
} from "./IndustrySolution.element";
import "bootstrap/dist/css/bootstrap.min.css";

import WOW from "wowjs";
import { Container } from "react-bootstrap";
export default class IndustrySolution extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }
  render() {
    return (
      <>
        <ISSec>
          <Container>
            <ISRow>
              {/* Column left */}
              <ISColumn className="wow fadeInLeftBig">
                <TextWrapper>
                  <TitleWrapper>
                    <Title>Industry Solutions</Title>
                  </TitleWrapper>
                  <Line />
                  <ContentHolder>
                    <Content>
                      Bring your ideas for mobile applications, web services or
                      more complex solutions to life with us. Work with a team
                      of the best developers equipped with the best tools and
                      technologies. Be it JavaScript, PHP, Python, Java, Kotlin,
                      Objective-C, or Swift we have the skills that you need.
                    </Content>
                  </ContentHolder>
                  <ContentHolder>
                    <Content>
                      Find out how SpaceFintech’s products and solutions are
                      helping enterprises benefit from blockchain technology
                      across these major industries.
                    </Content>
                  </ContentHolder>
                </TextWrapper>
              </ISColumn>
              {/* Column right */}
              <ISColumn className="wow fadeInRightBig">
                <ItemRow>
                  <ItemColumn>
                    <ItemBox>
                      <ItemImg>
                        <Img src="https://spacefintech.com/images/icon-03.png"/>
                      </ItemImg>
                      <ItemTitle>
                        <TopLine>App Insights</TopLine>
                      </ItemTitle>
                      <ItemDesc>
                        <Desc>
                          A comprehensive destination for in-depth evaluation of
                          mobile applications.
                        </Desc>
                      </ItemDesc>
                    </ItemBox>
                  </ItemColumn>
                  <ItemColumn>
                    <ItemBox>
                      <ItemImg>
                        <Img src="https://spacefintech.com/images/icon-01.png"/>
                      </ItemImg>
                      <ItemTitle>
                        <TopLine>Reports</TopLine>
                      </ItemTitle>
                      <ItemDesc>
                        <Desc>
                        A platform where you can find the foremost tech solution providers for your app business.
                        </Desc>
                      </ItemDesc>
                    </ItemBox>
                  </ItemColumn>
                  <ItemColumn>
                    <ItemBox>
                      <ItemImg>
                        <Img src="https://spacefintech.com/images/icon-02.png"/>
                      </ItemImg>
                      <ItemTitle>
                        <TopLine>Inspiration</TopLine>
                      </ItemTitle>
                      <ItemDesc>
                        <Desc>
                        A digital daily which serves as an extensive guide and a 'how-to' handbook for all technologists, app agencies, analysts and blockchain experts.
                        </Desc>
                      </ItemDesc>
                    </ItemBox>
                  </ItemColumn>
                </ItemRow>
              </ISColumn>
            </ISRow>
          </Container>
        </ISSec>
      </>
    );
  }
}
