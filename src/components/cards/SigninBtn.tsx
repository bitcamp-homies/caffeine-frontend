import React from 'react'

const SigninBtn = () => {
  return (
    <button
      type="button"
      className="w-full rounded-lg bg-green-600 py-4 text-green-100"
    >
      <div className="flex flex-row items-center justify-center">
        <div className="mr-2">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            ></path>
          </svg>
        </div>
        <div className="font-bold">Sigin</div>
      </div>
    </button>
  )
}

export default SigninBtn
