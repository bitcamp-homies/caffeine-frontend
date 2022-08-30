import React, { useState } from 'react'
import { motion, useCycle } from 'framer-motion'
import { Link } from 'react-router-dom'

interface BurgerProps {
  burgered: boolean
  burger: Function
}

const BurgerMenu = (props: BurgerProps) => {
  const isBurger = props.burgered
  const burgerCycle = props.burger

  return (
    <div id="burgerMenu">
      <div className="fixed z-40 flex h-full w-full flex-row-reverse bg-black bg-black-rgba">
        <motion.div
          className="basis-10/12 bg-white px-2 pt-10"
          animate={{ x: 0 }}
          initial={{ x: 350 }}
          transition={{ ease: 'linear' }}
          onTap={() => burgerCycle}
        >
          <ul>
            <Link to="/order/cafes">
              <li className="mb-8 px-6 text-xl">사이렌오더</li>
            </Link>
            <Link to="/cards">
              <li className="mb-8 px-6 text-xl">포인트</li>
            </Link>
            <Link to="/">
              <li className="mb-8 px-6 text-xl">기프트</li>
            </Link>
            <Link to="/store">
              <li className="mb-8 px-6 text-xl">지도로 찾기</li>
            </Link>
          </ul>
          <hr className="mx-6 border border-gray-300 bg-gray-300" />
          <div className="flex flex-row px-5 pt-8">
            <button className="mr-4 rounded-full border border-black bg-white px-3 py-1 text-lg">
              로그인
            </button>
            <button className="rounded-full border bg-black px-3 py-1 text-lg text-white">
              회원가입
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default BurgerMenu
