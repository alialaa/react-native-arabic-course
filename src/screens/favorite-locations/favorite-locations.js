import { useState, useEffect } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Text, Card } from "@components";
import { openweathermap } from "@utils";
import { useFavorites, useLocation, useSettings } from "@contexts";
import styles from "./favorite-locations.styles";

export default function FavoriteLocations({ navigation }) {
    const { favorites } = useFavorites();
    const { location, granted } = useLocation();
    const { settings } = useSettings();
    const [data, setData] = useState([]);
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        if (granted && location) {
            setData([
                {
                    name: location.locationNames["en"],
                    lon: location.coords.longitude,
                    lat: location.coords.latitude,
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

    useEffect(() => {
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
        };
        if (data && data.length > 0) fetchData();
    }, [data, settings.units]);

    const renderItem = ({ item }) => {
        const locationWeatherData = weatherData[`${item.lat}-${item.lon}`];
        console.log(locationWeatherData);
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("LocationWeather", {
                        location: item
                    });
                }}
            >
                <Card style={styles.card}>
                    <Text weight="700" style={styles.locationName}>
                        {item.localNames[settings.lang]}
                    </Text>
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
        />
    );
}
