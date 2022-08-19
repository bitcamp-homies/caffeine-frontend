import React from 'react';

const PaymentComplete = () => {
  return (
    <>
      <div className="my-7 mx-auto w-[500px] border shadow-2xl">
        <div className="text-center">
          <p className="text-2xl font-bold">주문이 완료되었습니다.</p>
          <p className="text-gray-500">자세한 내용은 마이페이지 에서 확인하세요</p>
          <div className="my-4">
            <img className="mx-auto h-[300px] w-[300px]" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA3MjZfMTgx%2FMDAxNjU4ODQ3MzA2NzY4.xqApvOspCjWKjAA49dmidxWXSXzIp1yeUT9C1ffMxOEg.zz-7KpYAG88ptYRqKrywLyqIrM0PYjvPojNXZxCtqhUg.JPEG.ja394600%2FScreenshot%25A3%25DF20220726%25A3%25AD234458%25A3%25DFPinterest%25A3%25AD01.jpeg&type=sc960_832" />
          </div>
          <div className="mb-4">
            <p className="text-gray-500">아이스 아메리카노</p>
          </div>
        </div>

        <div className="mb-6 text-center">
          <button className="rounded-xl border border-gray-400 p-2">주문 정보 확인하기</button>
          <button className="rounded-xl border border-gray-400 p-2">메인 화면으로 이동</button>
        </div>
      </div>  
    </>
  );
};

export default PaymentComplete;