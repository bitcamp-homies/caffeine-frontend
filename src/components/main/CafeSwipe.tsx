import React from 'react';
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import app from 'api/firebase';



const CafeSwipe = () => {
  //Firebase 불러오기 (import from "firebase/storage")
  app.automaticDataCollectionEnabled // Initialize firebase
  const storage = getStorage() //
  
  // 이미지 URL 불러오기
  const gsReference = ref(storage, 'gs://bitcamp-caffeine.appspot.com/cafe/seoul/gangnam/a3boutcoffee/gangnam-a3boutcoffee-1.jpg')
  const gsReference2 = ref(storage, 'gs://bitcamp-caffeine.appspot.com/cafe/seoul/gangnam/a3boutcoffee/gangnam-a3boutcoffee-profile.jpg')
  
  // getDownloadURL() 메서드는 Promise를 호출함에 따라 .then으로 반환된 URL(string)을 가공해야함
  getDownloadURL(gsReference).then((img) => {
    const imgUrl = document.getElementById("img1")
    imgUrl?.setAttribute('src', img)
  })
  /*
  개선사항: setAttribute가 아닌 jsx(return 내부)에서 반환된 URL값으로 요소를 생성하는 방법을 고안해야할듯...
  */

  return (
    <div id="CafeSwipe" className=''>
      <div className='h-3/5'>
        <img id='img1' className='object-contain h-full w-full' />
      </div>
      <div id='cafe_profile' className='h-2/5'>
        <div id='head' className='flex flex-row' >
          <div id='profile_image' className='border rounded-full'>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CafeSwipe;