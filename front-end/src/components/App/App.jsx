import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css'

import HorizontalNav from '../HorizontalNav';
import VerticalNav from '../VerticalNav';

import Dashboard from '../../pages/Dashboard';
import Home from '../../pages/Home';

/**
 * 
 * @returns Horizontal and vertical Nav + routes
 */
function App() {

    return(
       <Router>
       <HorizontalNav />
       <VerticalNav />
       <main>
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='dashboard/:id' element={<Dashboard />} />
         </Routes>
       </main>
       </Router>
    )
}

export default App;