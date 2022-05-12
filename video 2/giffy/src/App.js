import React , { useState } from 'react';
import ListOfGifs from './components/ListOfGifs';
import './App.css';

import { Link, Route } from "wouter";

function App() {

  const [keyword, setKeyword] = useState('motogp');

  return (
    <div className="App">
      <section className="App-content">
          <h1>API DE GIPHY</h1>
          <Link to="/gif/colombia">Gifs de Colombia</Link>
          <Link to="/gif/rainbowsix">Gifs de Rainbow Six</Link>
          <Link to="/gif/futbol">Gifs de Futbol</Link>
          <Link to="/gif/programacion">Gifs de Programacion</Link>
          <Link to="/gif/videojuegos">Gifs de Videojuegos</Link>
          <Route path="/gif/:keyword" component={ListOfGifs}></Route>
      </section>
    </div>
  );
}

export default App;
