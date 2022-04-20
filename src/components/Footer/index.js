import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import {
  FooterBlock,
  Container,
  FooterItem,
  FooterRgt,
  Logo,
  Title,
} from "./styled"

const Footer = () => {
  return (
    <>
      <FooterBlock>
        <Container>
          <FooterItem>
            <Logo>
              <Link to="/">
                <StaticImage src="../../assets/images/logo.png" alt="" />
              </Link>
            </Logo>
            <FooterRgt>
              <div>
                <Title>Nawigacja</Title>
                <ul>
                  <li>
                    <Link to="/">Strona Główna</Link>
                  </li>
                  <li>
                    <Link to="/">Czynności prawne</Link>
                  </li>
                  <li>
                    <Link to="/">Kontakt</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <Link to="/">polityka prywatności</Link>
                  </li>
                  <li>
                    <Link to="/">pliki cookies</Link>
                  </li>
                </ul>
              </div>
              <div>
              <ul>
                <li>
                  +48 123 456 789
                  <br />
                  +48 123 456 789
                  <br />
                  <a href="">dabrowska@notariusz.pl</a>
                  <br />
                  <a href="">szeszkowska@notariusz.pl</a>
                </li>
</ul>
              </div>
              <div>
                <p>
                  ul.Notarialna 12
                  <br /> 01-234 Warszawa
                </p>
                <p>Website by WebProfessor.</p>
              </div>
            </FooterRgt>
          </FooterItem>
        </Container>
      </FooterBlock>
    </>
  )
}

export default Footer
