import React from 'react';

import { Container, Details, Img, Title, Description } from './styles';
import img13 from '../../../assets/images/13.png'

export default function Banner () {
  return (
    <Container>
      <Details>
        <Title>Hello welcome</Title>

        <Description>
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        </Description>
      </Details>
      <Img source={img13} />
    </Container>
  );
}