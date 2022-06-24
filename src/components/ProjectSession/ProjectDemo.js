import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

import React from "react";

const ProjectDemo = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#" className="text-decoration-none item item-active">All</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="text-decoration-none">Graphic Design</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem >
          <BreadcrumbLink href="#" className="text-decoration-none">Web Design</BreadcrumbLink>
        </BreadcrumbItem>
        
        <BreadcrumbItem >
          <BreadcrumbLink href="#" className="text-decoration-none">SEO</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem >
          <BreadcrumbLink href="#" className="text-decoration-none">Marketing</BreadcrumbLink>
        </BreadcrumbItem>

      </Breadcrumb>
    </>
  );    
};

export default ProjectDemo;
