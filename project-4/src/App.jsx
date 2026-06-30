import { useContext } from 'react'
import { CityContext } from './context/CityContext.jsx'
import { useFetch } from './hooks/useFetch.js'
import { CityButtons } from './components/CityButtons.jsx'
import { WeatherCard } from './components/WeatherCard.jsx'
import { ForecastList } from './components/ForecastList.jsx'

function App() {
  const { city } = useContext(CityContext) // get the currently selected city from Context

  // Build the API url for whichever city is selected.
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`

  // Custom hook does the fetch + loading/error tracking for us.
  const { data, loading, error } = useFetch(url)

  // Turn the daily arrays from the API into a simple list of objects.
  const forecastDays =
    data?.daily?.time.map((date, i) => ({
      date,
      max: data.daily.temperature_2m_max[i],
      min: data.daily.temperature_2m_min[i],
    })) || []

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>

      <CityButtons />

      {/* Conditional UI: loading, error, or the actual data */}
      {loading && <p>Loading weather...</p>}
      {error && <p className="error">Something went wrong: {error}</p>}

      {!loading && !error && data && (
        <>
          <WeatherCard cityName={city.name} current={data.current_weather} />
          <h3>Next days</h3>
          <ForecastList days={forecastDays} />
        </>
      )}
    </div>
  )
}

export default App
