//@ts-nocheck
import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const KakaoResult = () => {
  const {cafe_id, product_id} = useParams()
  const nowLocation = window.location.href
  const token = nowLocation.split("=")[1];
  const tid = localStorage.getItem("tid")
  console.log(cafe_id);
  console.log(product_id);
useEffect(()=>{
  axios({
    url: "https://kapi.kakao.com/v1/payment/approve",
    method: "POST",
    headers: {
      Authorization: "KakaoAK cd251696592fb923e36df2bf69696745",
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    params:{
    tid : tid,
    cid : "TC0ONETIME",
    "partner_order_id" : "partner_order_id",
    "partner_user_id" : "partner_user_id",
    pg_token : token,
    }
  }).then((response) => {
    consol.log(response);
  });
},[])
  const nextBtn = () => {
    opener.parent.location=`${process.env.REACT_APP_THUMBS_REACT_ADDRESS}/order/featured/order-now/cafe/${cafe_id}/product/${product_id}/payment/paymenting/2`;
    window.close()
  }
  return (
    <div>
      <div className="text-center my-28">
        <p className="font-bold text-2xl">결제가 완료되었습니다.</p>
        <button className="mt-4 border p-5 text-xl rounded-2xl" onClick={nextBtn}>버튼을 누르시면 다음화면으로 이동합니다.</button>
      </div>
    </div>
  );
};

export default KakaoResult;
// class KakaoResult extends React.Component {
//   constructor(props) {
//     super(props);
//     const { params } = this.state;
//     const {
//       location: { search },
//     } = props;

//     // url에 붙어서 온 pg_token을 결제 API에 줄 params에 할당
//     params.pg_token = search.split("=")[1];
//   }

//   state = {
//     params: {
//       cid: "TC0ONETIME",
//       // localstorage에서 tid값을 읽어온다.
//       tid: window.localStorage.getItem("tid"),
//       partner_order_id: "partner_order_id",
//       partner_user_id: "partner_user_id",
//       pg_token: "",
//     },
//   };

//   componentDidMount() {
//     const { params } = this.state;

//     axios({
//       url: "/v1/payment/approve",
//       method: "POST",
//       headers: {
//         Authorization: "KakaoAK cd251696592fb923e36df2bf69696745",
//         "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
//       },
//       params,
//     }).then((response) => {
//       // 결제 승인에 대한 응답 출력
//       localStorage.setItem("씨발",response);
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h2>Result page</h2>
//       </div>
//     );
//   }
// }
// export default KakaoResult;