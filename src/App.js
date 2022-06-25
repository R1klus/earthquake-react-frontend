import './styles/index.scss';
import {Routes, Route} from 'react-router-dom';
import MapView from "./views/mapView";
import DataView from "./views/dataView";
import {createContext, useEffect, useState} from "react";

export const themeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
    }

    useEffect(() => {
        console.log(theme)
    })

    return (
        <themeContext.Provider value={{
            currentTheme: theme,
            toggleTheme: toggleTheme}}>
            <div className="app" id={theme}>
                <Routes>
                    <Route exact path="/" element={<MapView/>}/>
                    <Route exact path="/data" element={<DataView/>}/>
                </Routes>
            </div>
        </themeContext.Provider>
    );
}

export default App;
