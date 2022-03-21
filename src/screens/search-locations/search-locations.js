import { useLayoutEffect, useRef, useEffect } from "react";
import { View, Dimensions, TextInput, TouchableOpacity } from "react-native";
import { Text } from "@components";
import { DarkTheme } from "@config/navigator/navigator.styles";
import i18n from "@langs";

const screenWidth = Dimensions.get("screen").width;

const SearchHeader = ({ navigation }) => {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <View
            style={{
                width: screenWidth - 32,
                height: 30,
                flexDirection: "row",
                alignItems: "center"
            }}
        >
            <TextInput
                ref={inputRef}
                style={{
                    flex: 1,
                    height: 30,
                    marginRight: 10,
                    backgroundColor: "red"
                }}
            />
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: DarkTheme.colors.text }}>{i18n.t("favorites.cancel")}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default function SearchLocations({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => <SearchHeader navigation={navigation} />
        });
    }, [navigation]);
    return (
        <View>
            <Text>Search Locations</Text>
        </View>
    );
}
