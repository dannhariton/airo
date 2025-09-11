import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react";

export type Coords = {
  lat: number;
  lng: number;
};

type LocationContextType = {
  coords: Coords;
  setCoords?: Dispatch<SetStateAction<{ lat: number; lng: number }>>;
  handleCurrentLocation?: () => void;
  handleZoomIn?: () => void;
  handleZoomOut?: () => void;
};

export const LocationContext = createContext<LocationContextType>({
  coords: { lat: 0, lng: 0 },
  setCoords: () => {},
  handleCurrentLocation: () => {},
  handleZoomIn: () => {},
  handleZoomOut: () => {},
});

export const useLocationContext = () => useContext(LocationContext);
