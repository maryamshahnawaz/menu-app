import React, { useContext } from 'react';
import PageNameContext from './PageNameContext';
const ChildComponent = () => {
  const pageName = useContext(PageNameContext);
  console.log(pageName);
  return (
    <div>
      <h1>ChildComponent {pageName}</h1>
    </div>
  );
};

export default ChildComponent;
