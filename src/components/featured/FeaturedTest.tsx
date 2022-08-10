import React from 'react';

const FeaturedTest = () => {
  return (
    <>
      <div className='mt-5 mb-10'>
        <p className="font-bold sm:text-5xl text-3xl text-center">Summer essentials</p>
      </div>  

      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 sm:flex-row sm:items-center sm:justify-center">
        <div className="basis-[60%]">
          <img className="" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78738.jpg" />
          <div className="p-5 h-[250px] text-center text-white mb-5 bg-pink-300">
            <p className="font-bold text-2xl">New Pineapple Passionfruit Starbucks Refreshers® beverage</p>
            <p className='mt-5 text-xl'>A bright blend of pineapple and passionfruit flavors with real diced pineapple</p>
            <button className='mt-5 rounded-3xl w-[130px] font-semibold border-white border-2 p-2'>Order now</button>
          </div>
        </div>
        
        <div className="basis-[60%]">
          <img className="" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78739.jpg" />
          <div className="p-5 h-[250px] text-center text-white mb-5 bg-pink-300">
            <p className="font-bold text-2xl">New Starbucks® Paradise Drink</p>
            <p className='mt-5 text-xl'>coconutmilk meets pineapple and passionfruit flavors plus real diced pineapple</p>
            <button className='mt-5 rounded-3xl w-[130px] font-semibold border-white border-2 p-2'>Order now</button>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 sm:flex-row sm:items-center sm:justify-center">
        <div className="basis-[60%]">
          <img className="" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78745.jpg" />
          <div className="p-5 h-[250px] text-center text-white mb-5 bg-red-400">
            <p className="font-bold text-2xl">New Chocolate Cream Cold Brew</p>
            <p className='mt-5 text-xl'>Our super-smooth cold brew is finished with silky, chocolaty cold foam.</p>
            <button className='mt-5 rounded-3xl w-[130px] font-semibold border-white border-2 p-2'>Order now</button>
          </div>
        </div>
        
        <div className="basis-[60%]">
          <img className="" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78746.jpg" />
          <div className="p-5 h-[250px] text-center text-white mb-5 bg-red-400">
            <p className="font-bold text-2xl">Vanilla Sweet Cream Cold Brew</p>
            <p className='mt-5 text-xl'>A float of house-made vanilla-flavored sweet cream tops our signature cold brew.</p>
            <button className='mt-5 rounded-3xl w-[130px] font-semibold border-white border-2 p-2'>Order now</button>
          </div>
        </div>
      </div>
      
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 sm:flex-row sm:items-center sm:justify-center">
        <div className="basis-[60%]">
          <img className="" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78752.jpg" />
          <div className="p-5 h-[250px] text-center mb-5 bg-sky-200">
            <p className="font-bold text-2xl">Mocha Cookie Crumble Frappuccino® blended beverage</p>
            <p className='mt-5 text-xl'>Coffee, milk and ice join mocha sauce, Frappuccino® chips and a cookie-crumble topping. ​</p>
            <button className='mt-5 rounded-3xl w-[130px] font-semibold border-black border-2 p-2'>Order now</button>
          </div>
        </div>
        
        <div className="basis-[60%]">
          <img className="" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78753.jpg" />
          <div className="p-5 h-[250px] text-center mb-5 bg-sky-200">
            <p className="font-bold text-2xl">Caramel Ribbon Crunch Frappuccino® blended beverage​</p>
            <p className='mt-5 text-xl'>A blend of coffee, milk and ice with dark caramel sauce and a crunchy caramel-sugar topping.​</p>
            <button className='mt-5 rounded-3xl w-[130px] font-semibold border-black border-2 p-2'>Order now</button>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 sm:flex-row sm:items-center sm:justify-center">
        <div className="basis-[60%]">
          <img className="" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78759.jpg" />
          <div className="p-5 h-[250px] text-center text-white mb-5 bg-green-800">
            <p className="font-bold text-2xl">New Cookies & Cream Cake Pop</p>
            <p className='mt-5 text-xl'>Chocolate cake and crumbled cookies dipped in white chocolaty icing and topped with cookie crumbs.</p>
            <button className='mt-5 rounded-3xl w-[130px] font-semibold border-white border-2 p-2'>Order now</button>
          </div>
        </div>
        
        <div className="basis-[60%]">
          <img className="" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78760.jpg" />
          <div className="p-5 h-[250px] text-center text-white mb-5 bg-green-800">
            <p className="font-bold text-2xl">New Lime-Frosted Coconut Bar​</p>
            <p className='mt-5 text-xl'>Moist and chewy with lime frosting and white chocolaty drizzle sprinkled with dried coconut.​</p>
            <button className='mt-5 rounded-3xl w-[130px] font-semibold border-white border-2 p-2'>Order now</button>
          </div>
        </div>
      </div>
    

    </>
  );
};

export default FeaturedTest;