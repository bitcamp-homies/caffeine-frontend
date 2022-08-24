import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { motion, useCycle } from 'framer-motion'
import MainRoutes from 'Routes';
import BurgerMenu from 'components/navbar/BurgerMenu'
import MainNavBar from 'components/navbar/MainNavBar'

function App() {
  const [isOpen, setOpen] = useState(false)
  const [openBurger, openBurgerCycle] = useCycle(false, true)

  return (
    <>
      <MainNavBar toggled={isOpen} toggle={setOpen}/>
      <BurgerMenu toggled={isOpen} toggle={setOpen}/>
      <MainRoutes />
    </>
  );
}

export default App