//@ts-nocheck

const initialState = { cafe_id : 0, user_id : 0, cafe_name : '', address1 : '', address2 : '', address3 : '', address4 : '', about : '', subfolder : ''};

export const changeMain = ( cafe ) => ( {type : 'change', cafe : cafe } );

const reducer = (state = initialState, action ) => {
  if(action.type === 'change'){
    return { cafe_id : action.cafe.cafe_id, user_id : action.cafe.user_id, cafe_name : action.cafe.cafe_name, address1 : action.cafe.address1, address2 : action.cafe.address2, address3 : action.cafe.address3, address4 : action.cafe.address4, about : action.cafe.about, subfolder : action.cafe.subfolder };
  }

  return state;
}

export default reducer;