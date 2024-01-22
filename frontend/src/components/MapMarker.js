import { Marker, Popup } from "react-leaflet";

export default function MapMarker({ geocode, popUp = "", customIcon }) {
  return (
    <Marker position={geocode} icon={customIcon}>
      {popUp ? <Popup>{popUp}</Popup> : <></>}
    </Marker>
  );
}
