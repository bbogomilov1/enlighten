import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// const customIcon = L.icon({
//   iconUrl: icon,
//   shadowUrl: iconShadow,
//   iconSize: [25, 41], // Adjust the icon size if needed
//   iconAnchor: [12, 41], // Adjust the icon anchor if needed
//   popupAnchor: [1, -34], // Adjust the popup anchor if needed
//   // Define custom marker options, including the color
//   iconColor: "red", // Change the color to your desired value
// });

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: icon,
  iconUrl: icon,
  shadowUrl: iconShadow,
});

function Map() {
  const position = [42.66929183810461, 23.29754963197396];

  return (
    <MapContainer
      center={position}
      zoom={16}
      style={{
        height: "400px",
        width: "100%",
        margin: "45px 0px",
        "z-index": "1",
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} />
    </MapContainer>
  );
}

export default Map;
