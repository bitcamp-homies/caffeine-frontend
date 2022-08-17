const YELLOW = 'color/YELLOW';
const ORANGE = 'color/ORANGE';
const MAGENTA = 'color/MAGENTA';

export const yellow = () => ({type : YELLOW});
export const orange = () => ({type : ORANGE});
export const magenta = () => ({type : MAGENTA});

const initialState = { color : 'blue'};

const colorPicker = (state=initialState, action) => {
  switch(action.type){
    case YELLOW:
      return {color : 'yellow'}
    case ORANGE:
      return {color : 'orange'}
    case MAGENTA:
      return {color : 'magenta'}
    default:
      return state;
  }
}

export default colorPicker;

