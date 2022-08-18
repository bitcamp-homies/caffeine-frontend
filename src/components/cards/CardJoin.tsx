import React from 'react'

const CardJoin = () => {
  return (
    
    <div className="pt-52 pl-52 content-center">
      <div className="w-full max-w-xs ">
        <form className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md">
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Username
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Password
            </label>
            <input
              className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-green-500 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-xs italic text-green-700">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-green-700 py-2 px-4 font-bold text-white hover:bg-green-700 focus:outline-none"
              type="button"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline text-sm font-bold text-green-700 hover:text-green-700"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-xs text-gray-500">
          &copy;2022 THUMBS! Corp. All rights reserved.
        </p>
      </div>
    </div>  
  )
}

export default CardJoin
