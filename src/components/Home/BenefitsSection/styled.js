import styled from "styled-components";


export const BenefitBlock = styled.div`
padding:80px 0 0 0;
@media (max-width: 767px) {
    padding:50px 0 0 0;
}
`
export const Container = styled.div`
max-width:1230px;
margin:0 auto;
padding:0 15px;
`
export const Grid = styled.div`
display: grid;
grid-template-columns: 1fr;
gap: 10px 30px;
@media (min-width: 992px) {
   grid-template-columns: repeat(4, 1fr);
}
@media (min-width: 600px) and  (max-width:991px)  {
    grid-template-columns: repeat(2, 1fr);
}
`
export const Item = styled.div`
`
export const TitleBlk = styled.div`
display:flex;
margin-bottom:17px;
h4{
    display: flex;
justify-content: center;
align-items: center;
margin:0;
padding-left:14px;
}
`
export const Icon = styled.div`
width: 64px;
height: 64px;
background: #DED1BC;
display: flex;
justify-content: center;
align-items: center;
&:hover{
    background: #113D69;
}
`
export const BtnOuter = styled.div`
text-align: center;
margin-top:60px;
@media (max-width: 767px) {
    margin-top:20px;
}
`
