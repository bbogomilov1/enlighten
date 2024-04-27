//AIzaSyCKOAD6G5opJuN3BrXgvtyeDurWzZoQ4Sw

import React, { useEffect, useState } from "react";

const Map = () => {
  const [map, setMap] = useState(null);
  const [advancedMarker, setAdvancedMarker] = useState(null);

  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCKOAD6G5opJuN3BrXgvtyeDurWzZoQ4Sw`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
      const mapInstance = new window.google.maps.Map(
        document.getElementById("map"),
        {
          center: { lat: 42.67618857322171, lng: 23.29555978650537 },
          zoom: 16,
        }
      );
      setMap(mapInstance);

      const marker = new window.google.maps.Marker({
        position: { lat: 42.67618857322171, lng: 23.29555978650537 },
        map: mapInstance,
      });
      setAdvancedMarker(marker);
    });

    return () => {
      window.document.body.removeChild(googleMapScript);
    };
  }, []);

  return (
    <div id="map" style={{ height: "400px", width: "100%" }}>
      {map && advancedMarker && (
        <div>
          <div style={{ height: "100%", width: "100%" }} id="map" />
        </div>
      )}
    </div>
  );
};

export default Map;
