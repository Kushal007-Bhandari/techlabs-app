import React, { useState } from 'react';

const API_KEY = 'a107c8e999c6e68adb8b1b9cbb583cba';

const WeatherPage: React.FC = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setWeather(null);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error('City not found');
      const data = await res.json();
      setWeather(data);
    } catch (err: any) {
      setError(err.message || 'Error fetching weather');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-blue-200 to-blue-500 p-4">
      <form onSubmit={fetchWeather} className="w-full max-w-sm flex mb-8">
        <input
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder="Enter city name"
          className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-r-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </form>
      {loading && <div className="text-lg text-gray-700">Loading...</div>}
      {error && <div className="text-red-600 mb-4">{error}</div>}
      {weather && (
        <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center">
          <div className="text-2xl font-bold mb-2">{weather.name}</div>
          <div className="flex items-center mb-2">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt={weather.weather[0].description}
              className="w-20 h-20"
            />
            <div className="text-5xl font-bold ml-2">{Math.round(weather.main.temp)}°C</div>
          </div>
          <div className="capitalize text-lg mb-2">{weather.weather[0].description}</div>
          <div className="flex justify-between w-full text-sm mb-1">
            <span>H: {Math.round(weather.main.temp_max)}°C</span>
            <span>L: {Math.round(weather.main.temp_min)}°C</span>
          </div>
          <div className="flex flex-col w-full text-sm mt-2">
            <span>Humidity: {weather.main.humidity}%</span>
            <span>Wind: {Math.round(weather.wind.speed)} m/s</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherPage; 