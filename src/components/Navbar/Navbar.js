import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Navbar.element";

import { MyContext } from "../Slider/hooks/bgColor";
import { useContext } from "react";
const Navbar = ({ img }) => {
  const [click, setClick] = useState(false);
  const { bgColorGlobal, setBgColorGlobal } = useContext(MyContext);

  console.log(bgColorGlobal, setBgColorGlobal);
  const handleClick = () => setClick(!click);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setBgColorGlobal(true);
    } else {
      setBgColorGlobal(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav bg={bgColorGlobal ? "#101522" : "transparent"}>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon src={img} />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">Academy</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">Service</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">Product</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">Blog</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
