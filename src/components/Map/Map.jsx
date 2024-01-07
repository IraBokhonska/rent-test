import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { defaultTheme } from "./Theme";
import { rents } from "../Apartments/Rents";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultOptions = {
  styles: defaultTheme,
};

export const Map = ({ center }) => {
  const mapRef = React.useRef(undefined);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  return (
    <div className="container">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        <Marker position={center} />
        {rents.map((rent) => (
          <Marker key={rent.id} position={{ lat: rent.lat, lng: rent.lng }} />
        ))}
        {/* Child components, such as markers, info windows, etc. */}
      </GoogleMap>
    </div>
  );
};
