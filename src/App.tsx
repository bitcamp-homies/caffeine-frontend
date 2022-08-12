import React from 'react';
import Featured from 'components/featured/Featured';
import AllProducts from 'components/order/AllProducts';
import NavBar from './components/index/NavBar';
import OrderNow from 'components/featured/featuredList/OrederNow';

function App() {
  return (
    <div>
      <NavBar />
      <AllProducts />
      <Featured/>
      <OrderNow/>
    </div>
  );
}

export default App;
