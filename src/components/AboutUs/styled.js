import styled from "styled-components"

export const Container = styled.div`
  max-width: 1230px;
  margin: 0 auto;
  padding: 0 15px;
`
export const PageContent = styled.div`
padding:0 0 50px 0;
h2{text-align:center;font-size: 36px; line-height:45px;margin-top:60px;
  @media (max-width: 767px) { 
    font-size: 28px;line-height: 35px;margin-top:40px;
  }
}
`
