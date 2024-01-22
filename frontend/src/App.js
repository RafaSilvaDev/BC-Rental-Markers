import { Icon, divIcon, point } from "leaflet";
import "./App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import MapMarker from "./components/MapMarker";
import { getListinings } from "./api/Operations";
import { Spin } from "react-cssfx-loading";
import { useEffect, useState } from "react";

const customIcon = new Icon({
  iconUrl: require("./images/icons8-house-marker.png"),
  iconSize: [48, 48],
});

const createCustomClusterIcon = (cluster) => {
  return new divIcon({
    html: `<div className="cluster-icon">${cluster.getChildCount()}</div>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};

export default function App() {
  const [showSpin, setShowSpin] = useState(false);
  const [markers, setMarkers] = useState([]);
  useEffect(() => {
    setShowSpin(true);
    const fetchData = async () => {
      setMarkers(await getListinings());
    };
    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    if (markers.length > 0) {
      setShowSpin(false);
    }
  }, [markers]);

  return (
    <div className="App">
      {showSpin && (
        <div className="spin-loader">
          <Spin color="#D7263D" width="6rem" height="6rem" alt="Carregando" />
          <h2 className="spin-subtitle">Loading markers...</h2>
        </div>
      )}
      <MapContainer center={[48.428361, -123.371611]} zoom={8}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createCustomClusterIcon}
        >
          {markers.map((marker, index) => (
            <MapMarker
              key={index}
              geocode={[marker.latitude, marker.longitude]}
              popUp={marker.name}
              customIcon={customIcon}
            />
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}
