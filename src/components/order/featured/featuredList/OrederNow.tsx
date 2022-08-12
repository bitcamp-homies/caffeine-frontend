import React, { useState } from 'react';

const [count, setCount] = useState(0);

const OrderNow = () => {
  const plus = () => {
    setCount(count+1);
  }

  const minus = () => {
    setCount(count-1);
  }
  return (
    <>
      <div className="flex flex-col gap-10 lg:flex-row ">
        <div className='h-full w-full bg-[#1f3933]'>
          <div className='mr-[100px] h-full flex lg:flex-row flex-col justify-center'>
            <img className='h-[200px] lg:my-auto my-5 w-[50px] min-w-[200px] lg:mx-[99px] mx-auto' src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Fc1%2Fd3%2F45%2Fc1d34538d187fe7c375d0a1407800194.jpg&type=sc960_832"/>
            <div className='font-extrabold lg:my-auto items-center  text-white'>
              <div className='mx-auto w-[500px] my-10 lg:text-start text-center  justify-center text-4xl'>
                <p>DROP Coffee</p>
              </div>
              <div className='mx-auto mb-5 w-[500px] font-normal lg:text-start text-center text-2xl text-gray-400'>
                <span>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-10 lg:flex-row ">
        <div className='my-10 lg:mx-[150px] mx-auto'>
          <img className='h-[500px] min-w-[500px]' src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fdnvefa72aowie.cloudfront.net%2Forigin%2Farticle%2F202207%2FBD21914A2E3300AF9A241AEF915AE6B47E21CE8AAB402DA1BF4E07BE51CA7BA7.jpg%3Fq%3D95%26s%3D1440x1440%26t%3Dinside&type=sc960_832"/>
          <span>대일씨의 작업공간~</span>
        </div>
        
        <div className='min-w-[500px] lg:my-10 lg:mx-0 mx-auto flex lg:flex-row'>
          <img className='w-[200px] h-[200px] lg:rounded-full shrink-0' src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEwMDFfMjI4%2FMDAxNjMzMDU1ODY3Njg2.Jn8SMnq0EFwD6YPylADAgeIV9UU5-QdtYFpZs3QwGmwg.l1HOtMGRRlBaGftEiO0waU6pYp8fGLwSrMzTQLzZ9BIg.PNG.ziiii0v0iiiiz%2Fimage.png&type=sc960_832"></img>
          <div className='lg:my-10 lg:mx-0 mx-auto'>
            <div className='lg:ml-5 text-2xl font-bold'>아이스 바닐라 라떼</div>
            <div className="lg:ml-5 my-2 text-xl">수량 : {count}</div>
            <button className='lg:ml-5 w-7 border-2 border-black' onClick={plus}>+</button>
            <input className='border-t-2 border-b-2 w-10 text-center border-black' type="number" value={count}/>
            <button className='border-2 w-7 border-black' onClick={minus}>-</button>
          </div>
        </div>
        
        
        
      </div>
      
      <div className=''>얍얍얍</div>
    </>
  );
};

export default OrderNow;