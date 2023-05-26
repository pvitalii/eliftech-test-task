import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ShopPage } from '../../../pages/shop';
import { ROUTER_KEYS } from '../../../common/consts/router-keys.const';
import { CartPage } from '../../../pages/cart';
import { HistoryPage } from '../../../pages/history';

export function MainRouter() {
  return (
    <Routes>
      <Route Component={ShopPage} path={ROUTER_KEYS.SHOP} />
      <Route Component={CartPage} path={ROUTER_KEYS.CART} />
      <Route Component={HistoryPage} path={ROUTER_KEYS.HISTORY} />
    </Routes>
  );
}
