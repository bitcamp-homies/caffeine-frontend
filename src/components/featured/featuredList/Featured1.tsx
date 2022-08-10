import React from 'react';
import data from "../featuredData";

const Featured1 = () => {
  const dataList = data.filter(item => item.seq < 2);
  const dataShow = dataList.map(item => (
    <div key={item.seq} className="basis-[60%]">
    <img className="" src={item.img} />
    <div className="p-5 h-[250px] text-center text-white mb-5 bg-pink-300">
      <p className="font-bold text-2xl">{item.header}</p>
      <p className='mt-5 text-xl'>{item.footer}</p>
      <button className='mt-5 rounded-3xl w-[130px] font-semibold border-white border-2 p-2'>Order now</button>
    </div>
  </div>
  ));

  return (
    <div>
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 sm:flex-row sm:items-center sm:justify-center">
        {dataShow}
      </div>
    </div>
  );
};

export default Featured1;