// @ts-nocheck

import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import CafesContainer from './CafesContainer';
import { CafeProps } from './Interfaces';
import LocaContainer from './LocaContainer';
//AllCafes : Parent
//Cafes Container : Child
//cafesRsc.Cafes : Grand Child 
const AllCafes = () => {
  const [cafesData, setCafesData] = useState<CafeProps[]>([])
 
  useEffect(() => {
    axios
      .get<CafeProps[]>('http://localhost:8080/cafe/listAllMybatis')
      .then((response: AxiosResponse) => {
        setCafesData(response.data)
      })
  }, [])

  return (
    <div>
      <div className="flex flex-row gap-4">
        <div className="basis-1/4 hidden lg:block">
          <LocaContainer />
        </div>
        <div className="basis-full font-semibold pb-4">
          <CafesContainer {...cafesData}/>
        </div>
      </div>
    </div>
  );
};


export default AllCafes;