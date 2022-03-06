import PropTypes from "prop-types";
import { ScrollView, View } from "react-native";
import moment from "moment-timezone";
import { getBgColor, displayTemperature } from "@utils";
import Text from "../text/text";
import i18n from "@langs";

export default function FullWeatherCard({ locationData, locationName, lang }) {
    const { current, timezone, daily } = locationData;
    const { dt, sunrise, sunset, temp, weather } = current;
    const locationDate = moment(new Date(dt * 1000)).tz(timezone);
    return (
        <ScrollView>
            <View style={{ height: 300, backgroundColor: getBgColor(dt, sunrise, sunset) }} />
            <Text>{locationName || i18n.t("weather.yourLocation")}</Text>
            <Text>{locationDate.format("dddd, D MMMM")}</Text>
            <Text>{locationDate.format("HH:mm")}</Text>
            <Text>{displayTemperature(temp, lang)}</Text>
            <Text>{weather[0].description}</Text>
            <View style={{ flexDirection: "row" }}>
                <Text>{displayTemperature(daily[0].temp.max, lang)}</Text>
                <Text>/</Text>
                <Text>{displayTemperature(daily[0].temp.min, lang)}</Text>
            </View>
        </ScrollView>
    );
}

FullWeatherCard.propTypes = {
    locationData: PropTypes.object.isRequired,
    locationName: PropTypes.string,
    lang: PropTypes.string
};
