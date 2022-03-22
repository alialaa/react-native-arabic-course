import { useState, useEffect } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Text, Card } from "@components";
import { useFavorites, useLocation, useSettings } from "@contexts";
import styles from "./favorite-locations.styles";

export default function FavoriteLocations({ navigation }) {
    const { favorites } = useFavorites();
    const { location, granted } = useLocation();
    const { settings } = useSettings();
    const [data, setData] = useState([]);

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

    const renderItem = ({ item }) => {
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
