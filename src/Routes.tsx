import App from 'App';
import Card from 'components/cards/Card';
import Main from 'components/main/Main';
import AllCafes from 'components/order/allcafe/AllCafes';
import AllCafesLocation from 'components/order/allcafe/AllCafesLocation';
import AllDetails from 'components/order/allproduct/AllDetails';
import AllProducts from 'components/order/allproduct/AllProducts';
import Featured from 'components/order/featured/Featured';
import OrderNow from 'components/order/featured/featuredList/OrederNow';
import Order from 'components/order/Order';
import FindStore from 'components/stores/FindStore';

import React from 'react';
import { Routes, Route } from 'react-router-dom';

const MainRoutes = () => {
  return (
      <Routes>
        <Route path='/' element={ <App /> } />
        <Route index element={ <Main /> } />
        <Route path='cards' element={<Card/> } />
        <Route path='order' element={ <Order /> }>
          <Route path='cafes' element= {<AllCafes /> }/>
          <Route path='cafes/location' element= {<AllCafesLocation /> }/>
          <Route path='cafes/menu' element={ <AllProducts /> }/>
          <Route path='cafes/menu/hot-coffees' element={ <AllDetails />}/>
          <Route path='featured' element={ <Featured /> } />
          <Route path='featured/order-now' element={<OrderNow/>}/>
        </Route>
        <Route path='/store' element={ <FindStore /> } />
      </Routes>
  );
};

export default MainRoutes;