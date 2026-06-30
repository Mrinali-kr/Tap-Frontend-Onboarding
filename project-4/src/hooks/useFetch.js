import { useState, useEffect } from 'react'

// Custom hook: fetches a URL and gives back data/loading/error.
// This is the "extract one custom hook" requirement.
export function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [url]) // re-fetch whenever the url changes

  return { data, loading, error }
}
