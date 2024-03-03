import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar'
import { createContext, useState } from 'react'

const themeContext = createContext();

function App() {
  const [theme,setTheme]=useState("light");



  return (
    <div className="container" data-bs-theme="dark">
      <themeContext.Provider value={theme}>
        <Navbar></Navbar>
        <div>
          <a href="." target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <div className="h1" >
            Hello World
          </div>
        </div>
      </themeContext.Provider>
    </div>
  );
}

export default App
