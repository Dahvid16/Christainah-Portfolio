import React, {useEffect, useState} from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainPage from './Pages/MainPage'
import MainLayout from './Layout/MainLayout';
import NotFound from './Pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route path='*' element={ <NotFound/> }/>
      <Route index element={<MainPage/>} />
    </Route>
  )
);
const App = () => {
  
  useEffect(() => {
    if ("scrollRestoration" in window.history){
      window.history.scrollRestoration= "manual";
    }
    window.scrollTo(0, 0);

    if (window.location.hash) {
      window.history.replaceState(null, "", "/");
    }
  }, []);

  return <RouterProvider router={router}/>
}

export default App