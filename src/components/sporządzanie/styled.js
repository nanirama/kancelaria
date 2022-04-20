import styled from "styled-components";

export const ContentBlock = styled.div`
padding:50px 0 80px 0;
@media (max-width:600px) {
    padding:50px 0;
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
gap: 10px 40px;
@media (min-width: 992px) {
   grid-template-columns: 5fr 7fr;
}
@media (min-width: 768px) and  (max-width:991px)  {
    grid-template-columns: 6fr 6fr;
}
`
export const Item = styled.div`
h2{font-size: 36px;line-height: 49px;
    @media (max-width:600px) {
        font-size: 28px;line-height: 36px;
    }
}
h4{margin:20px 0 15px 0;display:inline-block;width:100%;}
`
export const Links = styled.div`
background: #F4F0E9;
padding:16px 24px 24px 0px;
border-left: 19px solid #DED1BC;
@media (max-width:767px) {
margin-bottom:20px;
}

ul{margin:0;padding:0;}
ul li{list-style:none;margin:0;}
ul li a{font-weight:300;font-size:14px;line-height:23px;padding:4px 8px;margin:0;display: inline-block; color:#000; position:relative;
    &[aria-current="page"]:before{ content:'';position:absolute;top:0;left:-18px; background-color:#113D69; width:18px;height:62px;}
    &[aria-current="page"],  &[aria-current="page"]:hover{background-color:#113D69;color:#fff;}
    &:hover{background-color:#DED1BC;color:#000;} 
}

@media (max-width:900px) {
    ul li{ width:100%;}
}
@media (max-width:600px) {
    ul li a{ font-size:16px;line-height:26px;}
}
`
export const Text = styled.div`
display:flex;
padding-left:14px;
margin-top:20px;
a{display:flex;}
p{display: flex;align-items: center;justify-content: center;margin: 0; padding-left:12px;}
`