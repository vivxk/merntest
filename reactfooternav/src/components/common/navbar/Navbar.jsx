import React from 'react';

import './Navbar.css'

function Navbar () {

  return (
    <section className="navbar">
      <a href="/" className="navbar-item">/</a>
      <a href="/1" className="navbar-item">1</a>
      <a href="/2" className="navbar-item">2</a>
      <a href="/3" className="navbar-item">3</a>
      <a href="/4" className="navbar-item">4</a>
      <a href="/5" className="navbar-item">5</a>
  </section>
  )

}

export default Navbar;