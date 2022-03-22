import PropTypes from "prop-types";
import { View, TouchableOpacity } from "react-native";
import { selectionAsync } from "expo-haptics";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Text from "../text/text";
import styles from "./full-weather-card.styles";
import i18n from "@langs";

export default function LocationName({
    locationName,
    isModal,
    onToggleFavorite,
    isFavorite,
    isCustomLocation
}) {
    const { goBack } = useNavigation();
    return (
        <View style={styles.locationNameContainer}>
            {(isModal || isCustomLocation) && (
                <View style={{ width: "15%" }}>
                    <TouchableOpacity onPress={() => goBack()}>
                        <Text style={{ color: "#fff", fontSize: 16 }}>
                            {i18n.t("favorites.back")}
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
            <View style={{ width: isModal || isCustomLocation ? "70%" : "100%" }}>
                <Text
                    numberOfLines={1}
                    weight="700"
                    style={[styles.currentWeatherText, styles.locationNameText]}
                >
                    {locationName || i18n.t("weather.yourLocation")}
                </Text>
            </View>
            {(isModal || isCustomLocation) && (
                <View style={{ width: "15%", alignItems: "flex-end" }}>
                    <TouchableOpacity
                        onPress={() => {
                            selectionAsync();
                            if (onToggleFavorite) {
                                onToggleFavorite();
                            }
                        }}
                    >
                        <Ionicons
                            name={isFavorite ? "heart" : "heart-outline"}
                            color="#fff"
                            size={24}
                        />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

LocationName.propTypes = {
    locationName: PropTypes.string,
    isModal: PropTypes.bool,
    isFavorite: PropTypes.bool,
    isCustomLocation: PropTypes.bool,
    onToggleFavorite: PropTypes.func
};
