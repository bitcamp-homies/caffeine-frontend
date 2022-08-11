import React from 'react';
import { Route } from 'react-router-dom';
import FeaturedMenu from './featuredList/FeaturedMenu';
import Test from './featuredList/Test';

const Featured = () => {
	return (
		<div>
			<div className='mt-5 mb-10'>
        <p className="font-bold sm:text-5xl text-3xl text-center">Summer essentials</p>
      </div>  
			<div>
				<Test/>
			</div>
		</div>
	);
};

export default Featured;
