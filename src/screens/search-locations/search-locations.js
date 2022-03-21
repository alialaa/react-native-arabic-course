import { useLayoutEffect } from "react";
import { View, ScrollView } from "react-native";
import { Text } from "@components";
import SearchHeader from "./search-header";

export default function SearchLocations({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => <SearchHeader navigation={navigation} />
        });
    }, [navigation]);
    return (
        <ScrollView keyboardDismissMode="on-drag">
            <View
                style={{
                    height: 1000,
                    width: 50,
                    backgroundColor: "red",
                    marginBottom: 30
                }}
            />
        </ScrollView>
    );
}
