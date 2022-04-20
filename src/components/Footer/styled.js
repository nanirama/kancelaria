import styled from "styled-components"

export const Container = styled.div`
  max-width: 1230px;
  margin: 0 auto;
  padding: 0 15px;
`
export const FooterBlock = styled.div`
 background-color:#DED1BC;
  padding:40px 0px 20px 0;
`
export const Logo = styled.div`
  display: grid;
  width:268px; 
`
export const FooterItem = styled.div`
display: flex;
justify-content: start;
gap:80px;
flex-direction: row;

@media (max-width:991px) {
    gap:40px;
}
@media (max-width:768px) {
  flex-direction: column;
  gap: 20px;
}
`
export const FooterRgt = styled.div`
display: flex;
gap: 50px;
justify-content: space-between;
ul{margin:0;padding:0}
li{list-style:none;margin:0;font-size: 14px;line-height:24px;}
p, a{font-size: 14px;line-height:24px;color:#000; }

@media (max-width:600px) {
  flex-direction: column;gap: 20px;
}
`
export const Title = styled.div`
font-size: 18px;line-height:30px; color:#000;
`