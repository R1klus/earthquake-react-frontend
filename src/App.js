import './styles/index.scss';
import {Routes, Route} from 'react-router-dom';
import MapView from "./views/mapView";
import DataView from "./views/dataView";
import {createContext, useEffect, useState} from "react";
import NavBar from "./components/navBar";
import {useDispatch, useSelector} from "react-redux";
import {fetchFromApi} from "./redux/actions";
import useInterval from "use-interval";

export const themeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState("light");
    const dispatch = useDispatch();
    const fetchFrequency = useSelector(({fetchFrequency}) => fetchFrequency)

    const updateEarthquakeData = () => {
        dispatch(fetchFromApi())
    }

    useInterval(() => {
        updateEarthquakeData();
    }, fetchFrequency)


    const toggleTheme = () => {
        setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
    }

    useEffect(() => {
        dispatch(fetchFromApi())
        const darkThemeOsSetting = window.matchMedia("(prefers-color-scheme: dark)")
        const localStorageTheme = window.localStorage.getItem("theme")
        if(localStorageTheme === null){
            if(darkThemeOsSetting.matches) {
                setTheme("dark")
            }else {
                setTheme("light")
            }
        }else {
            setTheme(JSON.parse(window.localStorage.getItem("theme")));
        }
    }, [dispatch])

    useEffect(() => {
        window.localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme]);

    return (
        <themeContext.Provider value={{
            currentTheme: theme,
            toggleTheme: toggleTheme}}>
            <div className="app" id={theme}>
                <NavBar/>
                <Routes>
                    <Route exact path="/" element={<MapView/>}/>
                    <Route exact path="/data" element={<DataView/>}/>
                </Routes>
            </div>
        </themeContext.Provider>
    );
}

export default App;
