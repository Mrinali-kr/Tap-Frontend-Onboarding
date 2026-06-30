// Simple lookup so we can show something nicer than a raw weather code number.
const WEATHER_CODES = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Foggy',
  61: 'Light rain',
  63: 'Rain',
  65: 'Heavy rain',
  71: 'Snow',
  95: 'Thunderstorm',
}

// This component just receives data through props and displays it.
export function WeatherCard({ cityName, current }) {
  if (!current) return null

  const description = WEATHER_CODES[current.weathercode] || 'Unknown'

  return (
    <div className="weather-card">
      <h2>{cityName}</h2>
      <p className="temp">{Math.round(current.temperature)}°C</p>
      <p>{description}</p>
      <p className="wind">Wind: {current.windspeed} km/h</p>
    </div>
  )
}
