//@ts-nocheck
import React, { useState } from 'react';
import { ReactComponent as LikeIcon } from './svg/heart-svgrepo-com.svg'
import { ReactComponent as FilLikeIcon } from './svg/fill-heart-svgrepo-com.svg'

const CafeLikeIcon = ({index,item}) => {
    const [like, setLike] = useState(false)
    
    const likeBtn = (checkthis) => {
        if(checkthis.id == 'cafe_1'){
            setLike(!like)
        }
    }

    return (
        <div>
           {like ? <FilLikeIcon  onClick={(e) => likeBtn(e.target)} /> : <LikeIcon fill="#dd9c4f" className='checkbox' onClick={(e) => likeBtn(e.target)} id={'cafe_1'}/>}
        </div>
    );
};

export default CafeLikeIcon;