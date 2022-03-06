import PropTypes from "prop-types";
import { ScrollView, View } from "react-native";
import moment from "moment-timezone";
import { getBgColor } from "@utils";
import Text from "../text/text";

export default function FullWeatherCard({ locationData }) {
    const { current } = locationData;
    const { dt, sunrise, sunset } = current;
    return (
        <ScrollView>
            <View style={{ height: 300, backgroundColor: getBgColor(dt, sunrise, sunset) }} />
            <Text>{moment(new Date()).format("dddd, D MMMM")}</Text>
        </ScrollView>
    );
}

FullWeatherCard.propTypes = {
    locationData: PropTypes.object.isRequired
};
