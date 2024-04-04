import React, { useState, useRef } from 'react';
import { useHref } from 'react-router-dom';

const Demo2 = () => {
  let x = 0;
  const [y, setY] = useState(0);
  const ref = useRef(0);
  //console.log(ref.current);
  // useRef in React creates a special variable that persists its value between renders without causing the component to re-render when it changes. It's commonly used for storing mutable values that don't necessarily trigger re-renders, like counters or DOM references.

  return (
    <div className='m-4 p-2 w-96 h-96 border border-grey bg-slate-100'>
      {/* x does not persist its value across re-renders because it's not a state 
      variable. Only state variables declared with useState preserve their
  values across re-renders.*/}
      <div key='0'>
        <button
          className='bg-green-100 p-2 m-4'
          onClick={() => {
            console.log('x value is', x);
            return (x = x + 1);
          }}
        >
          increase x
        </button>
        <span className='font-bold text-xl'>Let = {x} </span>
      </div>
      <div key='1'>
        {/*when the value of y changes, it triggers a re-render of the component. When this re-render occurs, the value of ref.current is not reset to its initial value. Instead, it retains its updated value across re-renders. 
        changes in the value of y trigger a re-render of the component, but the value of ref.current persists across re-renders and can be updated independently. */}
        <button
          className='bg-green-100 p-2 m-4'
          onClick={() => {
            console.log('ref value is', ref.current);
            return (ref.current = ref.current + 1);
          }}
        >
          increase ref
        </button>
        <span className='font-bold text-xl'>Let = {ref.current} </span>
      </div>
      <div key='2'>
        <button
          className='bg-green-100 p-2 m-4'
          onClick={() => {
            console.log(y);
            setY(y + 1);
          }}
        >
          increase y
        </button>
        <span className='font-bold text-xl'>Let = {y} </span>
      </div>
    </div>
  );
};

export default Demo2;
