import { useLayoutEffect, useState } from "react";
import { View, ScrollView, ActivityIndicator } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Text } from "@components";
import { geocoding, getErrorMessage } from "@utils";
import SearchHeader from "./search-header";
import styles from "./search-locations.styles";
import i18n from "@langs";

export default function SearchLocations({ navigation }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);

    const { colors } = useTheme();

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
        <ScrollView keyboardDismissMode="on-drag">
            <Text>{JSON.stringify(data)}</Text>
        </ScrollView>
    );
}
