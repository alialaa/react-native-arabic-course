import PropTypes from "prop-types";
import { ScrollView, View } from "react-native";
import { getBgColor, displayTemperature } from "@utils";
import Text from "../text/text";

export default function FullWeatherCard({ locationData }) {
    const { current } = locationData;
    const { dt, sunrise, sunset } = current;
    return (
        <ScrollView>
            <View style={{ height: 300, backgroundColor: getBgColor(dt, sunrise, sunset) }} />
            <Text>{displayTemperature(23.5, "ar")}</Text>
        </ScrollView>
    );
}

FullWeatherCard.propTypes = {
    locationData: PropTypes.object.isRequired
};
