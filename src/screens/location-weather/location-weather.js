import { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "@react-navigation/native";
import { useLocation, useSettings } from "@contexts";
import styles from "./location-weather.styles";
import NoPermissions from "./no-permissions";

export default function LocationWeather() {
    const { colors } = useTheme();
    const { settings } = useSettings();
    const { granted, location } = useLocation();

    useEffect(() => {
        if (location) {
            const { latitude, longitude } = location.coords;
            fetch(
                `https://api.openweathermap.org/data/2.5/onecall?appid=76fdf6a2b46bc8e133d83a69062b7338&lat=${latitude}&lon=${longitude}&units=${settings.units}&lang=${settings.lang}&exclude=minutely`
            )
                .then(res => res.json())
                .then(res => console.log(res.current));
        }
    }, [location, settings.units]);

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
