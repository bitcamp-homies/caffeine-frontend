//@ts-nocheck
import App from 'App';
import Cardheader from 'components/cards/Cardheader';
import Main from 'components/main/Main';
import AllCafes from 'components/order/allcafe/AllCafes';
import AllCafesLocation from 'components/order/allcafe/AllCafesLocation';
import AllDetails from 'components/order/allproduct/AllDetails';
import AllProducts from 'components/order/allproduct/AllProducts';
import Featured from 'components/order/featured/Featured';
import OrderNow from 'components/order/featured/OrederNow';
import Order from 'components/order/Order';
import FindStore from 'components/stores/FindStore';
import Payment from 'components/order/featured/Payment';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CafeCoordManage from 'components/stores/CafeCoordManage';
import Gift from 'components/cards/Gift';
import Point from 'components/cards/Point';


const MainRoutes = () => {
  return (
      <Routes>
        <Route path='/' element={ <App /> } />
        <Route index element={ <Main /> } />

        <Route path='card' element={ <Cardheader /> }>
          <Route path='gift' element={<Gift/> } />
          <Route path='point' element={<Point />}/>
        </Route>

        <Route path='order' element={ <Order /> }>
          <Route path='cafes' element= {<AllCafes /> }/>
          <Route path="cafes/:address2" element= {<AllCafesLocation /> }/>
          <Route path='cafes/menu' element={ <AllProducts /> }/>
          <Route path='cafes/menu/hot-coffees' element={ <AllDetails />}/>
          <Route path='featured' element={ <Featured /> } />
          <Route path='featured/order-now' element={<OrderNow/>}/>
          <Route path='featured/order-now/payment' element={<Payment/>}/>
        </Route>

        <Route path='/store' element={ <FindStore /> } />
        <Route path="/store/:cafename" element={<FindStore/>}></Route>
        <Route path="coord" element={<CafeCoordManage />}></Route>
      </Routes>
  );
};

export default MainRoutes;