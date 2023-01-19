import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './components/App/App'
import './style.css'

import HorizontalNav from './components/HorizontalNav'
import VerticalNav from './components/VerticalNav'

import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
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
  </React.StrictMode>
)
