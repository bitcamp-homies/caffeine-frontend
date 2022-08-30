// @ts-nocheck
import React, { useState } from 'react';
import { useMutation, useQueries, useQuery } from 'react-query';
import { isQueryKey } from 'react-query/types/core/utils';
import { useNavigate } from 'react-router-dom';
import { NickNameCheck,EmailCheck } from 'store/api';
import { createMember } from 'store/api';
const BusinessWrite = () => {

    const [NickName, setNickName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password,setPassword] = useState('')
    const [RePassword, setRePassword] = useState('')
    const [Name, setName] = useState('')
    const [UserType, setUserType] = useState(1)
    const [BusinessNum, setBusinessNum] = useState('')
    const [BusinessName, setBusinessName] = useState('')
    const [BusinessAddress, setBusinessAddress] = useState('')
    const [Insta_Account, setInsta_Account] = useState('')


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

    const addresscheck = address => {
        const regExp = /[\S]+(도|시)\s[\S]+(구|군)\s[\S]+(로|동).*/i;
        return regExp.test(address)
    }
    const address = addresscheck(BusinessAddress)
    const data2 = {
    'name' : Name,
    'email' : Email,
    'nickname' : NickName,
    'password' : Password,
    'user_type' : UserType,
    'business_reg_num' : BusinessNum,
    'business_name' : BusinessName,
    'business_address' : BusinessAddress,
    'insta_account' : Insta_Account

    }

    const qs = require('qs');
    const saveMember = useMutation(data => createMember(data))
    const BusinessSubmit = () =>{
    if(emailcheck?.data?.data == 'ok' && getnickname.data?.data == 'ok' && writepassword && BusinessNum && BusinessName && BusinessAddress&& Insta_Account && Name != '' && address){
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
                <p className="md:text-lg"><span className="text-red-800">* </span>표시는 필수 항목입니다.</p>
                <div className="pt-5 md:pt-8">
                <fieldset className="pb-10">
                    <h2 className="font-semibold text-base mb-3">개인정보</h2>
                    <div>
                    <div className="py-3 relative">
                        <label class=" mx-3 font-medium text-sm"><span class="text-red-800">* </span>이름</label>
                        <div className="rounded-lg shadow-[0_0_0_1px_rgb(0,0,0,40%)] px-[12px] py-[16px]">
                        <input type="text" className="w-full" id="Name" name="Name" onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="">
                        </div>
                    </div>
                    <div className="py-3 relative">
                        <label class=" mx-3 font-medium text-sm"><span class="text-red-800">* </span>닉네임</label>
                        <div className="rounded-lg shadow-[0_0_0_1px_rgb(0,0,0,40%)] px-[12px] py-[16px]">
                        <input type="text" className="w-full" id="Nickname" name="Nickname"  onChange={(e) => setNickName(e.target.value)}/>
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
                        <label class=" mx-3 font-medium text-sm"><span class="text-red-800">* </span>이메일</label>
                        <div className="rounded-lg shadow-[0_0_0_1px_rgb(0,0,0,40%)] px-[12px] py-[16px]">
                        <input type="Email" className="w-full" id="Email" name="Email" onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="">
                        </div>
                        <div className="pt-2 text-sm">
                        {
                            email ? emailcheck?.data?.data === 'fail'? <p className='text-red-700'>사용불가능한 이메일입니다.</p> : <p className='text-blue-700'>사용 가능한 이메일입니다.</p> : <p>이메일 형식에 맞게 입력해주세요.</p>
                        }
                        </div>
                    </div>
                    <div className="py-3 relative">
                        <label class=" mx-3 font-medium text-sm"><span class="text-red-800">* </span>비밀번호</label>
                        <div className="rounded-lg shadow-[0_0_0_1px_rgb(0,0,0,40%)] px-[12px] py-[16px]">
                        <input type="password" className="w-full" id="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div className="">
                        
                        </div>
                        <div className="pt-2 text-sm">
                        {
                            checkpassword ? <p className='text-blue-700'>사용 가능한 비밀번호 입니다.</p>
                            : <p>8~25자 길이의 비밀번호를 입력해야합니다.</p>
                        }
                        </div>
                        
                    </div>
                    <div className="py-3 relative">
                        <label class=" mx-3 font-medium text-sm"><span class="text-red-800">* </span>비밀번호 확인</label>
                        <div className="rounded-lg shadow-[0_0_0_1px_rgb(0,0,0,40%)] px-[12px] py-[16px]">
                        <input type="password" className="w-full" id="password" name="password" onChange={(e)=>setRePassword(e.target.value)}/>
                        </div>
                        <div className="">
                        
                        </div>
                        <div className="pt-2 text-sm">
                        {
                        checkpassword ? 
                            RePassword === Password ? ''
                            : <p className='text-red-700'>비밀번호가 맞지않습니다.</p> : '비밀번호를 한번더 입력해주세요'
                        }
                        </div>
                        
                    </div>
                    </div>
                </fieldset>
                <fieldset className="pb-10">
                    <h2 className="font-semibold text-base mb-3">사업자정보</h2>
                    <div>
                    <div className="py-3 relative">
                        <label class=" mx-3 font-medium text-sm"><span class="text-red-800">* </span>사업자번호</label>
                        <div className="rounded-lg shadow-[0_0_0_1px_rgb(0,0,0,40%)] px-[12px] py-[16px]">
                        <input type="number" className="w-full" id="BusinessNum" name="BusinessNum" onChange={(e)=>setBusinessNum(e.target.value)}/>
                        </div>
                    </div>
                    <div className="py-3 relative">
                        <label class=" mx-3 font-medium text-sm"><span class="text-red-800">* </span>상호명</label>
                        <div className="rounded-lg shadow-[0_0_0_1px_rgb(0,0,0,40%)] px-[12px] py-[16px]">
                        <input type="text" className="w-full" id="BusinessName" name="BusinessName" onChange={(e)=>setBusinessName(e.target.value)}/>
                        </div>
                        <div className="pt-2 text-sm">
                            <p>사업자등록증에 등록된 상호명을 입력해주세요.</p>
                        </div>
                        
                    </div>
                    <div className="py-3 relative">
                        <label class=" mx-3 font-medium text-sm"><span class="text-red-800">* </span>가게주소</label>
                        <div className="rounded-lg shadow-[0_0_0_1px_rgb(0,0,0,40%)] px-[12px] py-[16px]">
                        <input type="text" className="w-full" id="BusinessAddress" name="BusinessAddress" onChange={(e)=>setBusinessAddress(e.target.value)}/>
                        </div>
                        <div className="pt-2 text-sm">
                            {
                                address ? '' :
                            <p>사업자등록증에 등록된 주소를 정확히 입력해주세요.</p>
                            }
                        </div>
                    </div>
                    <div className="py-3 relative">
                        <label class=" mx-3 font-medium text-sm"><span class="text-red-800">* </span>Instagram 계정</label>
                        <div className="rounded-lg shadow-[0_0_0_1px_rgb(0,0,0,40%)] px-[12px] py-[16px]">
                        <input type="text" className="w-full" id="Insta_Account" name="Insta_Account" onChange={(e)=>setInsta_Account(e.target.value)}/>
                        </div>
                        <div className="pt-2 text-sm">
                            <p>이메일을 제외한 아이디만 입력해주세요.</p>
                        </div>
                    </div>
                    </div>
                </fieldset>
                <div>
                    <div className="flex justify-end mt-6"> 
                    <button className="bg-red-800 rounded-[500px] text-white text-lg font-semibold px-[18px] py-[15px] text-center" onClick={BusinessSubmit} type="button">계정 생성</button>
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

export default BusinessWrite;