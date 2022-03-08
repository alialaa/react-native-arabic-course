import PropTypes from "prop-types";
import { View, Image } from "react-native";
import moment from "moment-timezone";
import Text from "../text/text";
import Card from "../card/card";
import { displayTemperature, getWeatherIcon } from "@utils";
import styles from "./full-weather-card.styles";

export default function HourlyWeather({ data, lang, timezone }) {
    return (
        <Card style={styles.hourlyCard}>
            {data.map(hour => {
                const { dt, temp, weather } = hour;
                const weatherIcon = getWeatherIcon(weather[0].icon);
                return (
                    <View key={dt}>
                        <Text>
                            {moment(new Date(dt * 1000))
                                .tz(timezone)
                                .format("HH")}
                        </Text>
                        <Image source={weatherIcon.source} />
                        <Text>{displayTemperature(temp, lang)}</Text>
                    </View>
                );
            })}
        </Card>
    );
}

HourlyWeather.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    lang: PropTypes.string,
    timezone: PropTypes.string
};
