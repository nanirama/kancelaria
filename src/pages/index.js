import * as React from "react"

import Layout from "../components/Layout"
import Banner from "../components/Banner"
import AboutSection from "../components/Home/AboutSection"
import OfficeSection from "../components/Home/OfficeSection"
import OfferSection from "../components/Home/OfferSection"
import BenefitsSection from "../components/Home/BenefitsSection"
import BottomSection from "../components/Home/BottomLegalSection"

import Button from "../components/Sections/Button"

const IndexPage = () => (
  <Layout>
    <Banner />
    <AboutSection />
    <OfficeSection />
    <OfferSection />
    <BenefitsSection />
    <BottomSection/>
    {/* <Button type="primary">Strona Główna</Button><br />
    <Button>Strona Główna</Button><br />
    <Button size="large" type="primary">ZAPRASZAMY DO KONTAKTU</Button> */}
  </Layout>
)

export default IndexPage
