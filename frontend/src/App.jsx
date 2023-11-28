import React, { useContext } from 'react';
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
import { UserContext } from './contexts/UserContext';

function App() {
  const { username } = useContext(UserContext);
  return (
    <div className="App">
      <BrowserRouter>
        {username && <Navbar />}
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={username ? <Home /> : <Login />}
            />
          </Routes>
          <Routes>
            <Route
              path="/login"
              element={username ? <Home /> : <Login />}
            />
          </Routes>
          <Routes>
            <Route
              path="/carousel"
              element={username ? <Carousel /> : <Login />}
            />
          </Routes>
          <Routes>
            <Route
              path="/register"
              element={username ? <Home /> : <Register />}
            />
          </Routes>
          <Routes>
            <Route
              path="/quiz"
              element={username ? <QuizPage /> : <Login />}
            />
          </Routes>
          <Routes>
            <Route
              path="/mc"
              element={username ? <MultipleChoice /> : <Login />}
            />
          </Routes>
          <Routes>
            <Route
              path="/fillblank"
              element={username ? <FillBlank /> : <Login />}
            />
          </Routes>
          <Routes>
            <Route
              path="/truefalse"
              element={username ? <TrueFalse /> : <Login />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
