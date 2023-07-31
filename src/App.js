import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import SingleTrain from './pages/SingleTrain';
const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
     

      <Route path = "/" element = {<Home />} />
      <Route path = "/train" element = {<SingleTrain />} />
      
    </Routes>
    
    </BrowserRouter>
 
  </div>
  )  
  
}

export default App

