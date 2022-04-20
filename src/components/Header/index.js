import React, { useState } from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import{Wrapper, Container, LogoAndLinks, Logo, Nav, StyledBurger, Ul } from "./styled"

const Header = () => {
  const [open, setOpen] = useState(false)
 
  return (
  <Wrapper className="header" >
     <Container>
        <LogoAndLinks>          
           <Logo> 
           <Link to="/">     
           <StaticImage src="../../assets/images/logo.png" alt="" />
           </Link>
           </Logo>
          
           <Nav>
              <StyledBurger open={open} onClick={() =>
                 setOpen(!open)}>
                 <div />
                 <div />
                 <div />
              </StyledBurger>
              <Ul open={open}>
                 <li>
                 <Link to="/">Strona Główna</Link>
                 </li>
                 <li>
               <Link to="/">Czynności Notarialne</Link>
                 </li>
                 <li>
                  <Link to="/contact">Kontakt</Link>
                 </li>                
              </Ul>
           </Nav>
        </LogoAndLinks>
     </Container>
  </Wrapper>
  );
  };
  export default Header; 


