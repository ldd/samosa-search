import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from '../components/Main';
import Sale from '../components/Sale/SaleController';
import SaleList from '../components/SaleList';
import Menu from '../components/Menu/MenuController';
import AppConstants from '../constants/constants';

export default (
  <Route path='/' component={Main}>
    <Route path='sale'
           action={AppConstants.CREATE_SALE}
           component={Sale} />

    <Route path='sale/:saleId'
           action={AppConstants.UPDATE_SALE}
           component={Sale} />

    <Route path='list'
           component={SaleList} />
    <IndexRoute component={Menu}/>
  </Route>
);