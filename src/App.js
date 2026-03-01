import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedCity, setSelectedCity] = useState('newyork');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Requests go to the same origin; nginx proxies /weather/* to the backend
  const BACKEND_URL = '';

  const cities = [
    { key: 'newyork', label: 'New York' },
    { key: 'sydney', label: 'Sydney' },
    { key: 'capetown', label: 'Cape Town' },
    { key: 'bangkok', label: 'Bangkok' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const response = await fetch(`${BACKEND_URL}/weather/${selectedCity}`);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch weather data');
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>🌤️ Weather Dashboard</h1>
          <p className="subtitle">Check current weather for cities around the world</p>
          <div className="author-badge">
            <span className="author-label">DevOps Project by</span>
            <span className="author-name">Itamar David Eliyahu</span>
          </div>
        </header>

        <form onSubmit={handleSubmit} className="weather-form">
          <div className="form-group">
            <label htmlFor="city-select">Select a city:</label>
            <select
              id="city-select"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="city-select"
            >
              {cities.map((city) => (
                <option key={city.key} value={city.key}>
                  {city.label}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Loading...' : 'Get Weather'}
          </button>
        </form>

        {error && (
          <div className="error-message">
            <strong>Error:</strong> {error}
          </div>
        )}

        {weatherData && (
          <div className="weather-card">
            <div className="weather-header">
              <h2>{weatherData.city}</h2>
              <div className="temperature">{weatherData.temperature}°C</div>
            </div>
            
            <div className="weather-description">
              {weatherData.description}
            </div>

            <div className="weather-details">
              <div className="detail-item">
                <span className="detail-icon">💧</span>
                <div className="detail-content">
                  <span className="detail-label">Humidity</span>
                  <span className="detail-value">{weatherData.humidity}%</span>
                </div>
              </div>

              <div className="detail-item">
                <span className="detail-icon">💨</span>
                <div className="detail-content">
                  <span className="detail-label">Wind Speed</span>
                  <span className="detail-value">{weatherData.wind_speed} m/s</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
