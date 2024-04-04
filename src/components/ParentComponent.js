import ChildComponent from './ChildComponent';
import PageNameContext from './PageNameContext';

const ParentComponent = () => {
  return (
    <PageNameContext.Provider value='Data from parent page'>
      <h1>ParentComponent</h1>
      <ChildComponent />
    </PageNameContext.Provider>
  );
};

export default ParentComponent;
