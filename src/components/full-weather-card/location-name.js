import PropTypes from "prop-types";
import { View } from "react-native";
import Text from "../text/text";
import styles from "./full-weather-card.styles";
import i18n from "@langs";

export default function LocationName({ locationName }) {
    return (
        <View style={styles.locationNameContainer}>
            <Text weight="700" style={[styles.currentWeatherText, styles.locationNameText]}>
                {locationName || i18n.t("weather.yourLocation")}
            </Text>
        </View>
    );
}

LocationName.propTypes = {
    locationName: PropTypes.string
};
