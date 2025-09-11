import { Map } from "@vis.gl/react-google-maps";
import { useLocationContext } from "../../contexts/LocationContext/LocationContext";
import styles from "./styles.module.scss";

export default function DevicesMap() {
  const { coords } = useLocationContext();

  return (
    <div className={styles.map}>
      <Map
        disableDefaultUI
        mapId={import.meta.env.VITE_MAP_ID}
        colorScheme="DARK"
        defaultCenter={coords}
        defaultZoom={9}
        reuseMaps
      />
    </div>
  );
}
