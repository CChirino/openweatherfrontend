import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../assets/css/react-leaflet.css';
import icon from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import React, { useEffect, useState } from "react"



let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });
  
L.Marker.prototype.options.icon = DefaultIcon;

function Maps(){
    const [cities, setCities] = useState([]);
    const fetchCitiesData = () => {
        fetch("http://openweather.local:8083/api/v1/weather")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setCities(data)
          })
      }
    useEffect(() => {
        fetchCitiesData()
    }, [])
    const currentLocation = [33.749, -84.38798 ];
    const zoom = 4;

    return(
        
     <MapContainer center={currentLocation} zoom={zoom}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {cities.map(city => (

        <Marker           
        key={city.id}
        position={[city.latitude, city.longitude]}>
            <Popup>          
                <span> Humedad en {city.city} : {city.humidity}% </span>
            </Popup>
        </Marker>
         ))}
    </MapContainer>

    

    )


}

export default Maps;
