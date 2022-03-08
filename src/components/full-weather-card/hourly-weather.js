import PropTypes from "prop-types";
import { View, Image, ScrollView } from "react-native";
import moment from "moment-timezone";
import { useTheme } from "@react-navigation/native";
import Text from "../text/text";
import Card from "../card/card";
import { displayTemperature, getWeatherIcon } from "@utils";
import styles from "./full-weather-card.styles";

export default function HourlyWeather({ data, lang, timezone }) {
    const { colors } = useTheme();
    return (
        <Card style={styles.hourlyCard}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 10 }}
            >
                {data.map(hour => {
                    const { dt, temp, weather } = hour;
                    const weatherIcon = getWeatherIcon(weather[0].icon);
                    const weatherIconRatio = weatherIcon.height / weatherIcon.width;
                    return (
                        <View key={dt} style={styles.hourlyItem}>
                            <Text style={styles.hourlyTime}>
                                {moment(new Date(dt * 1000))
                                    .tz(timezone)
                                    .format("HH")}
                            </Text>
                            <Image
                                style={[
                                    styles.hourlyIcon,
                                    {
                                        tintColor: colors.text,
                                        height: weatherIconRatio > 0.9 ? 16 : weatherIconRatio * 25,
                                        width: 25
                                    }
                                ]}
                                resizeMode="contain"
                                source={weatherIcon.source}
                            />
                            <Text weight="600" style={styles.hourlyTemp}>
                                {displayTemperature(temp, lang)}
                            </Text>
                        </View>
                    );
                })}
            </ScrollView>
        </Card>
    );
}

HourlyWeather.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    lang: PropTypes.string,
    timezone: PropTypes.string
};
