import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/LoginPage';
import Carousel from './pages/Carousel';
import Register from './pages/Register';
import FillBlank from './components/FillBlank';
import MultipleChoice from './pages/MultipleChoice';
import Quiz from './components/Quiz';

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
              path="/register"
              element={<Register />}
            />
          </Routes>
          <Routes>
            <Route
              path="/quiz"
              element={<Quiz />}
            />
          </Routes>
          <Routes>
            <Route
              path="/mc"
              element={<MultipleChoice />}
            />
          </Routes>
          <Routes>
            <Route
              path="/fillblank"
              element={<FillBlank />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
