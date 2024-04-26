import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter , Routes, Route  } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home.js';
const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/auth" element={<Auth/>} />
        </Routes>
        
      </Container>
    </BrowserRouter>
  );
};

export default App;