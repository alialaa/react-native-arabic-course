import { createContext, useState, useEffect, useContext } from "react";
import { useForegroundPermissions, Accuracy, getCurrentPositionAsync } from "expo-location";

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
        setLocation(location);
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
