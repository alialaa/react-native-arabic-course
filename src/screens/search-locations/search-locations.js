import { useLayoutEffect } from "react";
import { View, ScrollView } from "react-native";
import { Text } from "@components";
import { geocoding } from "@utils";
import SearchHeader from "./search-header";

export default function SearchLocations({ navigation }) {
    const fetchLocations = async q => {
        try {
            const response = await geocoding.get("direct", {
                params: {
                    q,
                    limit: 5
                }
            });
            console.log(response.data);
        } catch (error) {}
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <SearchHeader navigation={navigation} onSubmitSearch={fetchLocations} />
            )
        });
    }, [navigation]);
    return <ScrollView keyboardDismissMode="on-drag"></ScrollView>;
}
