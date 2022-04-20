import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { ContetnBlock, Container, Grid, Item, TextBlock, Image, Image1, GridInner } from "./styled"

const TopSection = () => {
    return (
        <ContetnBlock>
            <Container>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat dignissim lectus, nec convallis nisl posuere sed. Quisque sed dui mollis mi rutrum ultricies. Quisque id suscipit est, sed posuere ante. Integer rhoncus, sem id viverra venenatis, massa ipsum feugiat nisi, a porta sem massa nec lectus.</p>
            </Container>
            <Grid>
                <Item>
                    <GridInner>
                        <Image><StaticImage src="../../../assets/images/image-1.jpg" alt="" /></Image>
                        <TextBlock>
                            <h3>Magdalena Dąbrowska <br /><span>notariusz</span></h3>
                            <p>Quisque sed imperdiet ligula. Integer id facilisis arcu, eu vulputate risus. Maecenas dictum velit leo, at malesuada dolor dapibus at. Ut a elit condimentum, lacinia mauris ac, sagittis enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; </p>
                        </TextBlock>
                    </GridInner>
                </Item>
                <Item>
                    <GridInner>
                        <TextBlock>
                            <h3>Joanna Szeszkowska <br /><span>notariusz</span></h3>
                            <p>Quisque sed imperdiet ligula. Integer id facilisis arcu, eu vulputate risus. Maecenas dictum velit leo, at malesuada dolor dapibus at. Ut a elit condimentum, lacinia mauris ac, sagittis enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; </p>
                        </TextBlock>
                        <Image1><StaticImage src="../../../assets/images/image-2.jpg" alt="" /></Image1>
                    </GridInner>
                </Item>
            </Grid>
        </ContetnBlock>
    );
};
export default TopSection;