import { react, useState } from 'react'
import './App.css'

import { Navbar } from './Components/Navbar/Navbar';
import {
  Routes, Route, Link

} from "react-router-dom";
import { Home } from './Components/Home/Home';
import { About } from './Components/About/About';
import { Services } from './Components/Services/Services';
import { Doctors } from './Components/Doctors/Doctors';
import { Subscribe } from './Components/Subscribe/Subscribe';
import { Sponsors } from './Components/Sponsors/Sponsors';
import { Contact } from './Components/Contact/Contact';
import { Map } from './Components/Map/Map';
import { Footer } from './Components/Footer/Footer';
import { Login } from './Components/Login/Login';
import { SignUp } from './Components/SignUp/SignUp';
import { ShowAppointments } from './Components/Contact/ShowAppointments';
function App() {
  return (
    <>
      <div className="app">
      <header className="header" id="header">
          <Navbar />
        </header>
        
      <Routes>
      <Route path="/" element={<>
     
        <Home/>
        <About/>
        <Services/>
        <Doctors/>
        <Subscribe/>
        <Sponsors/>
        <Contact/>
        <Map/>
        <Footer/>

        </>
        } />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/appointments" element={<ShowAppointments />} />
          </Routes>
      </div>
    </>
  )
}

export default App

