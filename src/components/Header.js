import React from 'react';
import { HeaderStyle } from './Styles/HeaderStyle';
import logo from '../img/clarovideo-logo-sitio.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return(
    <HeaderStyle>
        <Link to={'/'}><img src={ logo } alt='imagen descripcion'/></Link>
    </HeaderStyle>
  )
};


