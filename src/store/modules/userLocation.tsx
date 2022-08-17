//@ts-nocheck

const initialState = { longitude : 0, latitude : 0};

export const changeLocation = ( long, lat ) => ( {type : 'change', long : long, lat : lat } );

const locationReducer = ( state = initialState, action ) => {
  console.log('location 변경,,,!', action.long, action.lat );
  if(action.type === 'change'){
    return { longitude : action.long, latitude : action.lat};
  }

  return state;
}

export default locationReducer;