import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Logo from './components/Logo';
import MapMarker from './components/MapMarker';

import Main from 'components/main/Main';
import Order from 'components/order/Order';

function App() {
  return (
    <Router>
      <nav className='px-4 py-4 md:px-6 md:py-6 lg:px-10 lg:py-6 flex flex-row'>
        <Link to="/"><Logo /></Link>
        <div className='w-full hidden md:flex flex-row'>
          <ul className='mx-10 list-none font-bold self-center'>
            <li className='inline-block mr-7 text-sm'>
              <Link to="/order">ORDER</Link>
            </li>
            <li className='inline-block mr-7 text-sm'>
              <button>CARDS</button>
            </li>
            <li className='inline-block text-sm'>
              <button>GIFT</button>
            </li>
          </ul>
          <div className='ml-auto flex flex-row flex-shrink-0 self-center'>
            <MapMarker />
            <button className='ml-4 mr-10 font-semibold text-sm'>Find a store</button>
            <button className='px-4 py-1.5 border border-black rounded-full font-semibold text-sm'>Sign in</button>
            <button className='ml-4 px-4 py-1.5 border border-black bg-black text-white rounded-full font-semibold text-sm'>Join now</button>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='/order' element={ <Order /> } />
      </Routes>
    </Router>
  );
}

export default App;
