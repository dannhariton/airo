import AddIcon from "@mui/icons-material/Add";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import RemoveIcon from "@mui/icons-material/Remove";
import { useLocationContext } from "../../contexts/LocationContext/LocationContext";
import SidebarDrawer from "../Drawer/Drawer";
import styles from "./styles.module.scss";
import logo from "/logo-gd.svg";

export default function BottomBar() {
  const { handleCurrentLocation, handleZoomIn, handleZoomOut } =
    useLocationContext();

  return (
    <div className={styles["bottom-bar"]}>
      <div className={styles["company-info"]}>
        <img src={logo} alt="" className={styles.companyLogo} />
        <span className={styles.copyrights}>2020 @ All rights reserved</span>
      </div>
      <div className={styles["buttons-group"]}>
        <div className={styles["buttons-group--zoom"]}>
          <button onClick={handleZoomIn} className={styles.button}>
            <AddIcon />
          </button>
          <button onClick={handleZoomOut} className={styles.button}>
            <RemoveIcon />
          </button>
        </div>
        <button onClick={handleCurrentLocation} className={styles.button}>
          <GpsFixedIcon />
        </button>
      </div>
      <SidebarDrawer />
    </div>
  );
}
