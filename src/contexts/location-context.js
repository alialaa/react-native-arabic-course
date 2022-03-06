import { createContext, useState, useEffect, useContext } from "react";
import { useForegroundPermissions, Accuracy, getCurrentPositionAsync } from "expo-location";
import { geocoding } from "@utils";

const LocationContext = createContext();

export function useLocation() {
    const context = useContext(LocationContext);
    if (!context) {
        throw new Error("useLocation must be used withing a LocationProvider");
    }
    return context;
}

export function LocationProvider(props) {
    const [location, setLocation] = useState(null);
    const [status, requestPermission] = useForegroundPermissions();

    const granted = status && status.granted;

    const getLocation = async () => {
        const location = await getCurrentPositionAsync({
            accuracy: Accuracy.Highest,
            maximumAge: 10000
        });
        try {
            const locationName = await geocoding.get("reverse", {
                params: {
                    lat: location.coords.latitude,
                    lon: location.coords.longitude
                }
            });
            if (locationName.data.length > 0) {
                setLocation({
                    ...location,
                    locationNames: { ...locationName.data[0].local_names }
                });
            } else {
                setLocation(location);
            }
        } catch {
            setLocation(location);
        }
    };

    useEffect(() => {
        requestPermission();
    }, []);
    useEffect(() => {
        if (granted) {
            getLocation();
        }
    }, [granted]);
    return (
        <LocationContext.Provider
            {...props}
            value={{
                location,
                granted,
                getLocation
            }}
        />
    );
}
