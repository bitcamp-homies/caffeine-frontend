// @ts-nocheck
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { listAllMybatis } from 'store/api';
import CafesDetailContainer from './CafesDetailContainer';
import LocaContainer from './LocaContainer';

const AllCafesLocation = () => {
  const [address, setAddress] = useState('')
  const { data, status, isFetching, isLoading, isSuccess } = useQuery(
    'listAllMybatis',
    listAllMybatis,
  )
  return (
    <div>
      <div className="flex flex-row gap-4">
        <div className="basis-1/4 hidden lg:block">
        <LocaContainer  setAddress={setAddress}/>
        </div>
        <div className="basis-full font-semibold pb-4">
         {isSuccess && <CafesDetailContainer data={data?.data.filter((item) => item.address2 == address)} isSuccess ={isSuccess} address={address}/>}
        </div>
      </div>
    </div>
  );
};

export default AllCafesLocation;