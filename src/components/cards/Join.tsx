import React from 'react'
import { Link } from 'react-router-dom'
import SigninBtn from './SigninBtn'

const Join = () => {
  return (
    <body className="bg-gradient-to-br from-green-100 to-white antialiased">
      <div className="container mx-auto px-6">
        <div className="flex h-screen flex-col justify-evenly text-center md:flex-row md:items-center md:text-left">
          <div className="mx-auto w-full md:mx-0 md:w-full lg:w-9/12">
            <div className="flex w-full flex-col rounded-xl bg-white p-10 shadow-xl">
              <h2 className="mb-5 text-left text-2xl font-bold text-gray-800">
                Sigin
              </h2>
              <form action="" className="w-full">
                <div id="input" className="my-5 flex w-full flex-col">
                  <label className="mb-2 text-gray-500">Username</label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Please insert your username"
                    className="appearance-none rounded-lg border-2 border-gray-100 px-4 py-3 placeholder-gray-300 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
                <div id="input" className="my-5 flex w-full flex-col">
                  <label className="mb-2 text-gray-500">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Please insert your password"
                    className="appearance-none rounded-lg border-2 border-gray-100 px-4 py-3 placeholder-gray-300 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
                <div id="button" className="my-5 flex w-full flex-col">
                  <Link to='cardlist'>
                    <SigninBtn />
                  </Link>
                  <div className="mt-5 flex justify-evenly">
                    <a
                      href="#"
                      className="w-full text-center font-medium text-gray-500"
                    >
                      Recover password!
                    </a>
                    <a
                      href="#"
                      className="w-full text-center font-medium text-gray-500"
                    >
                      Singup!
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Join