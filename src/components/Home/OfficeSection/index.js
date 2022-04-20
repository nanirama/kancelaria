import React from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";

import {OfficeBlock, Grid, Item, ContactBLock} from "./styled"
import Button from "../../Sections/Button"

const OfficeSection = () => {
return(
  <OfficeBlock>
      <Grid>
        <Item>
          <ContactBLock>
            <h2>Nasze Biuro</h2>
            <p>Quisque sed imperdiet ligula. Integer id facilisis arcu, eu vulputate risus.</p>
            <p>Godziny otwarcia<br/> pon. - pt. 09:00 - 17:00</p>
            <p>Mauris volutpat dignissim lectus, nec convallis nisl posuere sed.<br/>Duis nec sagittis tellus. Donec eleifend tellus leo,</p>
           <Button type="primary"> <Link to="/">SKONTAKTUJ SIĘ Z NAMI</Link></Button>
          </ContactBLock>
        </Item>
        <Item><StaticImage src="../../../assets/images/office-img.jpg" alt="" /></Item>
        </Grid>
  </OfficeBlock>
);
};

export default OfficeSection;