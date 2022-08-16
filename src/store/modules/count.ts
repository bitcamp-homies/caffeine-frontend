const INCREASE = "count/increase" as const;
const DECREASE = "count/decrease" as const;
const RESET = "count/reset" as const;

export const increase = () => ({type : INCREASE});
export const decrease = () => ({type : DECREASE});
export const reset = () => ({type : RESET});

const initialState = { count : 0 };

const counter = (state = initialState, action:any) => {
  switch(action.type){
    case INCREASE :
      return {count : state.count + 1};
    case DECREASE :
      return {count : state.count - 1};
    case RESET :
      return {count : 0};
    default : 
      return state;
  }
}

export default counter;
