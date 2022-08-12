import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Logo from './components/Logo';
import MapMarker from './components/MapMarker';
import Main from 'components/main/Main';
import Order from 'components/order/Order';
import AllProducts from 'components/order/allproduct/AllProducts';
import Featured from 'components/order/featured/Featured';
import AllCafes from 'components/order/allcafe/AllCafes';

function App() {
  return (
    <Router>
      <nav className='sticky z-10 shadow px-4 py-4 md:px-6 md:py-6 lg:px-10 lg:py-7 flex flex-row'>
        <Link to="/"><Logo /></Link>
        <div className='w-full hidden md:flex flex-row'>
          <ul className='mx-10 list-none font-bold self-center'>
            <li className='inline-block mr-7'>
              <Link to="/order/cafes">ORDER</Link>
            </li>
            <li className='inline-block mr-7'>
              <button>CARDS</button>
            </li>
            <li className='inline-block'>
              <button>GIFT</button>
            </li>
          </ul>
          <div className='ml-auto flex flex-row flex-shrink-0 self-center'>
            <MapMarker />
            <button className='ml-4 mr-10 font-semibold'>Find a store</button>
            <button className='px-4 py-1.5 border border-black rounded-full font-semibold'>Sign in</button>
            <button className='ml-4 px-4 py-1.5 border border-black bg-black text-white rounded-full font-semibold'>Join now</button>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='order' element={ <Order /> }>
          <Route path='cafes' element= {<AllCafes /> } />
          <Route path='cafes/menu' element={ <AllProducts /> } />
          <Route path='featured' element={ <Featured /> } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
