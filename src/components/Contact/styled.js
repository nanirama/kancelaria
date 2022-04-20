import styled from "styled-components";

export const ContactBLock = styled.div`
h2{font-size: 36px;line-height: 49px;
    @media (max-width:600px) {
        font-size: 28px;line-height: 36px;
    }
}
margin-bottom:50px;

`
export const Container = styled.div`
max-width:1230px;
margin:0 auto;
padding:0 15px;
`
export const MapBlock = styled.div`
h2{margin:0;}
p span{font-weight:400;}

`
export const Grid = styled.div`
display: grid;
grid-template-columns: 1fr;
gap: 0px 0px;
height:100%;

@media (min-width: 992px) {
   grid-template-columns: 4fr 8fr;  
}
@media (min-width: 801px) and  (max-width:991px) {
    grid-template-columns: 5fr 7fr;  
}
`
export const Item = styled.div`
`

export const ContactText = styled.div`
background: #DED1BC;
padding:35px;
height:100%;
@media (min-width: 1301px) {
    padding:35px 75px 50px 90px;
}
@media (max-width: 400px) {
    padding:30px 15px;
}
`
export const Address = styled.div`
display:flex;
margin-bottom:30px;
p{display: flex;justify-content: center;align-items: center;margin:0;}
`
export const Icon = styled.div`
background: #113D69;
width:64px;
height:64px;
display: flex;
justify-content: center;
align-items: center;
margin-right:12px;
@media (max-width: 600px) {
    width:50px;
    height:50px;
    svg{width:36px;height:36px;}
}
`
export const FormBlock = styled.div`
padding:50px 0;
@media (max-width: 600px) {
    padding:30px 0 0 0;
}
`

export const FormGrid = styled.div`
display: grid;
grid-template-columns: 1fr;
gap: 10px 50px;

@media (min-width: 992px) {
   grid-template-columns: 6fr 6fr;  
}
`
export const Travel = styled.div`
display:flex;
margin-bottom:30px;
p{display: flex;justify-content: center;align-items: center;margin:0; padding-left:12px;}
`
export const FormInner = styled.div`
input, textarea{width:100%;float:left;background: #F8F6F2;border:none;margin-bottom:20px;padding:0 15px;line-height:36px;color: #847B6E;}
textarea{height:200px;resize:none;overflow:hidden;}
.btn{background: #113D69; padding:15px 30px;font-weight:400;color:#fff;border:none;width:280px;float:none;display:inline-block;margin:0;cursor:pointer;
    @media (max-width: 360px) {
        width:100%;
    }
}
`
export const BtnOuter = styled.div`
width:100%;
text-align:center;
margin-top:25px;
display:inline-block;
@media (max-width: 599px) {
    margin-top:10px;
}
`