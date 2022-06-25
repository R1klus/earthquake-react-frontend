import './styles/index.scss';
import {Routes, Route} from 'react-router-dom';
import MapView from "./views/mapView";
import DataView from "./views/dataView";

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<MapView/>}/>
        <Route exact path="/data" element={<DataView />}/>
    </Routes>
  );
}

export default App;
