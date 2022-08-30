// @ts-nocheck
import React from 'react'

const LikeList = () => {
  return (
    <div className="px-4 py-4 text-xl">
      Like List
      <div className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 pt-10 lg:gap-2">
        {/* small component 1 */}
        <div className="w-80 cursor-pointer rounded border border-transparent bg-white shadow hover:border-blue-500">
          <div className="checker-bg flex h-48 w-full items-center justify-center p-4 text-blue-500">
            <img
              className="h-28 w-28 rounded-full object-fill md:h-36 md:w-36"
              src="https://storage.googleapis.com/bitcamp-caffeine.appspot.com/cafe/seoul/gangnam/aster___coffee/gangnam-aster___coffee-profile.jpg"
            ></img>
          </div>

          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <h1 className="font-medium text-gray-600">아스테르 커피</h1>
              <button className="text-gray-500 hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
            <p className="my-1 text-sm text-gray-400">Active</p>
          </div>
        </div>

        {/* small component 2 */}
        <div className="w-80 cursor-pointer rounded border border-transparent bg-white shadow hover:border-blue-500">
          <div className="checker-bg flex h-48 w-full items-center justify-center p-4 text-blue-500">
            <img
              className="h-28 w-28 rounded-full object-fill md:h-36 md:w-36"
              src="https://storage.googleapis.com/bitcamp-caffeine.appspot.com/cafe/seoul/gangnam/aster___coffee/gangnam-aster___coffee-profile.jpg"
            ></img>
          </div>

          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <h1 className="font-medium text-gray-600">아스테르 커피</h1>
              <button className="text-gray-500 hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
            <p className="my-1 text-sm text-gray-400">Active</p>
          </div>
        </div>

        {/* small component 3 */}
        <div className="w-80 cursor-pointer rounded border border-transparent bg-white shadow hover:border-blue-500">
          <div className="checker-bg flex h-48 w-full items-center justify-center p-4 text-blue-500">
            <img
              className="h-28 w-28 rounded-full object-fill md:h-36 md:w-36"
              src="https://storage.googleapis.com/bitcamp-caffeine.appspot.com/cafe/seoul/gangnam/aster___coffee/gangnam-aster___coffee-profile.jpg"
            ></img>
          </div>

          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <h1 className="font-medium text-gray-600">아스테르 커피</h1>
              <button className="text-gray-500 hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
            <p className="my-1 text-sm text-gray-400">Active</p>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default LikeList
