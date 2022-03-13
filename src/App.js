import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Layout from './components/Layout.js';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Chart from './components/Chart.js';
import News from './components/News.js';
import Footer from './components/Footer.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
          <div className="page">
            <Routes>
              <Route 
                path="/" 
                element={<Main />}
              />
              <Route 
                path="/chart/:symbol" 
                element={<Chart />}
              />
              <Route 
                path="/news" 
                element={<News symbol={"USO"}/>}
              />
              <Route 
                path="*"
                element={<Main />}
              />
            </Routes>
          </div>
        <Footer />  
      </Router>
    </div>
  );
}

export default App;