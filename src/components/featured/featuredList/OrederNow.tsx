import React from 'react';


const OrederNow = () => {
  return (
    <>
      <div className="flex flex-col gap-10 lg:flex-row ">
        <div className='h-auto w-full bg-[#1f3933]'>
          <div className='flex lg:flex-row flex-col items-center'>
            <img className='mx-10 h-[332px]' src="https://globalassets.starbucks.com/assets/a81d75c9b8914b00912006411fa2f095.jpg?impolicy=1by1_wide_topcrop_630"></img>      
            <div className='font-extrabold items-center text-white'>
              <div className='mx-auto w-[500px] my-10 lg:text-start text-center  justify-center text-4xl'>
                <p>Pineapple Passionfruit Starbucks Refreshers® Beverage</p>
              </div>
              <div className='w-[500px] font-light lg:text-start text-center text-2xl text-gray-500'>
                <span>80 calories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrederNow;