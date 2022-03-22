import { useLayoutEffect, useState } from "react";
import { View, ScrollView, ActivityIndicator, TouchableHighlight } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Text } from "@components";
import { geocoding, getErrorMessage } from "@utils";
import SearchHeader from "./search-header";
import styles from "./search-locations.styles";
import i18n from "@langs";
import { useSettings } from "@contexts";

export default function SearchLocations({ navigation }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);

    const { colors } = useTheme();
    const { settings } = useSettings();

    const fetchLocations = async q => {
        setLoading(true);
        setError(false);
        try {
            const response = await geocoding.get("direct", {
                params: {
                    q,
                    limit: 5
                }
            });
            setData(response.data);
        } catch (error) {
            setError(getErrorMessage(error));
        }
        setLoading(false);
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <SearchHeader navigation={navigation} onSubmitSearch={fetchLocations} />
            )
        });
    }, [navigation]);

    if (error) {
        return (
            <View style={styles.centeredContainer}>
                <Text>{error}</Text>
            </View>
        );
    }

    if (loading) {
        return (
            <View style={styles.centeredContainer}>
                <ActivityIndicator color={colors.primary} />
            </View>
        );
    }

    if (!data || data.length === 0) {
        return (
            <View style={styles.centeredContainer}>
                <Text>
                    {!data ? i18n.t("favorites.searchHint") : i18n.t("favorites.noResults")}
                </Text>
            </View>
        );
    }

    return (
        <ScrollView keyboardDismissMode="on-drag" contentContainerStyle={{ paddingVertical: 10 }}>
            {data.map(result => {
                const { lat, lon, name, country, state, local_names } = result;
                let localName = name;
                if (settings.lang === "ar" && local_names && local_names["ar"]) {
                    localName = local_names["ar"];
                }
                return (
                    <TouchableHighlight
                        underlayColor={colors.border}
                        onPress={() => {
                            navigation.navigate("LocationWeatherModal", {
                                location: {
                                    name,
                                    lon,
                                    lat,
                                    localNames: {
                                        en: name,
                                        ar:
                                            local_names && local_names["ar"]
                                                ? local_names["ar"]
                                                : name
                                    }
                                }
                            });
                        }}
                        key={`${lat}-${lon}`}
                        style={{
                            paddingVertical: 10,
                            paddingHorizontal: 20
                        }}
                    >
                        <Text style={{ fontSize: 16 }}>
                            {localName}
                            {state && `, ${state}`}
                            {country && `, ${country}`}
                        </Text>
                    </TouchableHighlight>
                );
            })}
        </ScrollView>
    );
}
