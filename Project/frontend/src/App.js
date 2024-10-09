import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import AddExpense from './components/AddExpense';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';
import Contact from './components/Contact';
import About from './components/About';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/add-expense" element={<AddExpense/>} />
          <Route path="/about" element={<About />} /> {/* About route */}
          <Route path="/contact" element={<Contact />} /> {/* Contact route */}
          
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
