import { useEffect } from "react";
import { View } from "react-native";
import { useForegroundPermissions, Accuracy } from "expo-location";
import styles from "./location-weather.styles";
import NoPermissions from "./no-permissions";

export default function LocationWeather({ navigation }) {
    const [status, requestPermission] = useForegroundPermissions();
    const granted = status && status.granted;
    useEffect(() => {
        requestPermission();
    }, []);

    if (!granted) return <NoPermissions />;

    return <View style={styles.container}></View>;
}
