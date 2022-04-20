import styled from "styled-components";


export const OfficeBlock = styled.div`
`
export const Grid = styled.div`
display: grid;
grid-template-columns: 1fr;
gap: 0px 0px;
height:100%;
@media (min-width: 992px) {
   grid-template-columns: 4fr 8fr;
}
`
export const Item = styled.div`
.gatsby-image-wrapper, img{
    width:100%;
    height:100%;
}
`
export const ContactBLock = styled.div`
background: #DED1BC;
padding:55px 110px 55px 55px;
height:100%;
h2{ font-size: 36px;line-height: 49px;}

p:nth-child(4){margin-bottom:80px;}
a:hover{background:#F8F6F2 !important;}

@media (min-width: 1600px) {
    padding:55px 190px 55px 55px;
}
@media (max-width: 1359px) {
padding:55px;
}
@media (max-width: 1150px) {
    padding:50px 30px;
}
@media (max-width: 767px) {
padding:30px 15px;
h2{ font-size: 30px;line-height: 40px;}
p:nth-child(4){margin-bottom:30px;}
}


`
