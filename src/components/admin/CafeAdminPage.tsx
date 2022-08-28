// @ts-nocheck

//사진, 카페명, 인스타 아이디, 주소, 소개글 ,메 뉴 추가, 5. 오더 받기/ 안 받기
import React, { useEffect, useState } from 'react'
import AddingMenu from './AddingMenu'
import {ref,getStorage, uploadBytesResumable, uploadBytes,getMetadata,deleteObject} from 'firebase/storage'
import firebase from 'api/firebase'
import { getMember } from 'store/api'
import { InsertProfileimg,selectProfileimg,updateProfileimg} from 'store/api'
const CafeAdminPage = (e) => {
  firebase.app
  const [imgdata,SetImgdata] = useState('')
  const [firebaseimgname,SetFireBaseImgName] = useState('')
  const [file,setFile] = useState('')
  const [user,Setuser] = useState([])
  const [profileimg,SetProfileImg] = useState([])
  const [imgfileList,SetImgFileList] = useState([])
  const [imgfileListName,SetImgFileListName] = useState([])
  const storage = getStorage()
  const Id = sessionStorage.getItem('Id')


  const getMemberdata = {
    'user_id' : Id
  }
  const qs = require('qs');
  useEffect(()=>{
    getMember(qs.stringify(getMemberdata))
    .then(res =>{
      Setuser(res.data)
      const userdata ={
        user_id : res.data.user_id
      }
      selectProfileimg(qs.stringify(userdata))
      .then(res => SetProfileImg(res.data))
      } 
    ) 
  },[imgdata])
  const saveFileImage = (e) => {

    setFile(e.target.files[0])
    SetFireBaseImgName(e.target.files[0].name)
    SetImgdata(URL.createObjectURL(e.target.files[0]))
  }
  const imgList = (e) => {
    SetImgFileList([... e.target.files])

  }

  /*     const mountainsRef = ref(storage, `/test/${firebaseimgname}`)
  uploadBytesResumable(mountainsRef) */
  let imgname = firebaseimgname.split('.')
  let imgname1 = imgname[0]+'-profile'
  let imgname2 = imgname1+'.'+imgname[1] //프로필 이미지 뒤에 글자 붙이기
  

  const metaData = {
    contentType : file.type
  }


  const InsertProfileimgdata ={
    path : `/profile/${user.user_id}/`,
    img :  imgname2,
    user_id : user.user_id
  }

  const save = () => {


    //실제 firebase에 새로 올라가는 파일
    const mountainsRef = ref(storage, `/profile/${user.user_id}/${imgname2}`)//파일명 및 경로 지정
    //기존에 firebase에 올라가있는 파일 삭제 
    if(profileimg == ''){
      uploadBytesResumable(mountainsRef,file,metaData)//실제 업로드 ,경로 , 파일
      InsertProfileimg(qs.stringify(InsertProfileimgdata))
      let imgmetaData
      let imgListRef
      let ImgFileListName = new Array();
      for(let i = 0; i < imgfileList.length; i++){
        imgmetaData = {
          contentType : imgfileList[i].type
        }
        ImgFileListName[i] = [imgfileList[i].name]
        imgListRef = ref(storage, `/profile/${user.user_id}/${ImgFileListName[i]}`)//파일명 및 경로 지정
        uploadBytesResumable(imgListRef,imgfileList[i],imgmetaData)
      }
      alert('저장 완료')
    }else{
      let imgmetaData
      let imgListRef
      let ImgFileListName = new Array();
      for(let i = 0; i < imgfileList.length; i++){
        imgmetaData = {
          contentType : imgfileList[i].type
        }
        ImgFileListName[i] = [imgfileList[i].name]
        imgListRef = ref(storage, `/profile/${user.user_id}/${ImgFileListName[i]}`)//파일명 및 경로 지정
        uploadBytesResumable(imgListRef,imgfileList[i],imgmetaData)
      }
        const mountRef = ref(storage, `/profile/${user.user_id}/${profileimg.profile_img}`)
        deleteObject(mountRef)
        uploadBytesResumable(mountainsRef,file,metaData)//실제 업로드 ,경로 , 파일
        updateProfileimg(qs.stringify(InsertProfileimgdata))
        alert('저장완료')
      }
  }
  return (
    <>

      <div className="pt-4">
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                카페 프로필
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                카페 프로필을 자유롭게 수정해주세요
              </p>
              <div className="pt-8">
                   {
                    imgdata === '' ? profileimg === '' ? 
                    <svg
                       id="profileimg1"
                       className="h-32 w-32 rounded-full bg-white md:h-52 md:w-52"
                       fill="currentColor"
                       viewBox="0 0 24 24"
                     >
                       <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                     </svg>
                     :
                     <img id='profileimg3'  
                     className="h-32 w-32 rounded-full bg-white md:h-52 md:w-52" 
                     src={`https://storage.googleapis.com/bitcamp-caffeine.appspot.com${profileimg.path}${profileimg.profile_img}`}/>
                     :
                     <img id='profileimg3'  
                     className="h-32 w-32 rounded-full bg-white md:h-52 md:w-52" 
                     src={imgdata}/>
                   }
              </div>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        for="company-website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Instagram
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                          https://www.instagram.com/
                        </span>
                        <input
                          type="text"
                          name="company-website"
                          id="company-website"
                          className="block w-full flex-1 rounded-none rounded-r-md border border-gray-300 text-center focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Instagram ID"
                          value={user.insta_account}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      for="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      카페 소개
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows="3"
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="안녕하세요."
                      ></textarea>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      간단한 카페 소개글을 남겨주세요
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      프로필 사진
                    </label>
                    <div className="mt-1 flex items-center">
                      <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                        {
                         imgdata === '' ? profileimg === '' ? 
                         <svg
                            id="profileimg1"
                            className="h-full w-full text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg> :
                          <img id='profileimg3'  
                          className="h-full w-full text-gray-300" 
                          src={`https://storage.googleapis.com/bitcamp-caffeine.appspot.com${profileimg.path}${profileimg.profile_img}`}/>
                          :
                          <img id='profileimg3'  
                          className="h-full w-full text-gray-300" 
                          src={imgdata}/>
                        }

                      </span>
                      <input
                        type="file"
                        id="input_file"
                        style={{ display: 'none' }}
                        onChange={saveFileImage}
                      ></input>
                      <label
                        for="input_file"
                        className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Change
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      카페 사진
                    </label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            for="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>사진 업로드</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                              onChange={imgList}
                              multiple
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <AddingMenu />

                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={save}
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200"></div>
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                알림 설정
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                오더 기능 설정과 그에 따른 알림을 설정해주세요
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <fieldset>
                    <div
                      className="text-base font-medium text-gray-900"
                      aria-hidden="true"
                    >
                      원하는 알림 설정하기
                    </div>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="comments"
                            name="comments"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            for="comments"
                            className="font-medium text-gray-700"
                          >
                            Bookmark
                          </label>
                          <p className="text-gray-500">
                            관심 있는 카페로 선택 될 경우 알림을 설정합니다.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="candidates"
                            name="candidates"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            for="candidates"
                            className="font-medium text-gray-700"
                          >
                            주문
                          </label>
                          <p className="text-gray-500">
                            앱 사용을 통한 메뉴 주문을 사용합니다.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="offers"
                            name="offers"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            for="offers"
                            className="font-medium text-gray-700"
                          >
                            주문 알림
                          </label>
                          <p className="text-gray-500">
                            주문이 들어올 경우 메세지 또는 앱 푸시 알림을
                            받습니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="contents text-base font-medium text-gray-900">
                      알림 받을 수단 선택하기
                    </legend>
                    <p className="text-sm text-gray-500">
                      SMS를 통하여 알림을 받으실 경우 건당 20원의 수수료가
                      발생합니다.
                    </p>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="push-everything"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="push-everything"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          SMS
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="push-email"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          앱 푸시 알림
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-nothing"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="push-nothing"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          이메일 알림
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default CafeAdminPage
