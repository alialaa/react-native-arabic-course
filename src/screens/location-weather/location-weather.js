import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "@react-navigation/native";
import { Text, FullWeatherCard } from "@components";
import { useLocation, useSettings } from "@contexts";
import { openweathermap, getErrorMessage } from "@utils";
import styles from "./location-weather.styles";
import NoPermissions from "./no-permissions";

export default function LocationWeather({ route }) {
    const { colors } = useTheme();
    const { settings } = useSettings();
    const { granted, location } = useLocation();
    const [locationData, setLocationData] = useState(null);
    const [error, setError] = useState();

    const customLocation = route.params && route.params.location;
    const isModal = route.name === "LocationWeatherModal";

    useEffect(() => {
        if (location || customLocation) {
            let latitude, longitude;
            if (customLocation) {
                latitude = customLocation.lat;
                longitude = customLocation.lon;
            } else if (location) {
                latitude = location.coords.latitude;
                longitude = location.coords.longitude;
            }
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
    }, [location, customLocation, settings.units]);

    if (!granted && !customLocation) return <NoPermissions />;

    if (error) {
        return (
            <View style={styles.centeredContainer}>
                <Text style={styles.permissionErrorText}>{error}</Text>
                <StatusBar style="auto" />
            </View>
        );
    }

    if ((location === null && !customLocation) || locationData === null)
        return (
            <View style={styles.centeredContainer}>
                <ActivityIndicator color={colors.primary} />
                <StatusBar style="auto" />
            </View>
        );
    return (
        <View style={styles.container}>
            {locationData && (
                <FullWeatherCard
                    isModal={isModal}
                    locationData={locationData}
                    locationName={
                        (customLocation && customLocation.localNames[settings.lang]) ||
                        (location.locationNames && location.locationNames[settings.lang])
                    }
                    lang={settings.lang}
                />
            )}
        </View>
    );
}
