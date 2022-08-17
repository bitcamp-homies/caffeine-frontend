const initialState = { address2 : '', address3 : ''};

export const changeMain = ( addr2, addr3 ) => ({type : 'change', addr2 : addr2, addr3 : addr3 });

const reducer = (state = initialState, action ) => {
  if(action.type === 'change'){
    return { address2 : action.addr2, address3 : action.addr3 };
  }

  return state;
}

export default reducer;