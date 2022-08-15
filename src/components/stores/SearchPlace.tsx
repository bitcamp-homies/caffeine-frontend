import React, { useState } from 'react';
import CafeList from './CafeList';
import MapContainer from './MapContainer';
import axios from 'axios';

type cafeData = {
  insta_account : string,
  cafe_name : string,
  address1 : string,
  address2 : string,
  address3 : string,
  address4 : string,
  about : string,
  subfolder: string
}

type setPlaceType = {
  setPlace : any
}

const SearchPlace = ({setPlace}: setPlaceType) => {
const [inputText, setInputText] = useState<string>("");
const [data, setData] = React.useState<cafeData[]>([]);

//데이터 로딩
React.useEffect(
  () => {
    axios.get(`http://localhost:8080/cafe/listAll`)
    .then(
      (res) => {
        setData(res.data);
      }
    )
    .catch(
      (err) => {
        console.log(err);
      }
    )
  }, [])

const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setPlace(inputText);
  setInputText("");
};

const onChange = (event:React.FormEvent<HTMLInputElement>) => {
  setInputText(event.currentTarget.value);
}

const filterdData = data.filter((data:cafeData) => {
  return data.cafe_name.toLowerCase().includes(inputText.toLowerCase());
});

  return (
      <div className='flex flex-col basis-2/5 h-128'>
        <form className="px-5 inputForm " onSubmit={handleSubmit}>
          <div className='border-b-2 border-gray-400 inline-block my-6'>
            <input
              placeholder="Find a store"
              onChange={onChange}
              value={inputText}
              className="outline-0 w-56"
            />
            <button><img className='w-4 h-4 mr-4' src='img/search_icon.png' alt='search_icon'/></button>
          </div>
          <button className='ml-4 border-green-800 border-2 rounded-full text-green-800 w-16 text-center h-8' type="submit">Filter</button>
        </form>
        <div className='hidden'>
        <MapContainer searchPlace={setPlace} />
        </div>
        <CafeList data={filterdData} />
      </div>
  );
};

export default SearchPlace;