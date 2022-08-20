// @ts-nocheck
import React, { useState } from 'react';
import { useMutation, useQueries, useQuery } from 'react-query';
import { isQueryKey } from 'react-query/types/core/utils';
import { useNavigate } from 'react-router-dom';
import { NickNameCheck,EmailCheck } from 'store/api';
import { createMember } from 'store/api';
const MemberWrite = () => {
  
  const [NickName, setNickName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password,setPassword] = useState('')
  const [RePassword, setRePassword] = useState('')
  const [Sung,setSung] = useState('')
  const [Name, setName] = useState('')
  const [UserType, setUserType] = useState(null)
  const [Insta_Account, setInsta_Account] = useState(null)
  const nevigate = useNavigate();
  const getnickname = useQuery(
    ['getNickName',NickName],
    () => NickNameCheck(NickName),
    {
      enabled : !! NickName, //닉네임이 검출 안되면 실행안함
    }
  ) 
  
    const passwordcheck = password =>{  //비밀번호 정규식
      const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,25}$/
      return regExp.test(password)
    }
    const checkpassword = passwordcheck(Password);//비밀번호 textbox에 들어간 값이 정규식이 맞냐 안맞냐
    const writepassword = checkpassword && Password === RePassword //회원가입 비밀번호 유효성 검사
  const emailcheck = useQuery(
    ['getEmail',Email],
    () => EmailCheck(Email),
      {
        enabled : !! Email,
      }
    )

 const validateEmail = email => {
    const regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    return regex.test(email);
}
const email = validateEmail(Email)  //true false 반환 이메일 정규식

const data2 = {
  'sung' : Sung,
  'name' : Name,
  'email' : Email,
  'nickname' : NickName,
  'password' : Password,
  'user_type' : UserType,
  'insta_account' : Insta_Account
}

const qs = require('qs');
const saveMember = useMutation(data => createMember(data))
const MemberSubmit = () =>{
  if(emailcheck?.data?.data == 'ok' && getnickname.data?.data == 'ok' && writepassword && Sung != '' && Name != ''){
  console.log(data2)
    saveMember.mutate(qs.stringify(data2))
    nevigate('/')
  }else{
    alert('내용을 입력해주세요 ')
  }
}

  return (
<div>
    <div className="navOffsetContainer___2wNOX">
  <main className="relative">
    <div className="max-w-[500px] px-7 pt-10 mx-auto">
      <div>
        <h1 className="font-bold text-2xl leading-snug pb-4 md:pb-10 md:text-center">계정 만들기</h1>
        <p className="pb5 md-pb7 text-sm pb-10 text-gray-500 md:text-center">Thumbs 에 가입하여 주변의 카페 추천과 다른 이용자들의 후기도 확인하고, 편리한 메뉴 주문 방법을 확인해보세요. 
        </p>
      </div>
    </div>
    <div className="max-w-[500px] px-7 mx-auto mb-14 md:px-4 md:rounded-xl md:shadow-lg md:shadow-gray-400">
      <div>
        <div className="sm-pt0 md:p-12">
          <form method="post">
            <p className="md:text-lg"><span className="text-[#00754a]">* </span>표시는 필수 항목입니다.</p>
            <div className="pt-5 md:pt-8">
              <fieldset className="pb-10">
                <h2 className="font-semibold text-base mb-3">개인정보</h2>
                <div>
                  <div className="py-3 relative">

                    <div className="rounded-lg shadow-[0_0_0_1px_rgb(0,0,0,40%)] px-[12px] py-[16px]">
                      <input type="text" className="w-full" id="firstName" name="firstName" placeholder="* 홍" onChange={(e)=>setSung(e.target.value)}/>
                    </div>
                    <div className="">
                    </div>
                  </div>
                  <div className="py-3 relative">
                    <div className="rounded-lg shadow-[0_0_0_1px_rgb(0,0,0,40%)] px-[12px] py-[16px]">
                      <input type="text" className="w-full" id="LastName" name="LastName" placeholder="* 길동" onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="">
                    </div>
                  </div>
                  <div className="pt-10 py-3 relative">
                    <div className="rounded-lg shadow-[0_0_0_1px_rgb(0,0,0,40%)] px-[12px] py-[16px]">
                      <input type="text" className="w-full" id="Nickname" name="Nickname" placeholder="* 길동이" onChange={(e) => setNickName(e.target.value)}/>
                    </div>
                    <div className="">
                    </div>
                    <div className="pt-2 text-sm">
                      {
                       NickName !== null && getnickname.data?.data === 'ok' ? <p className='text-blue-700'>사용가능한 닉네임입니다.</p>
                        : ''
                      }
                      {
                        getnickname.data?.data === 'fail' ? <p className='text-red-700'>중복인 닉네임입니다.</p> : ''
                      }
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset className="pb-10">
                <h2 className="font-semibold text-base mb-3">계정정보</h2>
                <div>
                  <div className="py-3 relative">
                    <div className="rounded-lg shadow-[0_0_0_1px_rgb(0,0,0,40%)] px-[12px] py-[16px]">
                      <input type="Email" className="w-full" id="Email" name="Email" placeholder="* 아이디(이메일)" onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="">
                    </div>
                    <div className="pt-2 text-sm">
                      {
                        email ? emailcheck?.data?.data === 'fail'? <p>사용불가능한 이메일입니다.</p> : <p>사용 가능한 이메일입니다.</p> : <p>이메일 형식에 맞게 입력해주세요.</p>
                      }
                    </div>
                  </div>
                  <div className="py-3 relative">
                    <div className="rounded-lg shadow-[0_0_0_1px_rgb(0,0,0,40%)] px-[12px] py-[16px]">
                      <input type="password" className="w-full" id="password" name="password" placeholder="* 비밀번호" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className="">
                      
                    </div>
                    <div className="pt-2 text-sm">
                      {
                        checkpassword ? <p>사용 가능한 비밀번호 입니다.</p>
                        : <p>8~25자 길이의 비밀번호를 입력해야합니다.</p>
                      }
                    </div>
                    
                  </div>
                  <div className="py-3 relative">
                    <div className="rounded-lg shadow-[0_0_0_1px_rgb(0,0,0,40%)] px-[12px] py-[16px]">
                      <input type="password" className="w-full" id="password" name="password" placeholder="* 비밀번호재확인" onChange={(e)=>setRePassword(e.target.value)}/>
                    </div>
                    <div className="">
                      
                    </div>
                    <div className="pt-2 text-sm">
                      {
                    checkpassword ? 
                        RePassword === Password ? ''
                        : '비밀번호가 맞지않습니다.' : '비밀번호를 한번더 입력해주세요'
                      }
                    </div>
                    
                  </div>
                </div>
              </fieldset>
              <div>
                <div className="flex justify-end mt-6"> 
                  <button className="bg-[#00754a] rounded-[500px] text-white text-lg font-semibold px-[18px] py-[15px] text-center" onClick={MemberSubmit} type="button">계정 생성</button>
                </div>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </main>
    <hr/>
  </div>
</div>
    );
};

export default MemberWrite;