import { ArrowForward, Close, Logout, Shield } from "@mui/icons-material";
import { Drawer } from "@mui/material";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";
import { useDrawerContext } from "../../contexts/DrawerContext.tsx/DrawerContext";
import styles from "./styles.module.scss";
import sso from "/images/sso-logo.png";

export default function SidebarDrawer() {
  const { open, toggleDrawer } = useDrawerContext();
  const { currentUser, login, logout } = useAuthContext();
  const devices: string[] = [];

  let content = (
    <>
      <div className={styles.header}>
        <div className={styles.title}>Settings</div>
        <button onClick={() => toggleDrawer(false)}>
          <Close />
        </button>
      </div>
      <div className={styles["image-container"]}>
        <img src={sso} alt="" />
      </div>

      <p className={styles.description}>
        Please Log In via Gmail SSO account to have possibility to manage
        personal devices and recieve notifications.
      </p>
      <button className={styles.cta} onClick={login}>
        Sign In
      </button>
      <a href="/" className={styles.link}>
        About this application
        <ArrowForward fontSize="small" />
      </a>
    </>
  );

  if (currentUser) {
    content = (
      <>
        <div className={styles["user-header"]}>
          <div className={styles["user-image-container"]}>
            <img
              src={currentUser.photoURL ? currentUser.photoURL : sso}
              alt=""
            />
          </div>
          <div className={styles["user-name-container"]}>
            <div className={styles["user-name"]}>{currentUser.displayName}</div>
            <div className={styles["user-tag"]}>
              @
              {currentUser.displayName
                ?.split(" ")
                .map((item, index) => {
                  if (index === 0) return item[0].toLowerCase();
                  return item.toLowerCase();
                })
                .join("")}
            </div>
          </div>
          <button onClick={() => toggleDrawer(false)}>
            <Close />
          </button>
        </div>
        <div className={styles["devices-list"]}>
          {devices.length ? devices : "No devices"}
          <button className={styles["add-button"]}>+ Add New</button>
        </div>
        <div className={styles["user-actions"]}>
          <a
            href="http://gdpr-info.eu/"
            className={styles["user-actions--privacy"]}
          >
            <Shield />
            Privacy
          </a>
          <button
            onClick={logout}
            className={styles["user-actions--sign-out-button"]}
          >
            <Logout />
            Sing Out
          </button>
        </div>
      </>
    );
  }

  return (
    <Drawer
      open={open}
      sx={open ? { width: "360px" } : {}}
      hideBackdrop
      onClose={() => toggleDrawer(false)}
      anchor="right"
      className={styles.drawer}
      variant="persistent"
    >
      {content}
    </Drawer>
  );
}
