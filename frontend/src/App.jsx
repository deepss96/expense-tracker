import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import "./App.css";
import Resources from './Resources';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Resources/>
        <Banner />
      </div>
    </>
  )
}

export default App
