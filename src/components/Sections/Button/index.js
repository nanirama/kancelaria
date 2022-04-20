import * as React from "react"
import styled from "styled-components"
const Button = (props) => {
    return(
        <StyledButton type={props.type} size={props.size}>{props.children}</StyledButton>
    )
}

export default Button;


const StyledButton = styled.button`
background-color:transparent;
border:none;
a{
  background: ${({ type }) => (type ==='primary' ? "#113D69" : "#F8F6F2")};
  padding: ${({ size }) => (size==='large' ? "1.2rem 4rem" : "1.2rem 2.3rem")};
  box-shadow: inset 0px -6px 8px -3px rgba(0, 0, 0, 0.25);
  color: ${({ type }) => (type ==='primary' ? "#fff" : "#000")};
  border:none;
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  display: inline-block;
  &:hover{
    background: ${({ type }) => (type ==='primary' ? "#DED1BC" : "#DED1BC")};
    color: ${({ type }) => (type ==='primary' ? "#000" : "#000")};  
  }

  @media (max-width: 1150px) {
    padding: ${({ size }) => (size==='large' ? "1.2rem 3rem" : "1.2rem 2rem")};
  }
  @media (max-width: 479px) {
    padding: ${({ size }) => (size==='large' ? "1.2rem 2rem" : "1.2rem 1.8rem")};
    font-size:16px;
  }
}
`;