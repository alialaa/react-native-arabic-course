import PropTypes from "prop-types";
import { useRef, useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { DarkTheme } from "@config/navigator/navigator.styles";
import i18n from "@langs";
import { Text } from "@components";
import styles from "./search-locations.styles";

export default function SearchHeader({ navigation, onSubmitSearch }) {
    const [searchQuery, setSearchQuery] = useState("");
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <View style={styles.headerContainer}>
            <TextInput
                ref={inputRef}
                style={styles.searchInput}
                placeholder={i18n.t("favorites.searchPlaceholder")}
                placeholderTextColor="rgba(255,255,255,0.2)"
                returnKeyType="search"
                value={searchQuery}
                onChangeText={text => setSearchQuery(text)}
                onSubmitEditing={() => onSubmitSearch(searchQuery)}
            />
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: DarkTheme.colors.text }}>{i18n.t("favorites.cancel")}</Text>
            </TouchableOpacity>
        </View>
    );
}

SearchHeader.propTypes = {
    onSubmitSearch: PropTypes.func.isRequired
};
