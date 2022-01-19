import './App.css';
import { Navbar } from './components/Navbar';
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import routes from './services/routes';
import { Home, Characters, MyWatchList } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={routes.Home} element={<Home />} />
        <Route path={routes.Characters} element={<Characters />} />
        <Route path={routes.MyList} element={<MyWatchList />} />
      </Routes>
      {/*<Navigate replace to="/" />*/}
    </BrowserRouter>
  );
}

export default App;
