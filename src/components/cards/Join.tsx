// @ts-nocheck
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SigninBtn from './SigninBtn'
import { Login } from 'store/api'
const Join = (props) => {

  const [id,setId] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate();
  const logindata = {
    id : id,
    password : password
  }
  const validateEmail = email => { //이메일 정규식
    const regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    return regex.test(email);
}

  const LoginBtn = () =>{
    if(validateEmail(id) == false){
      alert('이메일 형식으로 입력해 주세요.')
    }else{
      const qs = require('qs');
      Login(qs.stringify(logindata))
      .then((res) => {
        if(res.data == ''){
          alert('사용자 정보가 일치하지않습니다.')
        }else{
          sessionStorage.setItem("Id",res.data.email)
          sessionStorage.setItem("UserType",res.data.user_type)
          sessionStorage.setItem("NickName",res.data.nickname)
          sessionStorage.setItem("User_id", res.data.user_id)
          if(props.pathname){
            navigate('/cards/list') 
          }else{
            navigate('/')
          }
        }
      })
    }
  }
  return (
    <body className="bg-gradient-to-br from-[#F8E5EE] to-white antialiased">
      <div className="container mx-auto px-6">
        <div className="flex h-screen flex-col justify-evenly text-center md:flex-row md:items-center md:text-left">
          <div className="mx-auto w-full md:mx-0 md:w-full lg:w-9/12">
            <div className="flex w-full flex-col rounded-xl bg-white p-10 shadow-xl">
              <h2 className="mb-5 text-left text-2xl font-bold text-gray-800">
                로그인
              </h2>
              <form action="" className="w-full">
                <div id="input" className="my-5 flex w-full flex-col">
                  <label className="mb-2 text-gray-500">이메일</label>
                  <input
                    type="text"
                    id="username"
                    placeholder="이메일을 입력해주세요."
                    className="appearance-none rounded-lg border-2 border-gray-100 px-4 py-3 placeholder-gray-300 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#9F2042]"
                    onChange={(e)=>setId(e.target.value)}
                  />
                </div>
                <div id="input" className="my-5 flex w-full flex-col">
                  <label className="mb-2 text-gray-500">비밀번호</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="비밀번호를 입력해주세요."
                    className="appearance-none rounded-lg border-2 border-gray-100 px-4 py-3 placeholder-gray-300 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#9F2042]"
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
                <div id="button" className="my-5 flex w-full flex-col">
                  {/* <Link to='cardlist'> */}
                    <SigninBtn LoginBtn = {LoginBtn}/>
                  {/* </Link> */}
                  <div className="mt-5 flex justify-evenly">
                    <a
                      href="#"
                      className="w-full text-center font-medium text-gray-500 hover:text-[#9F2042]"
                    >
                      비밀번호찾기
                    </a>
                    <a
                      href="http://localhost:3000/member"
                      className="w-full text-center font-medium text-gray-500 hover:text-[#9F2042]"
                    >
                      회원가입
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Join
