import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from "./views/homepage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage/>}/>
    </Routes>
  );
}

export default App;
