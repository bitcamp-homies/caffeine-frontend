import React from 'react';
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import app from 'api/firebase';



const CafeSwipe = () => {
  //Firebase 불러오기 (import from "firebase/storage")
  app.automaticDataCollectionEnabled // Initialize firebase
  const storage = getStorage() //
  
  // 이미지 URL 불러오기
  const gsReference = ref(storage, 'gs://bitcamp-caffeine.appspot.com/cafe/seoul/gangnam/a3boutcoffee/gangnam-a3boutcoffee-1.jpg')
  
  // getDownloadURL() 메서드는 Promise를 호출함에 따라 .then으로 반환된 URL(string)을 가공해야함
  getDownloadURL(gsReference).then((img) => {
    let imgUrl = document.getElementById("img")
    imgUrl?.setAttribute('src', img)
  })
  /*
  개선사항: setAttribute가 아닌 jsx(return 내부)에서 반환된 URL값으로 요소를 생성하는 방법을 고안해야할듯...
  */

  return (
    <div id="CafeSwipe" className=''>
      <img id="img" className='' />
    </div>
  );
};

export default CafeSwipe;