import './assets/css/App.css';
import  Navbar from './components/Navbar.js';
import  Inicio from './components/Inicio.js';
import  Map from './components/Map.js';
import { useFetch } from './useFetch';
import 'leaflet/dist/leaflet.css';



function App() {

  const {data, loading, error} = useFetch("http://openweather.local:8083/api/humidity-city?city=miami") 

  return (
    <div className="App">

      <Navbar/>

      <div className="flex flex-col justify-center items-center h-screen">
        <div>
          <Inicio/>
        </div>
        <div>
          <Map/>
        </div>
      </div>

    
    </div>
  );
}

export default App;
