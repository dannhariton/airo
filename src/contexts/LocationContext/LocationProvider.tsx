import { useMap } from "@vis.gl/react-google-maps";
import { useState, type ReactNode } from "react";
import { LocationContext, type Coords } from "./LocationContext";

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [coords, setCoords] = useState<Coords>({ lat: 47, lng: 28 });
  const map = useMap();

  function handleCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        map?.panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });

        setCoords((prev) => {
          return {
            ...prev,
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
        });
      });
    }
  }

  function handleZoomIn() {
    map?.setZoom((map.getZoom() ?? 0) + 1);
  }

  function handleZoomOut() {
    map?.setZoom((map.getZoom() ?? 0) - 1);
  }

  const value: {
    coords: Coords;
    setCoords: React.Dispatch<React.SetStateAction<Coords>>;
    handleCurrentLocation: () => void;
    handleZoomIn: () => void;
    handleZoomOut: () => void;
  } = { coords, setCoords, handleCurrentLocation, handleZoomIn, handleZoomOut };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};
