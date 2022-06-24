import React from "react";
import { Container } from "../../globalStyles";
import ProductSlider from "./ProductSlider";
import { ProductContainer, ProductHeader, ProductSec, TextWrapper } from "./Product.element";

const Product = () => {
  return (
    <>
      <ProductSec>
        <Container>
          <ProductHeader>
            <div>
              <h2
                style={{
                  fontSize: "35px",
                  color: "rgb(0, 0, 0)",
                  marginBottom: "1.5rem",
                  fontWeight: "600",
                }}
              >
                Product
              </h2>
            </div>
            <TextWrapper>
              <p style={{ fontSize: "16px", color: "rgb(76,76,76)" }}>
                We offer a wide range of solutions from native iOS and Android
                applications based on Swift, Objective-C, Kotlin and Java, to
                web apps based on Node.js, React and Ruby on Rails along with
                cross-platform solutions based on Flutter and ReactNative. For
                all these solutions we create beautiful designs, all thanks to
                our quality assurance team. A large part of our work involves
                IoT, including wearables.
              </p>
            </TextWrapper>
          </ProductHeader>
          
            <ProductSlider />
          
        </Container>
      </ProductSec>
    </>
  );
};

export default Product;
