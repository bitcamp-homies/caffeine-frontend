import React from 'react';

const memberwrite = () => {
    return (
<div>
    <div className="navOffsetContainer___2wNOX">
  <main className="relative z-[-1]">
    <div className="max-w-[500px] px-7 pt-10 mx-auto">
      <div>
        <h1 className="font-bold text-2xl leading-snug pb-4 md:pb-10 md:text-center">Create an account</h1>
        <p className="pb5 md-pb7 text-sm pb-10 text-gray-500 md:text-center">Join Thumbs Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and
          <a className="min-w-[15px] min-h-[15px] text-inherit underline" href="#">more</a>.
        </p>
      </div>
    </div>
    <div className="max-w-[500px] px-7 mx-auto mb-14 md:px-4 md:rounded-xl md:shadow-lg md:shadow-gray-400">
      <div>
        <div className="sm-pt0 md:p-12">
          <form method="post">
            <p className="md:text-lg"><span className="text-[#00754a]">* </span>indicates required field</p>
            <div className="pt-5 md:pt-8">
              <fieldset className="pb-10">
                <h2 className="font-semibold text-base mb-3">Personal Information</h2>
                <div>
                  <div className="py-3 relative">
                    <div className="rounded-lg shadow-[0_0_0_1px_rgb(0,0,0,40%)] px-[12px] py-[16px]">
                      <input type="text" className="w-full" name="firstName" placeholder="* First Name"/>
                    </div>
                    <div className="">
                    </div>
                  </div>
                  <div className="py-3 relative">
                    <div className="rounded-lg shadow-[0_0_0_1px_rgb(0,0,0,40%)] px-[12px] py-[16px]">
                      <input type="text" className="w-full" name="LastName" placeholder="* Last Name"/>
                    </div>
                    <div className="">
                    </div>
                  </div>
                  <div className="pt-10 py-3 relative">
                    <div className="rounded-lg shadow-[0_0_0_1px_rgb(0,0,0,40%)] px-[12px] py-[16px]">
                      <input type="text" className="w-full" name="Nickname" placeholder="* Nickname"/>
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
                <h2 className="font-semibold text-base mb-3">Account Security</h2>
                <div>
                  <div className="py-3 relative">
                    <div className="rounded-lg shadow-[0_0_0_1px_rgb(0,0,0,40%)] px-[12px] py-[16px]">
                      <input type="Email" className="w-full" name="Email" placeholder="* Email address"/>
                    </div>
                    <div className="">
                    </div>
                    <div className="pt-2 text-sm">
                      <p>사용자의 계정 이름입니다.</p>
                    </div>
                  </div>
                  <div className="py-3 relative">
                    <div className="rounded-lg shadow-[0_0_0_1px_rgb(0,0,0,40%)] px-[12px] py-[16px]">
                      <input type="password" className="w-full" name="password" placeholder="* Password"/>
                    </div>
                    <div className="">
                    </div>
                    <div className="pt-2 text-sm">
                      <p>8~25자 길이의 패스워드를 입력해야합니다.</p>
                    </div>
                  </div>
                </div>
              </fieldset>
              <div>
                <div className="flex justify-end mt-6"> 
                  <button className="bg-[#00754a] rounded-[500px] text-white text-lg font-semibold px-[18px] py-[15px] text-center" type="submit">Create account</button>
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

export default memberwrite;