import React from 'react';
import data from "../featuredData";
const Featured2 = () => {
  const dataList = data.filter(item => 2 <= item.seq  && item.seq < 4 )
  const dataShow = dataList.map(item => (
      <div key={item.seq} className="basis-[60%]">
          <img className="" src={item.img} />
          <div className="p-5 h-[250px] text-center text-white mb-5 bg-red-400">
            <p className="font-bold text-2xl">{item.header}</p>
            <p className='mt-5 text-xl'>{item.footer}</p>
            <button className='mt-5 rounded-3xl w-[130px] font-semibold border-white border-2 p-2'>Order now</button>
          </div>
        </div>
  ));
  return (
    <>
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 sm:flex-row sm:items-center sm:justify-center">
        {dataShow}
      </div>
    </>
  );
};

export default Featured2;