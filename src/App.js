import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Demo from './components/Demo';
import Demo2 from './components/Demo2';
import Cart from './components/Cart';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import ChildComponent from './components/ChildComponent';
import ParentComponent from './components/ParentComponent';
// import Grocery from './components/Grocery';
// Loading one component into another component is called component composition

const Grocery = lazy(() => import('./components/Grocery'));

const AppLayout = () => {
  return (
    <div className='app'>
      {/* AppLayout includes the Header component on line num 26*/}
      <Header />
      {/*The Outlet component renders the matched child route's component as a children on line NUM 28*/}
      <Outlet />
    </div>
  );
};

// Routing Configuration
const appRouter = createBrowserRouter([
  {
    path: '',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/demo2',
        element: <ParentComponent />,
      },
      {
        path: '/demo',
        element: (
          <>
            {/* <Demo />, */}
            <ChildComponent />
            {/* <Demo2 /> */}
          </>
        ),
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>Grocery is Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: '/restaurantmenu/:resId',
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
