// @ts-nocheck

import React from 'react'

const PointUsed = () => {
  return (
    <div>
      <main className="flex-1 overflow-y-auto bg-gray-200 transition duration-500	ease-in-out dark:bg-white">
        <div className="py-5 px-5 text-gray-500 transition duration-500	ease-in-out dark:text-gray-500">
          <div className="mt-1 mb-4 flex items-center justify-between">
            <div className="flex flex-row gap-96">
              <h2 className="text-lg font-medium capitalize">
                포인트 사용 내역
              </h2>
              <span className="text-sm flex flex-row gap-10 pt-2">
                잔여 Thumbs Point :
                <strong>71.180,00 point</strong>
              </span>
            </div>
          </div>

          <div
            className="border transition duration-500 ease-in-out
				dark:border-gray-700"
          ></div>
          <div className="mt-2 flex flex-col">
            <div className="mt-2 flex flex-row">
              <div
                className="flex w-full items-center justify-between rounded-2xl
						bg-white px-8 py-6 dark:bg-gray-200"
              >
                <div className="flex">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src="https://globalassets.starbucks.com/assets/103b2b745f4848f884b793696a4573b6.jpg?impolicy=1by1_wide_topcrop_630"
                    alt="infamous"
                  />

                  <div className="ml-6 flex flex-col">
                    <span className="text-lg font-bold">Ice Americano</span>
                    <div className="mt-4 flex">
                      <div className="flex">
                        <svg
                          className="h-5 w-5 fill-current
											dark:text-gray-600"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 4a4 4 0 014 4 4 4 0 01-4 4
												4 4 0 01-4-4 4 4 0 014-4m0
												10c4.42 0 8 1.79 8
												4v2H4v-2c0-2.21 3.58-4 8-4z"
                          ></path>
                        </svg>
                        <span
                          className="ml-2 text-sm capitalize
											text-gray-600 dark:text-gray-600"
                        >
                          Niccolo perra
                        </span>
                      </div>

                      <div className="ml-6 flex">
                        <svg
                          className="h-5 w-5 fill-current
											dark:text-gray-600"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19
												19H5V8h14m-3-7v2H8V1H6v2H5c-1.11
												0-2 .89-2 2v14a2 2 0 002 2h14a2 2
												0 002-2V5a2 2 0 00-2-2h-1V1m-1
												11h-5v5h5v-5z"
                          ></path>
                        </svg>
                        <span
                          className="ml-2 text-sm capitalize
											text-gray-600 dark:text-gray-600"
                        >
                          13 aug 2016
                        </span>
                      </div>

                      <div className="ml-6 flex">
                        <svg
                          className="h-5 w-5 fill-current
											dark:text-gray-600"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M13 2.05v2.02c3.95.49 7 3.85 7
												7.93 0 3.21-1.92 6-4.72 7.28L13
												17v5h5l-1.22-1.22C19.91 19.07 22
												15.76 22
												12c0-5.18-3.95-9.45-9-9.95M11
												2c-1.95.2-3.8.96-5.32 2.21L7.1
												5.63A8.195 8.195 0 0111 4V2M4.2
												5.68C2.96 7.2 2.2 9.05 2
												11h2c.19-1.42.75-2.77
												1.63-3.9L4.2 5.68M6
												8v2h3v1H8c-1.1 0-2 .9-2
												2v3h5v-2H8v-1h1c1.11 0 2-.89
												2-2v-1a2 2 0 00-2-2H6m6
												0v5h3v3h2v-3h1v-2h-1V8h-2v3h-1V8h-2M2
												13c.2 1.95.97 3.8 2.22
												5.32l1.42-1.42A8.21 8.21 0 014
												13H2m5.11 5.37l-1.43 1.42A10.04
												10.04 0 0011 22v-2a8.063 8.063 0
												01-3.89-1.63z"
                          ></path>
                        </svg>
                        <span
                          className="ml-2 text-sm capitalize
											text-gray-600 dark:text-gray-600"
                        >
                          21 hours
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 flex">
                      <button
                        className="dark-hover:text-gray-200 ml-4 flex
										select-none items-center rounded-full
										border border-blue-500 py-2 px-6
										leading-none hover:bg-blue-400
										hover:text-white focus:outline-none
										dark:border-blue-600"
                      >
                        <svg
                          className="mr-2 h-5 w-5 fill-current
											text-blue-600"
                          viewBox="0 0 576 512"
                        >
                          <path
                            d="M402.3 344.9l32-32c5-5
												13.7-1.5 13.7 5.7V464c0 26.5-21.5
												48-48 48H48c-26.5
												0-48-21.5-48-48V112c0-26.5
												21.5-48 48-48h273.5c7.1 0 10.7
												8.6 5.7 13.7l-32 32c-1.5 1.5-3.5
												2.3-5.7
												2.3H48v352h352V350.5c0-2.1.8-4.1
												2.3-5.6zm156.6-201.8L296.3
												405.7l-90.4 10c-26.2
												2.9-48.5-19.2-45.6-45.6l10-90.4L432.9
												17.1c22.9-22.9 59.9-22.9 82.7
												0l43.2 43.2c22.9 22.9 22.9 60 .1
												82.8zM460.1 174L402 115.9 216.2
												301.8l-7.3 65.3 65.3-7.3L460.1
												174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8
												0L436 82l58.1 58.1
												30.9-30.9c4-4.2 4-10.8-.1-14.9z"
                          ></path>
                        </svg>
                        <span>삭제</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="-mt-10 mr-20 flex flex-col">
                  <span
                    className="font-semibold text-gray-600
								dark:text-gray-600"
                  >
                    Ordered
                  </span>
                  <span
                    className="font-semibold text-gray-600
								dark:text-gray-600"
                  >
                    200 $
                  </span>
                  <span
                    className="mt-2 text-sm text-gray-700
								dark:text-gray-700"
                  >
                    300,00kr
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PointUsed
