import React from "react";
import {
  ServiceItem,
  ItemTitle,
  ItemDesc,
  ServiceImg,
  ServiceLogo,
  ItemFooter,
} from "./Service.element";

const ServiceProd = ({ toptit, desc, img }) => {
  return (
    <>
      <ServiceItem>
        <ServiceLogo>
          <ServiceImg src={img} />
        </ServiceLogo>
        <ItemTitle>{toptit}</ItemTitle>
        <ItemFooter>
          <ItemDesc>{desc}</ItemDesc>
        </ItemFooter>
      </ServiceItem>
    </>
  );
};

export default ServiceProd;
