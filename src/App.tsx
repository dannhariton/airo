import { APIProvider } from "@vis.gl/react-google-maps";
import DevicesMap from "./components/DevicesMap/DevicesMap";
import Layout from "./components/Layout/Layout";
import { AuthProvider } from "./contexts/AuthContext/AuthProvider";
import { DrawerProvider } from "./contexts/DrawerContext.tsx/DrawerProvider";
import { LocationProvider } from "./contexts/LocationContext/LocationProvider";

function App() {
  return (
    <APIProvider apiKey={import.meta.env.VITE_JS_MAPS_API_KEY}>
      <AuthProvider>
        <DrawerProvider>
          <LocationProvider>
            <Layout>
              <DevicesMap />
            </Layout>
          </LocationProvider>
        </DrawerProvider>
      </AuthProvider>
    </APIProvider>
  );
}

export default App;
