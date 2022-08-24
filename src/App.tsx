import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { motion, useCycle } from 'framer-motion'
import MainRoutes from 'Routes';
import BurgerMenu from 'components/navbar/BurgerMenu'
import MainNavBar from 'components/navbar/MainNavBar'

function App() {
  const [isBurger, burgerCycle] = useCycle(false, true)

  return (
    <>
      <MainNavBar burgered={isBurger} burger={burgerCycle}/>
      <BurgerMenu burgered={isBurger} burger={burgerCycle}/>
      <MainRoutes />
    </>
  );
}

export default App
