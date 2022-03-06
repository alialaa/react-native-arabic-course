import PropTypes from "prop-types";
import { ScrollView, View } from "react-native";
import { getBgColor } from "@utils";
import Text from "../text/text";

export default function FullWeatherCard({ locationData }) {
    const { current } = locationData;
    const { dt, sunrise, sunset } = current;
    return (
        <ScrollView>
            <View style={{ height: 300, backgroundColor: getBgColor(dt, sunrise, sunset) }} />
            <Text>{JSON.stringify(locationData)}</Text>
        </ScrollView>
    );
}

FullWeatherCard.propTypes = {
    locationData: PropTypes.object.isRequired
};
