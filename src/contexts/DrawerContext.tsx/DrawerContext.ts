import { createContext, useContext } from "react";

type DrawerContextType = {
  open: boolean;
  toggleDrawer: (newValue: boolean) => void;
};

export const DrawerContext = createContext<DrawerContextType>({
  open: false,
  toggleDrawer: () => {},
});

export const useDrawerContext = () => useContext(DrawerContext);
