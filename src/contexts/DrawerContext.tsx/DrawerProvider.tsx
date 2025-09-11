import { useState, type ReactNode } from "react";
import { DrawerContext } from "./DrawerContext";

export const DrawerProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(true);

  function toggleDrawer(newValue: boolean) {
    setOpen(newValue);
  }

  const value: {
    open: boolean;
    toggleDrawer: (newValue: boolean) => void;
  } = {
    open,
    toggleDrawer,
  };

  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
};
