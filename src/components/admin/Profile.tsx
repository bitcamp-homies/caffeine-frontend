// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query';
import { UserCheck } from 'store/api';
import { useNavigate } from 'react-router-dom';
import { NickNameCheck } from 'store/api';
import { updateMember } from 'store/api';
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';


const Profile = () => {
  // 팝업창 상태 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false)
 
	// 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }
 
	// 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }
  const nevigate = useNavigate();
  const user = sessionStorage.getItem("UserType")
  const id = sessionStorage.getItem("Id")
  const nick = sessionStorage.getItem("NickName")
  const userCheck = useQuery(
    ['Id',id],() => UserCheck(id),
    {
      enabled: true
    }
  ) 
  const [NickName, setNickName] = useState(userCheck.data?.data.nickname)
  const [Name, setName] = useState(userCheck.data?.data.name)
  const [BusinessNum, setBusinessNum] = useState(userCheck.data?.data.business_reg_num)
  const [BusinessName, setBusinessName] = useState(userCheck.data?.data.business_name)
  const [BusinessAddress, setBusinessAddress] = useState(userCheck.data?.data.business_address)
  const [BusinessAddress1,setBusinessAddress1] = useState(userCheck.data?.data.business_address1)
  const [Insta_Account, setInsta_Account] = useState(userCheck.data?.data.insta_account)

  const data2 = {
    'email' : id,
    'name' : Name,
    'nickname' : NickName,
    'business_reg_num' : BusinessNum,
    'business_name' : BusinessName,
    'business_address' : BusinessAddress,
    'business_address1' : BusinessAddress1,
    'insta_account' : Insta_Account
  }

  const getnickname = useQuery(
    ['getNickName',NickName],
    () => NickNameCheck(NickName),
    {
      enabled : !! NickName, //닉네임이 검출 안되면 실행안함
    }
  ) 
  

  const qs = require('qs');
  const updateUser = useMutation(data => updateMember(data))
  const UpdateSubmit = () =>{
    if(getnickname.data?.data == 'ok' || NickName === nick){
    console.log(data2)
      updateUser.mutate(qs.stringify(data2))
      sessionStorage.setItem("NickName", NickName)
      
      nevigate('/')
    }else{
      alert('내용을 입력해주세요 ')
    }
  }
  return (
    <div className="mt-4 w-full">
      <div>
    <main className="relative">
        <h1 className="m-3 font-bold text-2xl leading-snug pb-4 md:pb-10">프로필 편집</h1>
        <p className="m-3 pb5 md-pb7 text-sm pb-10">사용자의 개인정보를 변경할 수 있는 페이지입니다. </p>


        
        <div className="max-w-[600px] px-7 mx-auto mb-14 md:px-4 md:rounded-xl md:shadow-lg md:shadow-gray-400">
        <div>
            <div className="sm-pt0 md:p-12">
            <p className="font-extrabold text-xl">{id}</p>
                <div className="pt-5 md:pt-8">
                
                {
                  user === 'user' ?
                  <>
                  <fieldset className="pb-16">
                    <h2 className="font-semibold text-2xl md:mt-0 mt-5 mb-3">개인정보</h2>
                    <div>
                      <div className="py-3 relative">
                          <label className=" mx-3 font-medium text-sm text-gray-500">이름</label>
                          <div className="rounded-lg px-[12px] py-[5px]">
                            <span className="text-lg font-semibold">{Name}</span>
                          </div>
                      </div>
                      <div className="py-3 relative">
                          <label className=" mx-3 font-medium text-sm text-gray-500">닉네임</label>
                          <div className="rounded-lg px-[12px] py-[10px] shadow-[0_0_0_1px_rgb(0,0,0,40%)] max-w-[600px]">
                            <input type="text" className="text-lg font-semibold" value={NickName} onChange={(e)=>setNickName(e.target.value)} />
                          </div>
                          <div className="mx-3 pt-2 text-sm">
                            {
                            NickName !== null && getnickname.data?.data === 'ok' ? <p className='text-blue-700'>사용가능한 닉네임입니다.</p>
                              : ''
                            }
                            {
                              nick !== NickName &&getnickname.data?.data === 'fail' ? <p className='text-red-700'>중복인 닉네임입니다.</p> : ''
                            }
                          </div>
                      </div>
                      <div className="py-3 relative">
                          <label className=" mx-3 font-medium text-sm text-gray-500">Instagram 계정</label>
                          <div className="rounded-lg px-[12px] py-[10px] shadow-[0_0_0_1px_rgb(0,0,0,40%)] max-w-[600px]">
                            <input type="text" className="text-lg font-semibold" value={Insta_Account} onChange={(e)=>setInsta_Account(e.target.value)}/>
                          </div>
                      </div>
                    </div>
                </fieldset>
                <div>
                  <div className="flex justify-end mt-6"> 
                  <button className="bg-red-800 rounded-[500px] text-white text-lg font-semibold px-[18px] py-[15px] text-center" onClick={UpdateSubmit} type="button">회원정보수정</button>
                  </div>
                </div>
                </>
                  :
                  <>
                  <fieldset className="pb-16">
                    <h2 className="font-semibold text-2xl md:mt-0 mt-5 mb-3">개인정보</h2>
                    <div>
                      <div className="py-3 relative">
                          <label className=" mx-3 font-medium text-sm text-gray-500">이름</label>
                          <div className="rounded-lg px-[12px] py-[5px]">
                            <span className="text-lg font-semibold">{Name}</span>
                          </div>
                      </div>
                      <div className="py-3 relative">
                          <label className=" mx-3 font-medium text-sm text-gray-500">닉네임</label>
                          <div className="rounded-lg px-[12px] py-[10px] shadow-[0_0_0_1px_rgb(0,0,0,40%)] max-w-[600px]">
                            <input type="text" className="text-lg font-semibold" value={NickName} onChange={(e)=>setNickName(e.target.value)} />
                          </div>
                          <div className="mx-3 pt-2 text-sm">
                            {
                            NickName !== null && getnickname.data?.data === 'ok' ? <p className='text-blue-700'>사용가능한 닉네임입니다.</p>
                              : ''
                            }
                            {
                              nick !== NickName &&getnickname.data?.data === 'fail' ? <p className='text-red-700'>중복인 닉네임입니다.</p> : ''
                            }
                          </div>
                      </div>  
                    </div>
                </fieldset>
                  <fieldset className="pb-10">
                    <h2 className="font-semibold text-2xl md:mt-0 mt-5 mb-3">사업자정보</h2>
                    <div>
                      <div className="py-3 relative">
                          <label className=" mx-3 font-medium text-sm text-gray-500">사업자번호</label>
                          <div className="rounded-lg px-[12px] py-[10px] shadow-[0_0_0_1px_rgb(0,0,0,40%)] max-w-[600px]">
                            <input type="text" className="text-lg font-semibold w-full" value={BusinessNum} onChange={(e)=>setBusinessNum(e.target.value)}/>
                          </div>
                      </div>
                      <div className="py-3 relative">
                          <label className=" mx-3 font-medium text-sm text-gray-500">상호명</label>
                          <div className="rounded-lg px-[12px] py-[10px] shadow-[0_0_0_1px_rgb(0,0,0,40%)] max-w-[600px]">
                            <input type="text" className="text-lg font-semibold w-full" value={BusinessName} onChange={(e)=>setBusinessName(e.target.value)}/>
                          </div>
                      </div>
                      <div className="py-3 relative">
                      <div>
                            <button className="mb-3 mt-5 rounded-[500px] border text-sm font-semibold px-[10px] py-[8px] text-center" type='button' onClick={openPostCode}>우편번호 검색</button>
                            <div id='popupDom'>
                                {isPopupOpen && (
                                    <PopupDom>
                                        <PopupPostCode onClose={closePostCode} setBusinessAddress={setBusinessAddress}/>
                                    </PopupDom>
                                )}
                            </div>
                          </div>
                          <label className=" mx-3 font-medium text-sm text-gray-500 ">가게주소</label>
                          <div className="rounded-lg px-[12px] py-[10px] shadow-[0_0_0_1px_rgb(0,0,0,40%)] max-w-[600px]">
                            <input type="text" className="text-lg font-semibold w-full" readOnly value={BusinessAddress}/>
                          </div>
                          <label className=" mx-3 font-medium text-sm text-gray-500 ">상세주소</label>
                          <div className="rounded-lg px-[12px] py-[10px] shadow-[0_0_0_1px_rgb(0,0,0,40%)] max-w-[600px]">
                            <input type="text" className="text-lg font-semibold w-full" value={BusinessAddress1} onChange={(e)=>setBusinessAddress1(e.target.value)} />
                          </div>
                      </div>
                      <div className="py-3 relative">
                          <label className=" mx-3 font-medium text-sm text-gray-500">Instagram 계정</label>
                          <div className="rounded-lg px-[12px] py-[10px] shadow-[0_0_0_1px_rgb(0,0,0,40%)] max-w-[600px]">
                            <input type="text" className="text-lg font-semibold w-full" value={Insta_Account} onChange={(e)=>setInsta_Account(e.target.value)}/>
                          </div>
                      </div>
                    </div>
                </fieldset>
                <div>
                    <div className="flex justify-end mt-6"> 
                    <button className="bg-red-800 rounded-[500px] text-white text-lg font-semibold px-[18px] py-[15px] text-center" onClick={UpdateSubmit} type="button">회원정보수정</button>
                    </div>
                </div>

                  </>
                }

                
                </div>
            </div>
            </div>
        </div>
        </main>

    </div>
    </div>
  )
}

export default Profile
