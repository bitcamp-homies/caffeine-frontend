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
    <div className='ml-4 flex flex-row'>
      <div className='flex flex-col w-96 h-128'>
      {
        cafename === undefined ?
        <SearchPlace setPlace={setPlace}/> :
        <CafeDetail/>
      }
      </div>
      <div className='w-full h-full flex items-stretch'>
        <MapContainer searchPlace={place} />
      </div>
    </div>
    </>
  );
};

export default FindStore;