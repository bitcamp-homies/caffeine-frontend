import React from 'react';
import { Route } from 'react-router-dom';
import FeaturedMenu from './featuredList/FeaturedMenu';

const Featured = () => {
	return (
		<div>
			<div className='mt-5 mb-10'>
        <p className="font-bold sm:text-5xl text-3xl text-center">Summer essentials</p>
      </div>  
			<div>
				<FeaturedMenu/>
			</div>
		</div>
	);
};

export default Featured;
