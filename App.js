import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Header from './components/Header'
import Aboutus from './components/Aboutus'
import { useAuth0 } from '@auth0/auth0-react'


 

function App() {

  const { isAuthenticated } = useAuth0()

   console.log(isAuthenticated)
  return (
    <div>
    <BrowserRouter>
      {
        isAuthenticated ? (
          <div className='app'>
            <Header />
            <div className='app_body'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-us' element={<Aboutus />} />
                <Route path='/profile' element={<h1>Profile Page</h1>} />
              </Routes>
            </div>
            {/* 
      
        <div className='app_body'>
          <AboutUs />
        </div>

        <Login /> */}

          </div>
        ) : (
          <Login />
        )
      }

    </BrowserRouter>
    </div>
  )
}

export default App