import React, { useCallback, useMemo, useState } from 'react';
import { findNthPrime } from '../utils/Constants';

const Demo = () => {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);

  // useMemo memoizes the result of the function and stores it in the 'prime' variable.
  // It recalculates the value only when 'num' changes.
  const prime = useMemo(() => {
    console.log('prime is called');
    return findNthPrime(num);
  }, [num]);

  // useCallback memoizes the function to keep its reference consistent between renders,
  // improving performance by avoiding unnecessary recreations.

  const prime1 = useCallback(() => {
    return findNthPrime(num);
  });
  return (
    <div className='m-4 p-2 w-96 h-96 bg-slate-100 border-slate-500'>
      <h2>Demo</h2>
      <input
        className='border border-solid bg-slate-100'
        type='number'
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />

      <div>Prime No: {prime}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      </div>
    </div>
  );
};

export default Demo;
