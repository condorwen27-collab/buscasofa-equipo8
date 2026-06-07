import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchFuelPrices } from './apis/fuelApiLib';

import Header from './components/Header';
import FuelMap from './components/FuelMap';
import About from './components/About';
import Home from './components/Home';
import StationDetail from './components/StationDetail';
import FuelTable from './components/FuelTable';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Profile from './components/Profile';

function App() {

  const [stations, setStations] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFuelPrices()
      .then(data => {
        setStations(data.ListaEESSPrecio);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const stationsContent = loading
    ? <div className="loading">Cargando...</div>
    : error
      ? <div className="error">Error: {error}</div>
      : null;

  return (
    <BrowserRouter>
      <Header user={user} />
      <Routes>
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<Login onLogin={setUser} />} />
        <Route path="/about" element={<About />} />
        <Route path="/perfil" element={<Profile user={user} />} />
        <Route path="/" element={stationsContent ?? <Home stations={stations} />} />
        <Route path="/mapa" element={stationsContent ?? <FuelMap stations={stations} />} />
        <Route path="/lista" element={stationsContent ?? <FuelTable stations={stations} />} />
        <Route path="/station/:id" element={stationsContent ?? <StationDetail stations={stations} user={user} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
