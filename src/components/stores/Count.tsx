import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { increase, decrease, reset } from '../store/modules/count';

const Count = () => {
  const dispatch = useDispatch;
  const count = useSelector( (state:any) => { return state.counter.count});


  return (
    <div>
      <h2>COUNT : {count}</h2>
      <p>
        <button onClick={ () => dispatch()}>증가</button>
        <button onClick={ () => dispatch()}>감소</button>
        <button onClick={ () => dispatch()}>초기화</button>
      </p>
    </div>
  );
};

export default Count;