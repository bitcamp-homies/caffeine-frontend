<<<<<<< HEAD
//@ts-nocheck

import { useState } from 'react';
import { useSelector } from 'react-redux';
=======
import React, { useState } from 'react';
>>>>>>> 5ff3439e61f577f5f41ad96b5dfd63d1a965fa60
import CafeList from './CafeList';
import MapContainer from './MapContainer';
import axios from 'axios';

<<<<<<< HEAD

const SearchPlace = ({setPlace}) => {
const [inputText, setInputText] = useState("");

const handleSubmit = (event) => {
=======
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
  place: string,
  setPlace : React.Dispatch<React.SetStateAction<string>>
}

const SearchPlace = (props: setPlaceType) => {
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
>>>>>>> 5ff3439e61f577f5f41ad96b5dfd63d1a965fa60
  event.preventDefault();
  props.setPlace(inputText);
  console.log(props.place);
  setInputText("");
};

<<<<<<< HEAD
const onChange = (event) => {
  setInputText(event.target.value);
};
=======
const onChange = (event:React.FormEvent<HTMLInputElement>) => {
  setInputText(event.currentTarget.value);
}

const filterdData = data.filter((data:cafeData) => {
  return data.cafe_name.toLowerCase().includes(inputText.toLowerCase());
});
>>>>>>> 5ff3439e61f577f5f41ad96b5dfd63d1a965fa60

const cafe = useSelector ( (state) => {
  return state.mainMarkerReducer;
})

  return (
      <div className='lg:flex lg:flex-col lg:basis-2/5 basis-full h-128'>
        <form className="pr-5 pl-14 inputForm " onSubmit={handleSubmit}>
          <div className='text-center lg:text-left'>
            <div className='border-b-2 border-gray-400 inline-block my-6 lg:w-64 w-3/4'>
              <input
                placeholder="Find a store"
                onChange={onChange}
                value={inputText}
                className="outline-0 lg:w-56 w-4/5"
              />
              <button><img className='w-4 h-4 mr-4' src='img/search_icon.png' alt='search_icon'/></button>
            </div>
            <button className='ml-4 border-green-800 border-2 rounded-full text-green-800 w-16 text-center h-8' type="submit">Filter</button>
          </div>
        </form>

          <CafeList data={filterdData} />
      </div>
  );
};

export default SearchPlace;