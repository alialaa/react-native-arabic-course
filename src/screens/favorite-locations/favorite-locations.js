import { useState, useEffect, useCallback } from "react";
import { View, FlatList, TouchableOpacity, Image, AppState } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Text, Card } from "@components";
import moment from "moment-timezone";
import { Ionicons } from "@expo/vector-icons";
import { openweathermap, displayTemperature, getBgColor, getWeatherIcon } from "@utils";
import { useFavorites, useLocation, useSettings } from "@contexts";
import styles from "./favorite-locations.styles";
import { DarkTheme } from "@config/navigator/navigator.styles";

export default function FavoriteLocations({ navigation }) {
    const { favorites } = useFavorites();
    const { location, granted } = useLocation();
    const { settings } = useSettings();
    const [data, setData] = useState([]);
    const [weatherData, setWeatherData] = useState({});
    const [isRefreshing, setIsRefreshing] = useState(false);

    const fetchData = async () => {
        try {
            const responses = await Promise.all(
                data.map(location =>
                    openweathermap.get("onecall", {
                        params: {
                            lat: location.lat,
                            lon: location.lon,
                            units: settings.units,
                            lang: settings.lang,
                            exclude: "minutely,hourly,daily"
                        }
                    })
                )
            );
            let tempWeatherData = {};
            responses.forEach((response, index) => {
                tempWeatherData[`${data[index].lat}-${data[index].lon}`] = response.data;
            });
            setWeatherData(tempWeatherData);
        } catch (error) {
            // report
        }
        setIsRefreshing(false);
    };

    useEffect(() => {
        if (granted && location) {
            setData([
                {
                    name: location.locationNames["en"],
                    lon: location.coords.longitude,
                    lat: location.coords.latitude,
                    current: true,
                    localNames: {
                        en: location.locationNames["en"],
                        ar: location.locationNames["ar"] || location.locationNames["en"]
                    }
                },
                ...favorites
            ]);
        } else {
            setData([...favorites]);
        }
    }, [granted, location, favorites]);

    useFocusEffect(
        useCallback(() => {
            if (data && data.length > 0) fetchData();
        }, [data, settings.units])
    );

    useEffect(() => {
        const handleAppStateChange = nextAppState => {
            if (nextAppState === "active") {
                if (data && data.length > 0) fetchData();
            }
        };
        AppState.addEventListener("change", handleAppStateChange);

        return () => {
            AppState.removeEventListener("change", handleAppStateChange);
        };
    }, []);

    const renderItem = ({ item }) => {
        const locationWeatherData = weatherData[`${item.lat}-${item.lon}`];
        const { current, timezone } = locationWeatherData || {};
        const { dt, temp, sunrise, sunset, weather } = current || {};
        const weatherIcon = weather && getWeatherIcon(weather[0].icon);
        const bgColor =
            dt && sunrise && sunset ? getBgColor(dt, sunrise, sunset) : DarkTheme.colors.card;
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("LocationWeather", {
                        location: item
                    });
                }}
            >
                <Card style={[styles.card, { backgroundColor: bgColor }]}>
                    <View style={{ width: "60%", alignItems: "flex-start" }}>
                        <Text
                            numberOfLines={1}
                            weight="700"
                            style={[styles.text, styles.locationName]}
                        >
                            {item.localNames[settings.lang]}{" "}
                            {item.current && <Ionicons name="location" size={16} />}
                        </Text>
                        {dt && (
                            <Text weight="600" style={[styles.text, styles.time]}>
                                {moment(new Date(dt * 1000))
                                    .tz(timezone)
                                    .format("HH:mm")}
                            </Text>
                        )}
                        {weather && (
                            <Text weight="600" style={[styles.text, styles.description]}>
                                {weather[0].description}
                            </Text>
                        )}
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            width: "40%",
                            justifyContent: "flex-end"
                        }}
                    >
                        {weatherIcon && (
                            <Image
                                source={weatherIcon.source}
                                style={[
                                    styles.icon,
                                    {
                                        height: 30,
                                        width: 30 * (weatherIcon.width / weatherIcon.height)
                                    }
                                ]}
                            />
                        )}
                        {temp && (
                            <Text weight="700" style={[styles.text, styles.temp]}>
                                {displayTemperature(temp, settings.lang)}
                            </Text>
                        )}
                    </View>
                </Card>
            </TouchableOpacity>
        );
    };
    return (
        <FlatList
            data={data}
            keyExtractor={item => `${item.lat}-${item.lon}`}
            renderItem={renderItem}
            contentContainerStyle={{ paddingVertical: 10 }}
            refreshing={isRefreshing}
            onRefresh={() => {
                setIsRefreshing(true);
                fetchData();
            }}
        />
    );
}
