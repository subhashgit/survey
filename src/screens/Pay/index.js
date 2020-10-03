import React, { useState} from 'react';
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
  
} from '@expo/vector-icons';
import { Switch } from 'react-native';
import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddButton,
  AddLabel,
  UseTicketContainer,
  UseTicketButton,
  UseTicketLabel,
} from './styles';

import creditCard from '../../../assets/images/credit-card.png'


export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);


  return (
    <Wrapper>
      <Header 
      colors={
        useBalance 
        ? ['#52e78c', '#1ab563']
        : ['#D3D3D3', '#868686']
      }
      >
        <HeaderContainer>
          <Title>Setting</Title>
          

       
          
        </HeaderContainer>
      </Header>
      

    
    </Wrapper>
  );
}