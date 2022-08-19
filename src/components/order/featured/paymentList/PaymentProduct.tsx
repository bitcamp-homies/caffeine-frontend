import React from 'react';

const PaymentProduct = () => {
  return (
    <div className="flex flex-row justify-center gap-10 lg:gap-20">
          <div>
            <img
              className="my-5 ml-5 h-[150px] w-[150px]"
              src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Fc1%2Fd3%2F45%2Fc1d34538d187fe7c375d0a1407800194.jpg&type=sc960_832"
            />
          </div>
          <div className="my-auto flex flex-col">
            <span className="text-xs font-bold lg:text-base lg:mr-0 mr-2">
              카라멜 리본 크런치 프라푸치노 블렌디드 베버리지
            </span>
            <span className="text-xs font-bold lg:text-base">
              선택 수량 : 5
            </span>
            <span className="text-xs font-bold lg:text-base">금액 : 30000</span>
          </div>
        </div>
  );
};

export default PaymentProduct;