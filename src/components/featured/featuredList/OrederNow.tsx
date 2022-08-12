import React from 'react';

const OrderNow = () => {
  return (
    <>
      <div className="flex flex-col gap-10 lg:flex-row ">
        <div className='h-auto w-full bg-[#1f3933]'>
          <div className='mr-[100px] flex lg:flex-row flex-col justify-center'>
            <img className='h-[332px] w-[520px] min-w-[520px] lg:mx-0 mx-auto' src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Fc1%2Fd3%2F45%2Fc1d34538d187fe7c375d0a1407800194.jpg&type=sc960_832"/>
            <div className='font-extrabold items-center  text-white'>
              <div className='mx-auto w-[500px] my-10 lg:text-start text-center  justify-center text-4xl'>
                <p>Pineapple Passionfruit Starbucks Refreshers® Beverage</p> 
              </div>
              <div className='mx-auto w-[500px] font-light lg:text-start text-center text-2xl text-gray-500'>
                <span>80 calories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 lg:flex-row ">
        
      </div>
    </>
  );
};

export default OrderNow;