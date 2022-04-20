import styled from "styled-components";

export const BottomBlock = styled.div`
padding:84px 0 70px 0;
@media (max-width: 767px) {
    padding:40px 0;
}
`
export const Container = styled.div`
max-width:1230px;
margin:0 auto;
padding:0 15px;
`
export const Content = styled.div`
padding:0 45px;
position:relative;
@media (max-width: 991px) {
    padding:0 30px 0px 30px;
}
@media (max-width: 767px) {
    padding:0 15px 0 15px;
}
&:before{ content:'';position:absolute;top:15px;left:0;width:100%;height:100%; border:1px solid #DED1BC;}
h5{width:auto;display:inline-block;background-color:#fff;z-index: 999;position: relative;padding: 0 8px;}
p{font-size:14px;display: inline-block;}
`