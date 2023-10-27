import React from 'react';
import Home from './screen/Home';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Login from './components/Login';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        </Route>
    )
  )  
  return (
    <>

    <RouterProvider router={router} />
    </>
  );
}

export default App;
