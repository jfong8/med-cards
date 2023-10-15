import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/LoginPage';
import Carousel from './pages/Carousel';
import CardComponent from './components/Card';
import Register from './pages/RegisterUserPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
          <Routes>
            <Route
              path="/login"
              element={<Login />}
            />
          </Routes>
          <Routes>
            <Route
              path="/carousel"
              element={<Carousel />}
            />
          </Routes>
          <Routes>
            <Route
              path="/cards"
              element={<CardComponent />}
            />
          </Routes>
          <Routes>
            <Route
              path="/register"
              element={<Register />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
