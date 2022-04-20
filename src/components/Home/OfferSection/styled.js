import styled from "styled-components";

export const OfferContent = styled.div`
padding:60px 0 75px 0;
box-shadow: inset 0px 3px 13px rgba(0, 0, 0, 0.25);
h2{text-align:center;}
@media (max-width: 767px) {
    padding:40px 0;
}
`
export const Container = styled.div`
max-width:1170px;
margin:0 auto;
padding:0 15px;
`
export const Grid = styled.div`
display: grid;
grid-template-columns: 1fr;
gap: 10px 40px;
margin-top:30px;

@media (min-width: 901px) {
   grid-template-columns: 6fr 6fr;
   margin-top:60px;
}
`
export const Item = styled.div`
p{font-size:18px;line-height:29px;}
`
export const Text = styled.div`
`
export const TextBlock = styled.div`
display:flex;
justify-content:space-between;
flex-direction:column;
height:100%;
`
export const BtnOuter = styled.div`
@media (max-width:900px) {
    margin-bottom:30px;
}
`
export const Links = styled.div`
ul{margin:0;padding:0;border-left: 18px solid #F4F0E9;}
ul li{list-style:none;margin:0;}
ul li a{font-weight:400;font-size:17px;line-height:26px;padding:4px 8px;margin:0;display: inline-block; color:#000; position:relative;}
ul li a:hover{ background: #113D69; color:#fff;}
ul li a:hover:before{content:'';position:absolute;top:0;left:-18px; background-color:#113D69; width:18px;height:70px;}

@media (max-width:900px) {
    ul li{ width:100%;}
}
@media (max-width:600px) {
    ul li a{ font-size:16px;line-height:26px;}
}
`
