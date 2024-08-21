import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import ResourcesPage from './ResourcesPage';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import "./App.css";
import Footer from './Components/Footer';
import AboutUsPage from './AboutUsPage';
import Chatbot from "./Components/ChatbotButton";

function App() {
  const router  = createBrowserRouter([
    {
      path: '/',
      element : <> <Navbar /> <Banner/> <Chatbot/><Footer/></>,
    },
    {
      path: '/Resources',
      element : <> <Navbar /> <ResourcesPage/> <Chatbot/> <Footer/> </>,
    },
    {
      path: '/About-us',
      element : <> <Navbar /> <AboutUsPage/> <Chatbot/> <Footer/> </>,
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
