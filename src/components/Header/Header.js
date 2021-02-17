import React from 'react';
import { HeaderContainer, HeaderLogo } from './style';
import logo from '../../assets/logo.png';

export default () => {
  
  return (
    <HeaderContainer>
      <HeaderLogo src={logo} />
    </HeaderContainer>
  )
}
