import React from "react";
import { Container } from "../../globalStyles";
import { FooterColumn, FooterRow, FooterSec, SocialSec } from "./Footer.element";
import { MapContainer } from "./Map";
import Social from "./Social";
const Footer = () => {
  return (
    <>
      <FooterSec>
        <Container>
          <FooterRow>
            <FooterColumn>
              <p style={{ maxWidth: "180px" }}>
                <img
                  src="https://spacefintech.com/images/logofintech.png"
                  alt=""
                  style={{ height: "auto", width: "100%" }}
                />
              </p>
              <p
                style={{
                  color: "rgb(76, 76, 76)",
                  fontSize: "16px",
                  marginBottom: "0px",
                }}
              >
                <strong>OFFICE - SINGAPORE:</strong>
                <br />
                Address: Centennial Tower, Levels 21 and 34, 3 Temasek Avenue,
                Singapore, 39190
              </p>
              <p
                style={{
                  color: "rgb(76, 76, 76)",
                  fontSize: "16px",
                  marginBottom: "0px",
                }}
              >
                <strong>OFFICE - VIETNAM:</strong>
                <br />
                Address: 89 Street 01,City Center Hill,Ward 7, District Go Vap,
                Ho Chi Minh, Viet Nam
              </p>
              <a
                href="mailto:contact@spacefintech.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <strong style={{ color: "rgb(76, 76, 76)" }}>Mail:</strong>
                <img
                  src="https://spacefintech.com/images/gmail-03.png"
                  alt=""
                  style={{
                    maxWidth: "20px",
                    height: "10px",
                    margin: "0px 5px",
                  }}
                />
                contact@spacefintech.com
              </a>
              <p>Mon-Sat: 8am30 to 6pm</p>
            </FooterColumn>
            <FooterColumn>
              <MapContainer/>
            </FooterColumn>
          </FooterRow>
        </Container>
        
      </FooterSec>
    <Social/>
    </>
  );
};

export default Footer;
