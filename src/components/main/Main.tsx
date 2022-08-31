// @ts-nocheck
import { useEffect } from 'react'
import CafeSwipe from './CafeSwipe'
import CafeSwipeContainer from './CafeSwipeContainer'
import FooterContainer from './FooterContainer'
import { useCookies } from "react-cookie";
import axios from 'axios';


const Main = () => {
  const COOKIE_KEY = 'visitMain';
  const [cookies, setCookie, removeCookie] = useCookies([COOKIE_KEY]);

  const setOnedayCookie = () => {
    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 1);
    // console.log('cookie 만료 : ', expireDate);
    setCookie(
      COOKIE_KEY, 'true', {path : '/', expires : expireDate}
    )
    // console.log('쿠키삽입완료');
  }

  const increaseVisit = () => {
    if(!cookies[COOKIE_KEY]){
      setOnedayCookie();
      axios
        .get(`${process.env.REACT_APP_THUMBS_API_ADDRESS}/cafe/increaeVisitMybatis`)
        .then((res) => {})
        .catch((err) => {console.log(err)});

    }else{
      // console.log('이미 방문했던 사람 조회수 증가 안함.');
    }
  }

  useEffect(() => {
    increaseVisit();
  },[])
  
  return (
    <div id="main" className="flex flex-col lg:flex-row">
      <div
        id="leftDiv"
        className="hidden basis-2/5 border-r-[1px] bg-white md:flex"
      >
        <div className="border-b-[1px] px-4 py-4 text-left text-3xl font-bold text-zinc-800 md:border-b-0 md:px-6 md:py-6 lg:mt-40 lg:px-10 lg:py-7 lg:text-center">
          Good morning ☕
        </div>
      </div>
      <div id="rightDiv" className="basis-3/5">
        <CafeSwipeContainer />
      </div>
    </div>
  )
}

export default Main
