import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Resources from './Components/Resources';
import "./App.css";

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
