// @ts-nocheck
import React from 'react';
import { useNavigate } from 'react-router-dom'

const WriteSelect = () => {
    let navigate = useNavigate()

    return (
        <div>
            <div className="mx-auto max-w-[500px] px-7 pt-10">
                <div>
                    <h1 className="text-2xl font-bold leading-snug pb-4 md:pb-10 md:text-center">계정 만들기</h1>
                    <p className="my-1 text-sm pb-10 md-pb7 text-gray-500 md:text-center">Thumbs 에 가입하여 주변의 카페 추천과 다른 이용자들의 후기도 확인하고, 편리한 메뉴 주문 방법을 확인해보세요.</p>
                </div>
            </div>
            <div className="mt-8 max-w-[700px] mx-auto md:w-[700px] md:rounded-xl md:shadow-lg md:shadow-gray-400">
                <div className="text-center text-2xl font-bold my-5">
                    <p className="">개인/ 기업 회원 선택</p>
                </div>
                <div className="">
                    <div className="flex h-full w-full flex-row justify-center gap-10">
                        <div className="my-2 h-[30%] w-[30%] rounded-xl">
                            <img className="hover:bg-red-200 hover:cursor-pointer border border-black md:mx-0" src="https://cdn-icons-png.flaticon.com/512/2068/2068073.png" onClick={() => {navigate('/member/memberwrite')}}/>
                            <p className="mt-3 text-center font-semibold">일반회원</p>
                        </div>
                        <div className="mx-2 my-2 h-[30%] w-[30%] rounded-xl">
                            <img className="hover:bg-red-200 hover:cursor-pointer border border-black md:mx-0" src="https://cdn-icons-png.flaticon.com/512/2067/2067942.png" onClick={() => {navigate('/member/businesswrite')}}/>
                            <p className="mt-3 text-center font-semibold">사업자회원</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WriteSelect;
