import PropTypes from "prop-types";
import { View, Image } from "react-native";
import moment from "moment-timezone";
import { LinearGradient } from "expo-linear-gradient";
import { displayTemperature, getWeatherIcon, getBgColor } from "@utils";
import Text from "../text/text";
import styles from "./full-weather-card.styles";

export default function CurrentWeather({ locationData, lang }) {
    const { current, timezone, daily } = locationData;
    const { dt, sunrise, sunset, temp, weather } = current;
    const locationDate = moment(new Date(dt * 1000)).tz(timezone);
    const weatherIcon = getWeatherIcon(weather[0].icon);
    return (
        <View>
            <LinearGradient
                colors={[getBgColor(dt, sunrise, sunset), "transparent"]}
                style={styles.gradient}
            />
            <View
                style={[
                    styles.scrollOffset,
                    {
                        backgroundColor: getBgColor(dt, sunrise, sunset)
                    }
                ]}
            />
            <View style={styles.currentWeatherContainer}>
                <Text style={styles.currentWeatherText}>{locationDate.format("dddd, D MMMM")}</Text>
                <Text style={[styles.currentWeatherText, { marginTop: 10 }]}>
                    {locationDate.format("HH:mm")}
                </Text>

                <View style={styles.tempIconContainer}>
                    <Image
                        style={[
                            styles.weatherIcon,
                            {
                                width: 50 * (weatherIcon.width / weatherIcon.height),
                                height: 50
                            }
                        ]}
                        source={weatherIcon.source}
                    />
                    <Text weight="700" style={[styles.currentWeatherText, { fontSize: 34 }]}>
                        {displayTemperature(temp, lang)}
                    </Text>
                </View>

                <Text
                    style={[
                        styles.currentWeatherText,
                        { marginBottom: 5, textTransform: "capitalize" }
                    ]}
                >
                    {weather[0].description}
                </Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.currentWeatherText}>
                        {displayTemperature(daily[0].temp.max, lang)}
                    </Text>
                    <Text style={styles.currentWeatherText}> / </Text>
                    <Text style={styles.currentWeatherText}>
                        {displayTemperature(daily[0].temp.min, lang)}
                    </Text>
                </View>
            </View>
        </View>
    );
}

CurrentWeather.propTypes = {
    locationData: PropTypes.object,
    lang: PropTypes.string
};
