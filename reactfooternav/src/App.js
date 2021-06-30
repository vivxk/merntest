import React from 'react';
// import { Header } from './components/common'
import { Navbar } from './components/common';
import Footer from './components/common/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Footer />
      {/* <Header /> */}
    </div>
  );
}

export default App;
