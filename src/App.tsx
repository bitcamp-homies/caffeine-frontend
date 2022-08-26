import React, { useState } from 'react'
import { motion, useCycle } from 'framer-motion'
import MainRoutes from 'Routes'
import BurgerMenu from 'components/navbar/BurgerMenu'
import MainNavBar from 'components/navbar/MainNavBar'

function App() {
  const [isBurger, burgerCycle] = useCycle(false, true)

  return (
    <>
      <MainNavBar burgered={isBurger} burger={burgerCycle} />
      {isBurger ? <BurgerMenu burgered={isBurger} burger={burgerCycle} /> : ''}
      <MainRoutes />
    </>
  )
}

export default App