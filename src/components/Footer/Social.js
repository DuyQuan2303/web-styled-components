import React from "react";
import { Container } from "../../globalStyles";
import {
  SocialFilter,
  SocialItems,
  SocialList,
  SocialSec,
} from "./Footer.element";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInvision,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
const Social = () => {
  return (
    <>
      <SocialSec>
        <Container>
          <SocialList>
            <SocialFilter>
              <SocialItems className="wow fadeInDown">
                <i>
                  <FaFacebookF />
                </i>
              </SocialItems>
            </SocialFilter>
            <SocialFilter>
              <SocialItems className="wow fadeInUp">
                <i>
                  <FaTwitter />
                </i>
              </SocialItems>
            </SocialFilter>
            <SocialFilter>
              <SocialItems className="wow fadeInDown">
                <i>
                  <FaGooglePlusG />
                </i>
              </SocialItems>
            </SocialFilter>
            <SocialFilter>
              <SocialItems className="wow fadeInUp">
                <i>
                  <FaInvision />
                </i>
              </SocialItems>
            </SocialFilter>
            <SocialFilter>
              <SocialItems className="wow fadeInDown">
                <i>
                  <FaInstagram />
                </i>
              </SocialItems>
            </SocialFilter>
            <SocialFilter>
              <SocialItems className="wow fadeInUp">
                <i>
                  <FaEnvelope />
                </i>
              </SocialItems>
            </SocialFilter>
          </SocialList>
<p style={{color: 'rgb(76, 76, 76)', textAlign: 'center'}}>© 2020 By SpaceFinanceTech</p>

        </Container>
      </SocialSec>
    </>
  );
};

export default Social;
