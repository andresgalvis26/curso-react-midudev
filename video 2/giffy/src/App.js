import React , { useState } from 'react';
import './App.css';
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext';

import { Link, Route } from "wouter";

function App() {

  const [keyword, setKeyword] = useState('');

  return (
    <StaticContext.Provider value={{
      name: 'react'
    }}>
      <div className="App">
        <section className="App-content">
          <Link to="/" >
            <h1>GIPHY API</h1>
          </Link>
          <GifsContextProvider>
          <Route 
            component={Home} 
            path="/" 
          />

          <Route
            component={SearchResults}
            path="/search/:keyword" />

          <Route
            component={Detail}
            path="/gif/:id"
            />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
