import styled from "styled-components";

export const ContetnBlock = styled.div`
padding:55px 0;
h1{ text-align:center;}
@media (max-width: 767px) {
padding:30px 0 10px 0;
`
export const Container = styled.div`
max-width:930px;
margin:0 auto;
padding:0 15px;
`
export const Grid = styled.div`
display: grid;
grid-template-columns: 1fr;
gap: 10px 30px;
margin-top:80px;

@media (min-width: 1921px) {
max-width:1230px;
margin:80px auto 0 auto;
}
@media (min-width: 992px) {
   grid-template-columns: 6fr 6fr;
   margin-bottom:20px;
   gap: 10px 50px;
}
@media (min-width: 1366px) and  (max-width:1600px)  {
gap: 10px 100px;
}
@media (max-width: 767px) {
    margin-top:30px;
}
`
export const Item = styled.div`
h3 { font-size: 26px; line-height:26px;
    span{
        font-family: 'Jost', sans-serif;
        font-weight:300;
        font-size: 18px;
        line-height: 22px;
    }
    @media (min-width: 992px) and  (max-width:1199px)  {
        font-size: 20px;
    }
    @media (max-width: 767px) {
        font-size: 22px;
        line-height:24px;
    }
}

p{
    margin-bottom:10px;
}
`
export const TextBlock = styled.div`
display:flex;
justify-content:space-between;
flex-direction:column;
height:100%;
@media (max-width: 991px) {
padding:0 15px;
}
`
export const Image = styled.div`
display: flex;
justify-content: start;
.gatsby-image-wrapper{
    width:100%;
}
// @media (min-width: 1601px) {
// img{object-fit: inherit !important;}
// }
@media (max-width: 767px) {
margin-bottom:20px;
}
`
export const Image1 = styled.div`
display: flex;
justify-content: end;
.gatsby-image-wrapper{
    width:100%;
}
// @media (min-width: 1601px) {
// img{object-fit: inherit !important;}
// }
`
export const GridInner = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-gap: 10px 30px;

@media (min-width: 701px) {
   grid-template-columns: 6fr 6fr;
}
@media (max-width: 991px) {
    margin-bottom:30px;
}
`
