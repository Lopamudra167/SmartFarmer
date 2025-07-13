import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroImage from './components/HeroImage';
import HeaderSection from './components/HeaderSection';
import WeatherDashboard from './components/WeatherDashboard';
import RecommendationSection from './components/RecommendationSection';
import Footer from './components/Footer';
import mockWeatherData from './data/mockWeatherData';
import './styles.css';

export default function App() {
  const [weather, setWeather] = useState(null);

  const handleWeatherClick = () => {
    setWeather(mockWeatherData);
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-container">
        <HeroImage />
        <HeaderSection onGetWeather={handleWeatherClick} />
        {weather && <WeatherDashboard data={weather} />}
        {weather && <RecommendationSection data={weather} />}
      </div>
      <Footer />
    </div>
  );
}
