import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter'
import NavBar from '../src/components/NavBar'
import Footer from '../src/components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
