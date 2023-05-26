import React from 'react';
import { Header, Nav, NavLink } from './navigation.styled';
import { ROUTER_KEYS } from '../../../common/consts/router-keys.const';

export function Navigation() {
  return (
    <Header>
      <Nav>
        <NavLink to={ROUTER_KEYS.SHOP}>Shop</NavLink>
        <NavLink to={ROUTER_KEYS.CART}>Shopping cart</NavLink>
        <NavLink to={ROUTER_KEYS.HISTORY}>History</NavLink>
      </Nav>
    </Header>
  );
}
