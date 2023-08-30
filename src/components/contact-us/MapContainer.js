import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: icon,
  iconUrl: icon,
  shadowUrl: iconShadow,
});

function Map() {
  const position = [42.67620826389246, 23.295516867252616];

  return (
    <MapContainer
      center={position}
      zoom={16}
      style={{
        height: "400px",
        width: "100%",
        margin: "px 0px 0px 0px",
        zIndex: "1",

        "@media screen and (maxWidth: 768px)": {
          margin: "0px",
        },
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} />
    </MapContainer>
  );
}

export default Map;
