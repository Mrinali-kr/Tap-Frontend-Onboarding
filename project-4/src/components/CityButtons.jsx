import { useContext } from 'react'
import { CityContext } from '../context/CityContext.jsx'

// A small fixed list of cities to pick from — keeps things simple,
// no search/geocoding needed.
const CITIES = [
  { name: 'Bengaluru', lat: 12.97, lon: 77.59 },
  { name: 'Delhi', lat: 28.61, lon: 77.21 },
  { name: 'Mumbai', lat: 19.08, lon: 72.88 },
  { name: 'London', lat: 51.51, lon: -0.13 },
  { name: 'New York', lat: 40.71, lon: -74.01 },
  { name: 'Tokyo', lat: 35.68, lon: 139.69 },
]

export function CityButtons() {
  const { city, setCity } = useContext(CityContext)

  return (
    <div className="city-buttons">
      {CITIES.map((c) => (
        <button
          key={c.name}
          className={c.name === city.name ? 'active' : ''}
          onClick={() => setCity(c)}
        >
          {c.name}
        </button>
      ))}
    </div>
  )
}
