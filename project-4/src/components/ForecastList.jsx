// Receives an array of daily forecasts as a prop and renders a list.
export function ForecastList({ days }) {
  if (!days || days.length === 0) return null

  return (
    <ul className="forecast-list">
      {days.map((day) => (
        <li key={day.date}>
          <span>{day.date}</span>
          <span>{Math.round(day.min)}° / {Math.round(day.max)}°</span>
        </li>
      ))}
    </ul>
  )
}
