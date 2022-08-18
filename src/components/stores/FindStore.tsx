//@ts-nocheck

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CafeDetail from './CafeDetail';
import MapContainer from './MapContainer';

import SearchPlace from './SearchPlace';


const FindStore = () => {

  const {cafename} = useParams();

  const [place, setPlace] = useState("");

  return (
    <>
    <div className='ml-4 flex flex-col-reverse lg:flex-row'>
      {
        cafename === undefined ?
        <>
          <SearchPlace place={place} setPlace={setPlace}/>
        </>
        :
        <CafeDetail/>
      }
      <div className='lg:basis-full lg:flex lg:ml-0 -ml-64 items-stretch'>
        <MapContainer searchPlace={place} />
      </div>
    </div>
    </>
  );
};

export default FindStore;