import React from "react";
import { Link } from "gatsby"
import { OfferContent, Container, Grid, Item, TextBlock, Text, BtnOuter, Links } from "./styled"

import Button from "../../Sections/Button"

const OfferSection = () => {
    return (
        <OfferContent>
            <Container>
                <h2>Czynności Notarialne</h2>
                <Grid>
                    <Item>
                        <TextBlock>
                            <Text>
                                <h3>Lorem ipsum dolor sit amet?</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat dignissim lectus, nec convallis nisl posuere sed. Quisque sed dui mollis mi rutrum ultricies. Quisque id suscipit est, sed posuere ante. Integer rhoncus, sem id viverra venenatis, massa ipsum feugiat nisi, a porta sem massa nec lectus.</p>
                            </Text>
                            <BtnOuter>
                                <Button type="primary"><Link to="/"> DOWIEDZ SIĘ WIĘCEJ</Link></Button>
                            </BtnOuter>
                        </TextBlock>
                    </Item>
                    <Item>
                        <Links>
                        <ul>
                            <li><Link to="/sporządzanie">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Link></li>
                            <li><Link to="/sporządzanie1">Sed pretium lectus id massa porta suscipit.</Link></li>
                            <li><Link to="/sporządzanie2">Nunc id velit quis odio placerat scelerisque sit amet eu quam.</Link></li>
                            <li><Link to="/sporządzanie3">Morbi condimentum urna at elit imperdiet accumsan.</Link></li>
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
                </Grid>
            </Container>
        </OfferContent>
    );
};
export default OfferSection;