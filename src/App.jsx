import React from 'react';
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Songs from './pages/Songs';
import Song from './pages/Song';
import Artists from './pages/Artists';
import Artist from './pages/Artist';

const App = () => {
  return (
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/songs" element={<Songs />} />
      <Route path="/song/:id" element={<Song />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/artist/:id" element={<Artist />} />
    </Routes>
  </BrowserRouter>
  );
};
export default App;