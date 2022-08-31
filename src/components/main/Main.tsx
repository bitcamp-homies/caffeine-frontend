// @ts-nocheck
import CafeSwipe from './CafeSwipe'
import CafeSwipeContainer from './CafeSwipeContainer'
import FooterContainer from './FooterContainer'

const Main = () => {
  const getTimeWord = () => {
    const nowHour = new Date().getHours()
    if (nowHour >= 4 && nowHour < 12) {
      return 'morning'
    } else if (nowHour >= 12 && nowHour < 18) {
      return 'afternoon'
    } else if (nowHour >= 18 && nowHour < 21) {
      return 'evening'
    } else {
      return 'night'
    }
  }
  return (
    <div id="main" className="flex flex-col lg:flex-row">
      <div
        id="leftDiv"
        className="hidden basis-2/5 border-r-[1px] bg-white md:flex"
      >
        <div className="border-b-[1px] px-4 py-4 text-left text-3xl font-bold text-zinc-800 md:border-b-0 md:px-6 md:py-6 lg:mt-40 lg:px-10 lg:py-7 lg:text-center">
          Good {getTimeWord()} ☕
        </div>
      </div>
      <div id="rightDiv" className="basis-3/5">
        <CafeSwipeContainer />
      </div>
    </div>
  )
}

export default Main
