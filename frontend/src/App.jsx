import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/LoginPage';
import Carousel from './pages/Carousel';
import Register from './pages/Register';
import FillBlank from './components/FillBlank';
import MultipleChoice from './pages/MultipleChoice';
import QuizPage from './pages/QuizPage';
import TrueFalse from './components/TrueFalse';

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
              element={<QuizPage />}
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
          <Routes>
            <Route
              path="/truefalse"
              element={<TrueFalse />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
