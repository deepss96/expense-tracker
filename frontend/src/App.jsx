import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Resources from './Components/Resources';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import "./App.css";
import Footer from './Components/Footer';

function App() {
  const router  = createBrowserRouter([
    {
      path: '/',
      element : <> <Navbar /> <Banner/> <Footer/></>,
    },
    {
      path: '/Resources',
      element : <> <Navbar /> <Resources/> <Footer/> </>,
    },
  ]);
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
