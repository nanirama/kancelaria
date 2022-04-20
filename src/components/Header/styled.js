import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
padding:30px 0 0 0;
`
export const Container = styled.div`
  max-width: 1230px;
  margin: 0 auto;
  padding: 0px 15px;
`
export const LogoAndLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`
export const Logo = styled.div`
  display: grid;
  place-items: center;
  width:254px;
  margin-bottom: -17px;
  z-index: 9999; 
  @media only screen and (max-width:400px) {
    width:200px;
    margin-bottom: -12px;
  }
`
export const Nav = styled.nav`
padding: 0 0px;
display: flex;
justify-content: end;
z-index:999;
`
export const StyledBurger = styled.div`
width: 1.3rem;
height: 1.3rem;
position: fixed;
top:40px;
right: 15px;
z-index: 999;
display: none;
cursor: pointer;
@media (max-width: 991px) {
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
}
div {
  width: 1.4rem;
  height: 0.2rem;
  background-color: ${({ open }) => open ? '#000' : '#000'};
  border-radius: 0px;
  transform-origin: 1px;
  transition: all 0.3s linear;
  &:nth-child(1) {
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
  }
  &:nth-child(2) {
    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
    opacity: ${({ open }) => open ? 0 : 1};
  }
  &:nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
  }
}
`
export const Ul = styled.ul`
list-style: none;
display: flex;
flex-flow: row nowrap;
align-items:center;
margin:0;
@media (max-width: 991px) {
  flex-flow: column nowrap;
  background-color: #fff;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  padding-top: 9rem;
  transition: transform 0.3s ease-in-out;
}
li{
  margin:0 0 0 50px;
  @media (min-width: 992px) and  (max-width:1199px) {
    margin:0 0 0 30px;
  }
  @media only screen and (max-width:991px) {
    margin:0 0 20px 0;
  }
}
li  a{
  font-size: 18px;
  text-align:center;
  background: #DED1BC;
  padding:1.2rem 2rem;
  box-shadow: inset 0px -6px 8px -3px rgba(0, 0, 0, 0.25);
  color:#000;
  width:240px;
  display:inline-block;
  @media (min-width: 992px) and  (max-width:1199px)  {
    width:215px;
    font-size: 16px;
  }
  &:hover{
    background: #113D69;
    color:#fff;
  }
}  
`