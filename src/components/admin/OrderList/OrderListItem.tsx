//@ts-nocheck
import React from 'react'
import { useQuery } from 'react-query'
import { deleteOrderList, listAllMybatis } from 'store/api'

const OrderListItem = ({ orderData }) => {
  const { data, isSuccess } = useQuery('listAllMybatis', listAllMybatis)
  const qs = require("qs");
  const cafe_data = data?.data.filter(
    (item) => item.cafe_id == orderData.cafe_id,
  )
  const getDate = orderData.create_At.split('T');
  const deleteList = {
    payment_num : orderData.payment_num
  }
  const deleteBtn = () => {
      alert("삭제 되었습니다.");
      deleteOrderList(qs.stringify(deleteList));
  }
  return (
    <div className="">
      <div className="mt-2 flex flex-col">
        <div className="mt-2 flex flex-row">
          <div
            className="flex w-full items-center justify-between rounded-2xl
						bg-white px-8 py-6 dark:bg-gray-200"
          >
            <div className="flex">
              {isSuccess &&
                cafe_data.map((item) => {
                  const profile =
                    'https://storage.cloud.google.com/bitcamp-caffeine.appspot.com' +
                    item.file_path +
                    item.img_file.split(',').splice(-1, 1)
                  return (
                    <img
                      key={item.cafe_id}
                      className="h-12 w-12 rounded-full object-cover"
                      src={profile}
                      alt="user avatar"
                      loading="lazy"
                    />
                  )
                })}

              <div className="ml-6 flex flex-col">
                <span className="text-lg font-bold">아아</span>
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
                      {isSuccess && cafe_data[0].cafe_name}
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
                      {getDate[0]}
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
                    <span onClick={deleteBtn}>삭제</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="-mt-10 mr-20 flex flex-col">
              <span
                className="font-semibold text-gray-600
								dark:text-gray-600"
              >
                {orderData.purchase_way == 1
                  ? '포인트 결제'
                  : '카카오페이 결제'}
              </span>
              <span
                className="font-semibold text-gray-600
								dark:text-gray-600"
              >
                {orderData.total_price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderListItem
