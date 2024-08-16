import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import TodoList from './pages/TodoList';
import About from './pages/About';
import Contact from './pages/Contact';
import DarkModeToggle from './pages/DarkModeToggle';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <DarkModeToggle />
      </div>
    </Router>
  );
}

export default App;
