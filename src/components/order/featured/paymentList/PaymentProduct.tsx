// @ts-nocheck
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getCafesMenusAll } from 'store/api';


const PaymentProduct = ({cafe_id, product_id}) => {
  console.log(product_id);
  console.log(cafe_id);
  let a;
  const {data : productdata,isSuccess,isError,isLoading} = useQuery(
    ['getCafeProductList',cafe_id],
    () => getCafesMenusAll(cafe_id),
  )

  productdata?.data.map((item, index)=>{
    const name = sessionStorage.getItem(`recomendedProductName${item.name_kor}`);
    const price = sessionStorage.getItem(`recomendedProductPrice${item.name_kor}`);
    const count = sessionStorage.getItem(`recomendedCount${item.name_kor}`);
    const size = sessionStorage.getItem(`recomendedSize${item.name_kor}`);
    const sizePrice = sessionStorage.getItem(`recomendedSizePrice${item.name_kor}`); 
    <div className="flex flex-row justify-center gap-10 lg:gap-20">
          <div>
            <img
              className="my-5 ml-5 h-[150px] w-[150px]"
              src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Fc1%2Fd3%2F45%2Fc1d34538d187fe7c375d0a1407800194.jpg&type=sc960_832"
            />
          </div>
          <div className="my-auto flex flex-col">
            <span className="text-xs font-bold lg:text-base lg:mr-0 mr-2">
              {name}
            </span>
            <span className="text-xs font-bold lg:text-base">
              선택 수량 : {count}
            </span>
            <span className="text-xs font-bold lg:text-base">금액 : {sizePrice + price}</span>
          </div>
        </div>
  });
  
  return (
    <>
    </>
  );
};

export default PaymentProduct;