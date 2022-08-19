import React from 'react';

const Cafeinfo = () => {
  const instagram = "https://www.instagram.com/"
  const map = "https://map.naver.com/v5/search/"
  const url = "yangwoongbee"
  const address = "경기도 김포시 운양동 김포한강11로 37"
  const store = "DROP COFFE"
  return (
    <>
          <div className="flex flex-col gap lg:flex-row ">
        <div className="h-full w-full bg-red-800">
          <div className="flex h-full my-5 flex-col justify-center lg:mr-[100px] lg:flex-row">
            <img
              className="my-5 mx-auto h-[200px] w-[50px] min-w-[200px] lg:my-auto lg:mx-[99px]"
              src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Fc1%2Fd3%2F45%2Fc1d34538d187fe7c375d0a1407800194.jpg&type=sc960_832"
            />
            <div className="items-center font-extrabold text-white  lg:my-auto">
              <div className="lg:mx-0 mx-auto my-10 w-80 items-center justify-center text-center text-4xl  lg:w-[400px] lg:text-start">
                <p className=''>{store}</p>
              </div>
              <div className="mx-auto mb-5 w-80 text-center font-semibold text-lg text-gray-400 lg:mx-0 lg:w-[450px] lg:text-2xl lg:font-normal">
              <div className="mt-5">
              <div className="mx-auto flex flex-row items-center">
                <svg className="mr-3 h-[24px] w-[24px] overflow-visible fill-current	text-gray-400">
                  <path d="M11.508 19.22c-.667-.918-1.335-1.888-1.956-2.863-.432-.676-.826-1.33-1.175-1.956-1.037-1.857-1.617-3.357-1.617-4.308 0-2.984 2.297-5.31 5.24-5.31s5.24 2.326 5.24 5.31c0 .95-.58 2.45-1.617 4.31-.35.624-.743 1.28-1.175 1.955-.62.975-1.29 1.945-1.956 2.864-.174.24-.34.465-.492.67-.153-.205-.318-.43-.492-.67zm6.732-9.128c0-3.533-2.743-6.31-6.24-6.31-3.497 0-6.24 2.777-6.24 6.31 0 1.173.628 2.796 1.744 4.796.36.644.763 1.315 1.204 2.007.634.993 1.312 1.98 1.99 2.913.238.327.458.625.656.887l.252.33c.2.256.588.256.788 0l.252-.33c.198-.262.418-.56.656-.887.678-.934 1.356-1.92 1.99-2.913.44-.692.845-1.363 1.204-2.007 1.116-2 1.744-3.623 1.744-4.796z"></path>
                  <path d="M12 13.425c1.592 0 2.88-1.303 2.88-2.908s-1.288-2.91-2.88-2.91c-1.592 0-2.88 1.305-2.88 2.91 0 1.605 1.288 2.908 2.88 2.908zm0-1c-1.037 0-1.88-.853-1.88-1.908 0-1.056.843-1.91 1.88-1.91s1.88.854 1.88 1.91c0 1.055-.843 1.908-1.88 1.908z"></path>
                </svg>
                <p className="text-gray-400"onClick={() => window.open(`${map}${address}`)}>{address}</p>
              </div>
              <div className="flex items-center w-auto">
                <img
                  className="ml-1 mr-3 w-4 "
                  src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2016/png/iconmonstr-instagram-11.png&r=138&g=138&b=138"
                ></img>
                <button className="text-gray-400 underline truncate" onClick={() => window.open(`${instagram}${url}`)}>
                  @{url}
                </button>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cafeinfo;