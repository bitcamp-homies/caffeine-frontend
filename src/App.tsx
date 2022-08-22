// @ts-nocheck
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import MainRoutes from 'Routes';
import BurgerMenu from 'components/navbar/BurgerMenu'
import MainNavBar from 'components/navbar/MainNavBar'

function App() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <MainNavBar toggled={isOpen} toggle={setOpen}/>
      <BurgerMenu toggled={isOpen} toggle={setOpen}/>
      <MainRoutes />
    </>
  );
}

export default App
