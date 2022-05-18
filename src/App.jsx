import './App.css';
import React from 'react';
import HomePage from './Components/HomePage';
import MainPage from './Components/MainPage';
import Warning from './Components/Warning';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path='/build' element={<MainPage />} />
        </Routes>
        <Warning />
      </div>
    </Router>
  );
}

export default App;
