import React from "react";
import { Link } from "gatsby"
import { ContentBlock, Container, Grid, Item, Links, Text } from "./styled"

const OfferSection = () => {
    return (
        <ContentBlock>
            <Container>
                <Grid>
                    <Item>
                        <Links>
                            <ul>
                                <li><Link to="/offers/sporządzanie" className="active">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Link></li>
                                <li><Link to="/offers/sporządzanie1">Sed pretium lectus id massa porta suscipit.</Link></li>
                                <li><Link to="/offers/sporządzanie2">Nunc id velit quis odio placerat scelerisque sit amet eu quam.</Link></li>
                                <li><Link to="/offers/sporządzanie3">Morbi condimentum urna at elit imperdiet accumsan.</Link></li>
                                <li><Link to="/">Duis nec risus vitae risus sodales posuere.</Link></li>
                                <li><Link to="/">Phasellus quis orci non justo hendrerit varius.</Link></li>
                                <li><Link to="/">Proin sed est tempus, semper ligula a, semper ante.</Link></li>
                                <li><Link to="/">Etiam vel nisi id turpis rutrum egestas.</Link></li>
                                <li><Link to="/">Cras porttitor nunc eget est accumsan tempor.</Link></li>
                                <li><Link to="/">Pellentesque non erat ac enim dictum facilisis eget vitae nulla.</Link></li>
                                <li><Link to="/">Nunc vel nisl nec neque condimentum placerat.</Link></li>
                                <li><Link to="/">Proin hendrerit ex nec interdum pulvinar.</Link></li>
                                <li><Link to="/">Nam sollicitudin tortor vel lorem condimentum, id luctus nulla pretium.</Link></li>
                                <li><Link to="/">Nullam at libero nec nisi blandit consequat.</Link></li>
                            </ul>
                        </Links>
                    </Item>
                    <Item>
                        <h2>Sporządzanie testamenów</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae elit gravida elit facilisis volutpat. Sed enim ipsum, fermentum hendrerit tincidunt quis, egestas ac dolor. Morbi quis neque vitae lacus semper hendrerit vel vitae magna. Aenean finibus varius sem. Maecenas feugiat condimentum lacus et vestibulum. Nam in sollicitudin felis, nec mattis leo. Donec mollis sollicitudin urna eget eleifend.</p>
                        <p>Suspendisse fermentum pellentesque vehicula. Proin ut accumsan purus, vel sollicitudin diam. Maecenas facilisis quis tortor eu porttitor. Morbi et venenatis justo. Mauris tortor tellus, volutpat et lectus nec, euismod pretium ipsum. Nunc dolor mi, venenatis dictum ullamcorper sit amet, efficitur ac diam. Proin id nulla turpis.</p>
                        <h4>Wymagane dokumenty:</h4>
                        <ul>
                            <li>Lorem ipsum</li>
                            <li>Dolor sit amet, consectetur adipiscing elit</li>
                            <li>Maecenas vitae elit gravida</li>
                            <li>elit facilisis</li>
                            <li>volutpat</li>
                            <li>Sed enim ipsum (fermentum hendrerit tincidunt)</li>
                        </ul>
                        <h4>Cena: 12345 zł</h4>
                        <h4>Pliki do pobrania:</h4>
                        <Text>
                            <Link to="/"><svg width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 10.625V0H1.875C0.835938 0 0 0.835938 0 1.875V38.125C0 39.1641 0.835938 40 1.875 40H28.125C29.1641 40 30 39.1641 30 38.125V12.5H19.375C18.3438 12.5 17.5 11.6562 17.5 10.625ZM23.4727 27.1375L15.9398 34.6141C15.4203 35.1305 14.5813 35.1305 14.0617 34.6141L6.52891 27.1375C5.73594 26.3508 6.29219 25 7.40781 25H12.5V18.75C12.5 18.0594 13.0594 17.5 13.75 17.5H16.25C16.9406 17.5 17.5 18.0594 17.5 18.75V25H22.5922C23.7078 25 24.2641 26.3508 23.4727 27.1375ZM29.4531 8.20312L21.8047 0.546875C21.4531 0.195312 20.9766 0 20.4766 0H20V10H30V9.52344C30 9.03125 29.8047 8.55469 29.4531 8.20312Z" fill="#113D69" />
                            </svg>
                            <p>Lorem ipsum dolor sit amet</p>
                            </Link>
                        </Text>
                        <Text>
                            <Link to="/"><svg width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 10.625V0H1.875C0.835938 0 0 0.835938 0 1.875V38.125C0 39.1641 0.835938 40 1.875 40H28.125C29.1641 40 30 39.1641 30 38.125V12.5H19.375C18.3438 12.5 17.5 11.6562 17.5 10.625ZM23.4727 27.1375L15.9398 34.6141C15.4203 35.1305 14.5813 35.1305 14.0617 34.6141L6.52891 27.1375C5.73594 26.3508 6.29219 25 7.40781 25H12.5V18.75C12.5 18.0594 13.0594 17.5 13.75 17.5H16.25C16.9406 17.5 17.5 18.0594 17.5 18.75V25H22.5922C23.7078 25 24.2641 26.3508 23.4727 27.1375ZM29.4531 8.20312L21.8047 0.546875C21.4531 0.195312 20.9766 0 20.4766 0H20V10H30V9.52344C30 9.03125 29.8047 8.55469 29.4531 8.20312Z" fill="#113D69" />
                            </svg>
                            <p>Lorem ipsum dolor sit amet</p>
                            </Link>
                        </Text>
                    </Item>
                </Grid>
            </Container>
        </ContentBlock>
    );
};
export default OfferSection;