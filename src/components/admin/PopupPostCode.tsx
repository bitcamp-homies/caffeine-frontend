// @ts-nocheck
import React from 'react';
import DaumPostcode from "react-daum-postcode";
 
const PopupPostCode = (props) => {
	// 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        
        console.log(fullAddress)
        props.onClose()
        props.setBusinessAddress(fullAddress)
    }
 
    const postCodeStyle = {
        display: "block",
        position: "relative",
        top: "0%",
        width: "full",
        height: "480px",
        padding: "7px",
      };
 
    return(
        <div>
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
            <button type='button' onClick={() => {props.onClose()}} className='postCode_btn mb-3 mt-3 rounded-[500px] border text-sm font-semibold px-[10px] py-[8px] text-center'>닫기</button>
        </div>
    )
}
 
export default PopupPostCode;