import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { useForegroundPermissions, Accuracy, getCurrentPositionAsync } from "expo-location";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "@react-navigation/native";
import styles from "./location-weather.styles";
import NoPermissions from "./no-permissions";

export default function LocationWeather() {
    const { colors } = useTheme();
    const [location, setLocation] = useState(null);
    const [status, requestPermission] = useForegroundPermissions();
    const granted = status && status.granted;
    useEffect(() => {
        requestPermission();
    }, []);

    useEffect(() => {
        const getLocation = async () => {
            const location = await getCurrentPositionAsync({
                accuracy: Accuracy.Highest,
                maximumAge: 10000
            });
            setLocation(location);
        };
        if (granted) {
            getLocation();
        }
    }, [granted]);

    if (!granted) return <NoPermissions />;

    if (location === null)
        return (
            <View style={styles.centeredContainer}>
                <ActivityIndicator color={colors.primary} />
                <StatusBar style="auto" />
            </View>
        );

    return <View style={styles.container}></View>;
}
