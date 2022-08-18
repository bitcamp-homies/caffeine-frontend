import React from 'react';
import { Link } from 'react-router-dom';

const Cafes = () => {
  return (
   
    <div className="grid grid-cols-1 text-xs pt-5 gap-4 md:grid-cols-2 md:text-sm w-auto"> {/* axios 작업분량 */}
      <Link to="../cafes/menu">
      <div className="flex flex-row gap-3 bg-white h-20 items-center md:h-28">
        <img className="object-fill rounded-full h-20 w-20 md:h-28 md:w-28" src="https://modo-phinf.pstatic.net/20191117_101/15739932413125YWd4_PNG/mosawUb5vX.png?type=f320_320"></img>
        <div className="flex flex-col gap-1">
        <p>에이쓰리바우트커피</p>
        <p>대표 메뉴 </p>
        </div>
      </div>
      </Link>
      <Link to="../cafes/menu">
      <div className="flex flex-row gap-3 bg-white h-20 items-center md:h-28">
        <img className="object-fill rounded-full h-20 w-20 md:h-28 md:w-28" src="https://blog.kakaocdn.net/dn/b2dbIm/btrmNnzEqgO/286Zb8ce0Wh4rwqQvYCik0/img.jpg"></img>
        <div className="flex flex-col gap-1">
        <p>에이비 카페</p>
        <p>대표 메뉴 </p>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Cafes;
