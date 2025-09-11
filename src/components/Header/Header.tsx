import { NotificationsOutlined } from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";
import { useDrawerContext } from "../../contexts/DrawerContext.tsx/DrawerContext";
import styles from "./styles.module.scss";
import logo from "/logo-airo.svg";

export default function Header() {
  const { toggleDrawer } = useDrawerContext();
  const { currentUser } = useAuthContext();

  return (
    <header className={styles.container}>
      <img src={logo} alt="Airo Logo" />

      <div className={styles["user"]}>
        <button className={styles["user-notification"]}>
          <NotificationsOutlined />
        </button>
        <button
          className={styles["user-profile"]}
          onClick={() => toggleDrawer(true)}
        >
          <div className={styles["user-image-container"]}>
            <img
              src={currentUser?.photoURL ? currentUser.photoURL : logo}
              alt="User Avatar"
            />
          </div>
          <span className={styles["user-name"]}>
            {currentUser ? currentUser?.displayName?.split(" ")[0] : "Account"}
          </span>
          <ArrowDropDownIcon />
        </button>
      </div>
    </header>
  );
}
