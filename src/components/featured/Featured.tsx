import React from 'react';
import Featured1 from './featuredList/Featured1';
import Featured2 from './featuredList/Featured2';
import Featured3 from './featuredList/Featured3';
import Featured4 from './featuredList/Featured4';

const Featured = () => {
	return (
		<div>
			<div className='mt-5 mb-10'>
        <p className="font-bold sm:text-5xl text-3xl text-center">Summer essentials</p>
      </div>  
			<div>
				<Featured1/>
				<Featured2/>
				<Featured3/>
				<Featured4/>
			</div>
		</div>
	);
};

export default Featured;
