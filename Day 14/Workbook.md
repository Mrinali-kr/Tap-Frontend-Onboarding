Workbook tasks:

1) Use useEffect with a correct dependency array

    useEffect(() => {
    fetch(url)
        .then(res => res.json())
        .then(setData)
        .catch(err => setError(err.message))
        .finally(() => setLoading(false))
    }, [url])
    Runs the fetch only when url changes.

2) Share state through the Context API

    export const CityContext = createContext(null)

    export function CityProvider({ children }) {
    const [city, setCity] = useState({ name: 'Bengaluru', lat: 12.97, lon: 77.59 })
    return (
        <CityContext.Provider value={{ city, setCity }}>
        {children}
        </CityContext.Provider>
    )
    }
    Any component can do useContext(CityContext) to read/update the city.

3) Deploy to Vercel/Netlify; record the URL + push

    url:https://mrinali-project4.netlify.app/