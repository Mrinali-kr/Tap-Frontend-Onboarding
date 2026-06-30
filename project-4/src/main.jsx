import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CityProvider } from './context/CityContext.jsx'
import './index.css'

// CityProvider wraps the whole app so every component below it
// can read/update the selected city via useContext — this is the
// "share state via Context" requirement.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CityProvider>
      <App />
    </CityProvider>
  </React.StrictMode>,
)
