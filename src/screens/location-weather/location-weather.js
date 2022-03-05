import { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "@react-navigation/native";
import { useLocation, useSettings } from "@contexts";
import { openweathermap } from "@utils";
import styles from "./location-weather.styles";
import NoPermissions from "./no-permissions";

export default function LocationWeather() {
    const { colors } = useTheme();
    const { settings } = useSettings();
    const { granted, location } = useLocation();

    useEffect(() => {
        if (location) {
            const { latitude, longitude } = location.coords;

            openweathermap
                .get("onecall", {
                    params: {
                        // lat: latitude,
                        lon: longitude,
                        units: settings.units,
                        lang: settings.lang,
                        exclude: "minutely"
                    }
                })
                .then(res => console.log(res.data.current))
                .catch(err => {
                    console.log(err.response.data.message);
                });
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
