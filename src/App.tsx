import React from 'react';
import Featured from 'components/featured/Featured';
import AllProducts from 'components/order/AllProducts';
import NavBar from './components/index/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <AllProducts />
      <Featured/>
    </div>
  );
}

export default App;
