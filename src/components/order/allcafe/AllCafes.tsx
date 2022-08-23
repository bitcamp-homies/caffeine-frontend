// @ts-nocheck

import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import CafesContainer from './CafesContainer';
import { CafeProps } from './Interfaces';
import LocaContainer from './LocaContainer';
import { listAllMybatis } from 'store/api'; 
import { useQuery } from 'react-query';
//AllCafes : Parent
//Cafes Container : Child
//cafesRsc.Cafes : Grand Child 
const AllCafes = () => {
  const [cafesData, setCafesData] = useState<CafeProps[]>([])
  const [address, setAddress] = useState('')
  
  return (
    <div>
      <div className="flex flex-row gap-4">
        <div className="basis-1/4 hidden lg:block">
        <LocaContainer setAddress={setAddress}/>
        </div>
        <div className="basis-full font-semibold pb-4">
          <CafesContainer />
        </div>
      </div>
    </div>
  );
};


export default AllCafes;