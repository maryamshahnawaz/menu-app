import React, { useState } from 'react';

const User = ({ name, email }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      Functional Based Component
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
};

export default User;
