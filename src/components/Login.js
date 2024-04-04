import React, { useState } from 'react';

const Login = () => {
  const [login, setLogin] = useState(true);
  return (
    <button className='m-4 p-4' onClick={() => setLogin(!login)}>
      {login ? 'Login' : 'Logout'}
    </button>
  );
};

export default Login;
