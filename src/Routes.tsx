//@ts-nocheck
import App from 'App'
import Cardheader from 'components/cards/Cardheader'
import Main from 'components/main/Main'
import AllCafes from 'components/order/allcafe/AllCafes'
import AllCafesLocation from 'components/order/allcafe/AllCafesLocation'
import AllDetails from 'components/order/allproduct/AllDetails'
import AllProducts from 'components/order/allproduct/AllProducts'
import Featured from 'components/order/featured/Featured'
import OrderNow from 'components/order/featured/OrederNow'
import Order from 'components/order/Order'
import FindStore from 'components/stores/FindStore'
import Payment from 'components/order/featured/Payment'

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MemberWrite from 'components/member/memberwrite'
import CafeCoordManage from 'components/stores/CafeCoordManage'
import Gift from 'components/cards/Gift'
import Point from 'components/cards/Point'
import Join from 'components/cards/Join'
import CardList from 'components/cards/CardList'
import WriteSelect from 'components/member/WriteSelect'
import BusinessWrite from 'components/member/BusinessWrite'
import AdminContainer from 'components/admin/AdminContainer'
import CafeAdminPage from 'components/admin/CafeAdminPage'
import LikeList from 'components/admin/LikeList'
import OrderedList from 'components/admin/OrderedList'
import OrderList from 'components/admin/OrderList'
import PointUsed from 'components/admin/PointUsed'
import Profile from 'components/admin/Profile'
import Etc from 'components/admin/etc'
import KakaoResult from 'components/order/featured/paymentList/kakaoAPI/KakaoResult'
import PaymentComplete from 'components/order/featured/PaymentComplete'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route index element={<Main />} />

      <Route path="admin" element={<AdminContainer />}>
        <Route path="CafeAdminPage" element={<CafeAdminPage />} />
        <Route path="LikeList" element={<LikeList />} />
        <Route path="OrderedList" element={<OrderedList />} />
        <Route path="OrderList" element={<OrderList />} />
        <Route path="PointUsed" element={<PointUsed />} />
        <Route path="Profile" element={<Profile />} />
      </Route>

      <Route path="order" element={<Order />}>
        <Route path="cafes" element={<AllCafes />} />
        <Route path="cafes/:address2" element={<AllCafesLocation />} />
        <Route path="cafes/menu/:cafe_id" element={<AllProducts />} />

        <Route
          path="cafes/menu/:cafe_id/Drinks/:menu"
          element={<AllDetails />}
        />
        <Route path="featured">
          <Route index element={<Featured />} />
          <Route path="order-now/cafe/:cafe_id">        
            <Route path="product/:product_id" element={<OrderNow />} />
            <Route path="product/:product_id/payment/:totalPrice" element={<Payment />}/>
            <Route path="product/:product_id/payment/:totalPrice/paymentcomplete" element={<PaymentComplete/>} />
          </Route>
        </Route>


      


        <Route path="cards" element={<Cardheader />}>
          <Route path="gift" element={<Gift />} />
          <Route path="point" element={<Point />} />
          <Route path="list" element={<CardList />} />
        </Route>
      </Route>

      <Route path="/store" element={<FindStore />} />
      <Route path="member" element={<WriteSelect />} />
      <Route path="member/memberwrite" element={<MemberWrite />} />
      <Route path="member/businesswrite" element={<BusinessWrite />} />
      <Route path="/store/:cafename" element={<FindStore />}></Route>
      <Route path="coord" element={<CafeCoordManage />}></Route>
      <Route path="login" element={<Join />}></Route>
    </Routes>
  )
}

export default MainRoutes
