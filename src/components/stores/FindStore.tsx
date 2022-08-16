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
      {
        cafename === undefined ?
        <>
          <SearchPlace place={place} setPlace={setPlace}/>
          <div className='hidden lg:basis-3/5 lg:flex items-stretch'>
            <MapContainer searchPlace={place} />
          </div>
        </>
        :
        <CafeDetail/>
      }
    </div>
    </>
  );
};

export default FindStore;