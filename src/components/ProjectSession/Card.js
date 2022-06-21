import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Card } from "react-bootstrap";
export const ProductCard = (props) => {
  const { imgSrc, title } = props.data;
  return (
    <Card className="p-0 overflow-hidden h-100 border-0 ">
      <div className="overflow-hidden p-0 ">
        <Card.Img  src={imgSrc}  />
      </div>
    </Card>
  );
};

