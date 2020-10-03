import React from 'react';

import { Container, Options, Img, Label } from './styles';

import img1 from '../../../assets/images/logo-studio.png'
import img2 from '../../../assets/images/logo-framerx.png'
import img3 from '../../../assets/images/iconsub.png'
import img4 from '../../../assets/images/logo-xcode.png'

 
const items = [
  {
    key: String(Math.random()),
    img: img1,
    label: 'Studio'
  },
  {
    key: String(Math.random()),
    img: img2,
    label: 'Farmer X'
  },
  {
    key: String(Math.random()),
    img: img3,
    label: 'Service 3'
  },
  {
    key: String(Math.random()),
    img: img4,
    label: 'Service 4'
  },
  
];

export default function Suggestions(){
  return (
    <Container>
      {items.map((item) => (
        <Options key={item.key}>
        <Img source={item.img}/>
        <Label>{item.label}</Label>
      </Options>
      ))}
    </Container>
  )
}