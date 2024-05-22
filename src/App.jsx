import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement, reset,
} from './stores/counter';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <h1 className='text-xl font-bold'>Counter</h1>
      <h2 className=' p-3 bg-purple-400 w-fit m-6 rounded-xl text-white'>{counter}</h2>
      <div>
        <button type="button" onClick={() => dispatch(increment())}>+</button>
        <button type="button" onClick={() => dispatch(decrement())}>-</button>
        <button type="button" onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}

export default App;
