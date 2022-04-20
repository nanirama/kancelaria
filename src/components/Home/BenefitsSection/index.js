import React from "react";
import { Link } from "gatsby"

import { BenefitBlock, Container, Grid, Item, TitleBlk, Icon, BtnOuter } from "./styled"

import Button from "../../Sections/Button"

const BenefitsSection = () => {
    return (
        <BenefitBlock>
            <Container>
                <Grid>
                    <Item>
                        <TitleBlk>
                            <Icon><svg width="52" height="42" viewBox="0 0 52 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.8 27.5625H20.7984C20.7984 26.2352 20.9072 26.8464 13.8881 12.673C12.454 9.77813 8.34762 9.77238 6.91112 12.673C-0.167375 26.9678 0.001625 26.2771 0.001625 27.5625H0C0 31.1866 4.65644 34.125 10.4 34.125C16.1436 34.125 20.8 31.1866 20.8 27.5625ZM10.4 14.4375L16.25 26.25H4.55L10.4 14.4375ZM51.9984 27.5625C51.9984 26.2352 52.1072 26.8464 45.0881 12.673C43.654 9.77813 39.5476 9.77238 38.1111 12.673C31.0326 26.9678 31.2016 26.2771 31.2016 27.5625H31.2C31.2 31.1866 35.8564 34.125 41.6 34.125C47.3436 34.125 52 31.1866 52 27.5625H51.9984ZM35.75 26.25L41.6 14.4375L47.45 26.25H35.75ZM42.9 36.75H28.6V12.5713C30.5102 11.7272 31.9443 9.98895 32.3692 7.875H42.9C43.6182 7.875 44.2 7.28766 44.2 6.5625V3.9375C44.2 3.21234 43.6182 2.625 42.9 2.625H31.1707C29.9845 1.04016 28.1198 0 26 0C23.8802 0 22.0155 1.04016 20.8292 2.625H9.1C8.38175 2.625 7.8 3.21234 7.8 3.9375V6.5625C7.8 7.28766 8.38175 7.875 9.1 7.875H19.6308C20.0557 9.98812 21.489 11.7272 23.4 12.5713V36.75H9.1C8.38175 36.75 7.8 37.3373 7.8 38.0625V40.6875C7.8 41.4127 8.38175 42 9.1 42H42.9C43.6182 42 44.2 41.4127 44.2 40.6875V38.0625C44.2 37.3373 43.6182 36.75 42.9 36.75Z" fill="white" />
                            </svg></Icon>
                            <h4>Pomoc prawna</h4>
                        </TitleBlk>
                        <p>Quisque sed imperdiet ligula. Integer id facilisis arcu, eu vulputate risus. Maecenas dictum velit leo, at malesuada dolor dapibus at..</p>
                    </Item>
                    <Item>
                        <TitleBlk>
                            <Icon><svg width="42" height="32" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M38.4927 0H3.50729C1.56771 0 0 1.53571 0 3.42857V28.5714C0 30.4643 1.56771 32 3.50729 32H38.4927C40.4323 32 42 30.4643 42 28.5714V3.42857C42 1.53571 40.4323 0 38.4927 0ZM3.94479 3.42857H38.0552C38.2958 3.42857 38.4927 3.62143 38.4927 3.85714V6.85714H3.50729V3.85714C3.50729 3.62143 3.70417 3.42857 3.94479 3.42857ZM38.0552 28.5714H3.94479C3.70417 28.5714 3.50729 28.3786 3.50729 28.1429V16H38.4927V28.1429C38.4927 28.3786 38.2958 28.5714 38.0552 28.5714ZM14 21.4286V24.2857C14 24.7571 13.6062 25.1429 13.125 25.1429H7.875C7.39375 25.1429 7 24.7571 7 24.2857V21.4286C7 20.9571 7.39375 20.5714 7.875 20.5714H13.125C13.6062 20.5714 14 20.9571 14 21.4286ZM28 21.4286V24.2857C28 24.7571 27.6062 25.1429 27.125 25.1429H17.2083C16.7271 25.1429 16.3333 24.7571 16.3333 24.2857V21.4286C16.3333 20.9571 16.7271 20.5714 17.2083 20.5714H27.125C27.6062 20.5714 28 20.9571 28 21.4286Z" fill="white" />
                            </svg></Icon>
                            <h4>Płatności kartą</h4>
                        </TitleBlk>
                        <p>Quisque sed imperdiet ligula. Integer id facilisis arcu, eu vulputate risus. Maecenas dictum velit leo, at malesuada dolor dapibus at. Ut a elit condimentum, lacinia mauris ac.</p>
                    </Item>
                    <Item>
                        <TitleBlk>
                            <Icon><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39 30H30C28.35 30 27 28.65 27 27C27 25.35 28.35 24 30 24H39C39 24 48 13.9688 48 9C48 4.03125 43.9688 0 39 0C34.0312 0 30 4.03125 30 9C30 11.3906 32.0812 14.9438 34.2469 18H30C25.0406 18 21 22.0406 21 27C21 31.9594 25.0406 36 30 36H39C40.65 36 42 37.35 42 39C42 40.65 40.65 42 39 42H17.3906C15.8906 44.325 14.2219 46.4719 12.9562 48H39C43.9594 48 48 43.9594 48 39C48 34.0406 43.9594 30 39 30ZM39 6C40.6594 6 42 7.34062 42 9C42 10.6594 40.6594 12 39 12C37.3406 12 36 10.6594 36 9C36 7.34062 37.3406 6 39 6ZM9 24C4.03125 24 0 28.0312 0 33C0 37.9688 9 48 9 48C9 48 18 37.9688 18 33C18 28.0312 13.9688 24 9 24ZM9 36C7.34062 36 6 34.6594 6 33C6 31.3406 7.34062 30 9 30C10.6594 30 12 31.3406 12 33C12 34.6594 10.6594 36 9 36Z" fill="white" />
                            </svg>
                            </Icon>
                            <h4>Łatwy dojazd</h4>
                        </TitleBlk>
                        <p>Quisque sed imperdiet ligula. Integer id facilisis arcu, eu vulputate risus. Maecenas dictum velit leo, at malesuada dolor dapibus at. Ut a elit condimentum.</p>
                    </Item>
                    <Item>
                        <TitleBlk>
                            <Icon><svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33.0357 0H3.96429C1.77567 0 0 1.72768 0 3.85714V32.1429C0 34.2723 1.77567 36 3.96429 36H33.0357C35.2243 36 37 34.2723 37 32.1429V3.85714C37 1.72768 35.2243 0 33.0357 0ZM19.8214 23.1429H15.8571V27C15.8571 27.7071 15.2625 28.2857 14.5357 28.2857H11.8929C11.1661 28.2857 10.5714 27.7071 10.5714 27V9C10.5714 8.29286 11.1661 7.71429 11.8929 7.71429H19.8214C24.1904 7.71429 27.75 11.1777 27.75 15.4286C27.75 19.6795 24.1904 23.1429 19.8214 23.1429ZM19.8214 12.8571H15.8571V18H19.8214C21.275 18 22.4643 16.8429 22.4643 15.4286C22.4643 14.0143 21.275 12.8571 19.8214 12.8571Z" fill="white" />
                            </svg>
                            </Icon>
                            <h4>Parking</h4>
                        </TitleBlk>
                        <p>Quisque sed imperdiet ligula. Integer id facilisis arcu, eu vulputate risus. Maecenas dictum velit leo.</p>
                    </Item>
                </Grid>
                <BtnOuter>
              <Button size="large" type="primary"> <Link to="/contact">ZAPRASZAMY DO KONTAKTU</Link></Button>
                </BtnOuter>
            </Container>
        </BenefitBlock>
    );
};

export default BenefitsSection;