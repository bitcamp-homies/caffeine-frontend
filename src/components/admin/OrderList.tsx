//@ts-nocheck
import React from 'react'
import { useQuery } from 'react-query'
import { getOrderList } from 'store/api'
import OrderListItem from './OrderList/OrderListItem'

const OrderList = () => {
  const user_id = sessionStorage.getItem('User_id')

  const {
    data: orderData,
    isSuccess,
    isError,
    isLoading,
  } = useQuery(['getOrderList', user_id], () => getOrderList(user_id))

  const orderList = isSuccess && orderData.data.filter(
    (item) => user_id == item.user_id
  )

  return (
    <div>
      <main className="flex-1 overflow-y-auto bg-gray-200 transition duration-500	ease-in-out dark:bg-white">
        <div className="py-5 px-5 text-gray-500 transition duration-500	ease-in-out dark:text-gray-500">
          <div className="mt-1 mb-4 flex items-center justify-between">
            <div className="flex flex-row gap-96">
              <h2 className="text-lg font-medium capitalize">주문 내역</h2>
            </div>
          </div>

          <div
            className="border transition duration-500 ease-in-out
				dark:border-gray-700"
          ></div>
          {isSuccess &&
            orderList.map((item) => (
              <OrderListItem key={item.payment_num} orderData={item}/>
            ))}
        </div>
      </main>
    </div>
  )
}

export default OrderList
