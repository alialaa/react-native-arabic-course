import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "@react-navigation/native";
import { Text, FullWeatherCard } from "@components";
import { useLocation, useSettings } from "@contexts";
import { openweathermap, getErrorMessage } from "@utils";
import styles from "./location-weather.styles";
import NoPermissions from "./no-permissions";

export default function LocationWeather() {
    const { colors } = useTheme();
    const { settings } = useSettings();
    const { granted, location } = useLocation();
    const [locationData, setLocationData] = useState(null);
    const [error, setError] = useState();

    useEffect(() => {
        if (location) {
            const { latitude, longitude } = location.coords;
            openweathermap
                .get("onecall", {
                    params: {
                        lat: latitude,
                        lon: longitude,
                        units: settings.units,
                        lang: settings.lang,
                        exclude: "minutely"
                    }
                })
                .then(res => setLocationData(res.data))
                .catch(err => {
                    setError(getErrorMessage(err));
                });
        }
    }, [location, settings.units]);

    if (!granted) return <NoPermissions />;

    if (error) {
        return (
            <View style={styles.centeredContainer}>
                <Text style={styles.permissionErrorText}>{error}</Text>
                <StatusBar style="auto" />
            </View>
        );
    }

    if (location === null || locationData === null)
        return (
            <View style={styles.centeredContainer}>
                <ActivityIndicator color={colors.primary} />
                <StatusBar style="auto" />
            </View>
        );

    return (
        <View style={styles.container}>
            {locationData && <FullWeatherCard locationData={locationData} />}
        </View>
    );
}
