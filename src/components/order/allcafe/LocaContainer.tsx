import React from 'react';
import Locations from './filterRsc/Locations';

const LocaContainer = () => {
  return (
    <div className="flex flex-col gap-4 text-center px-3 pt-5 font-semibold">
      <div className="bg-white pt-5 text-xl">Seoul
      <Locations/>
      </div>
      <div className="bg-white pt-5 text-xl">Jeju
      <Locations/>
      </div>
   </div>
  
  );
};

export default LocaContainer;