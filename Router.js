import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

import Home from './src/components/Home';
import PlayQuiz from './src/components/PlayQuiz';
import Score from './src/components/Score';
const Routers = () => {
   
    return (
        <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/play' element={< PlayQuiz/>} />
            <Route path='/score' element={< Score/>} />
            
        </Routes>
    </Router>
    );
  };
  export default Routers;
  