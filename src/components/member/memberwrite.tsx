// @ts-nocheck
import React, { useState } from 'react';

const MemberWrite = () => {
    

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
                      <input type="text" className="w-full" id="firstName" name="firstName" placeholder="* 홍" onChange={onChangefirstName}/>
                    </div>
                    <div className="">
                    </div>
                  </div>
                  <div className="py-3 relative">
                    <div className="rounded-lg shadow-[0_0_0_1px_rgb(0,0,0,40%)] px-[12px] py-[16px]">
                      <input type="text" className="w-full" id="LastName" name="LastName" placeholder="* 길동" onChange={onchangeLastName}/>
                    </div>
                    <div className="">
                    </div>
                  </div>
                  <div className="pt-10 py-3 relative">
                    <div className="rounded-lg shadow-[0_0_0_1px_rgb(0,0,0,40%)] px-[12px] py-[16px]">
                      <input type="text" className="w-full" id="Nickname" name="Nickname" placeholder="* 길동이" onChange={onchangeNickname}/>
                    </div>
                    <div className="">
                    </div>
                    <div className="pt-2 text-sm">
                      <p>사용자 별명입니다.</p>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset className="pb-10">
                <h2 className="font-semibold text-base mb-3">계정정보</h2>
                <div>
                  <div className="py-3 relative">
                    <div className="rounded-lg shadow-[0_0_0_1px_rgb(0,0,0,40%)] px-[12px] py-[16px]">
                      <input type="Email" className="w-full" id="Email" name="Email" placeholder="* 아이디(이메일)" onChange={onchangeEmail}/>
                    </div>
                    <div className="">
                    </div>
                    <div className="pt-2 text-sm">
                      <p>사용자의 계정 이름입니다.</p>
                    </div>
                  </div>
                  <div className="py-3 relative">
                    <div className="rounded-lg shadow-[0_0_0_1px_rgb(0,0,0,40%)] px-[12px] py-[16px]">
                      <input type="password" className="w-full" id="password" name="password" placeholder="* 비밀번호" onChange={onchangepassword}/>
                    </div>
                    <div className="">
                    </div>
                    <div className="pt-2 text-sm">
                      <p>8~25자 길이의 비밀번호를 입력해야합니다.</p>
                    </div>
                  </div>
                </div>
              </fieldset>
              <div>
                <div className="flex justify-end mt-6"> 
                  <button className="bg-[#00754a] rounded-[500px] text-white text-lg font-semibold px-[18px] py-[15px] text-center" type="submit">계정 생성</button>
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