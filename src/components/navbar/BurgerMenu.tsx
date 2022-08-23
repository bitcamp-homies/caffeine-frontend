import React, { useState } from 'react'
import { motion, useCycle } from 'framer-motion'

interface BurgerProps {
  toggled: boolean
  toggle: React.Dispatch<React.SetStateAction<boolean>>
}

const BurgerMenu = (props: BurgerProps) => {
  const isOpen = props.toggled
  const setOpen = props.toggle

  return (
    <div id="burgerMenu" className={isOpen ? 'block' : 'hidden'}>
      <div className="fixed z-40 flex h-full w-full flex-row-reverse bg-black bg-black-rgba">
        <motion.div
          className="basis-10/12 bg-white px-2 pt-10"
          animate={{ x: 0 }}
          initial={{ x: 500 }}
          transition={{ delay: 1, ease: "linear" }}
        >
          <ul>
            <li className="mb-8 px-6 text-2xl">Order</li>
            <li className="mb-8 px-6 text-2xl">Cards</li>
            <li className="mb-8 px-6 text-2xl">Gift</li>
          </ul>
          <hr className="mx-6 border border-gray-300 bg-gray-300" />
          <div className="flex flex-row px-5 pt-8">
            <button className="mr-4 rounded-full border border-black bg-white px-3 py-1 text-sm">
              Sign in
            </button>
            <button className="rounded-full border bg-black px-3 py-1 text-sm text-white">
              Join now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default BurgerMenu
