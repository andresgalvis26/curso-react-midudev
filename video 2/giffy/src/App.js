import React , { useState, Suspense } from 'react';
import './App.css';
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext';
import { Link, Route } from "wouter";

const HomePage = React.lazy(() => import('./pages/Home'))

function App() {

  const [keyword, setKeyword] = useState('');

  return (
    <StaticContext.Provider value={{
      name: 'react'
    }}>
      <div className="App">
        <Suspense fallback={null}>
        <section className="App-content">
        <Link to="/">
            <figure className="App-logo">
              <img alt='Giffy logo' src='/logo.png' />
            </figure>
        </Link>
          <GifsContextProvider>
          <Route 
            component={HomePage} 
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
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
