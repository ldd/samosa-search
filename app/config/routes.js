import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from '../components/Main';
import Sale from '../components/Sale/SaleController';
import SaleMap from '../components/SaleMap';

export default (
  <Route path='/' component={Main}>
    <Route path='sale' component={Sale} />
    <Route path='sale/:saleId' component={Sale} />
    <IndexRoute component={SaleMap}/>
  </Route>
);