import React from 'react'

const Main = () => {
  return (
    <div id="main" className="flex h-[83.55vh] flex-col lg:flex-row">
      <div id="leftDiv" className="basis-2/5 border-r-[1px] bg-white">
        <div className="border-b-[1px] px-4 py-4 text-left text-3xl font-bold text-zinc-800 md:border-b-0 md:px-6 md:py-6 lg:mt-40 lg:px-10 lg:py-7 lg:text-center">
          Good morning ☕
        </div>
      </div>
      <div id="rightDiv" className="basis-3/5"></div>
    </div>
  )
}

export default Main