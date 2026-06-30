import { createContext, useState } from 'react'

// Context lets us share the selected city without passing props
// down through every component manually.
export const CityContext = createContext(null)

export function CityProvider({ children }) {
  const [city, setCity] = useState({ name: 'Bengaluru', lat: 12.97, lon: 77.59 })

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  )
}
