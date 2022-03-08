import PropTypes from "prop-types";
import { View, Image } from "react-native";
import moment from "moment-timezone";
import { useTheme } from "@react-navigation/native";
import i18n from "@langs";
import { getWeatherIcon, displayTemperature } from "@utils";
import styles from "./full-weather-card.styles";
import Text from "../text/text";
import Card from "../card/card";

export default function DailyWeather({ data, lang, timezone }) {
    const { colors } = useTheme();
    return (
        <Card style={[styles.dailyCard, { borderTopColor: colors.primary }]}>
            <Text style={styles.dailyTitle} weight="700">
                {i18n.t("weather.dailyTitle")}
            </Text>
            {data.map((day, index) => {
                const { dt, weather, temp } = day;
                const weatherIcon = getWeatherIcon(weather[0].icon);
                const weatherIconRatio = weatherIcon.height / weatherIcon.width;
                const today = moment(new Date()).tz(timezone);
                const weatherDay = moment(new Date(dt * 1000)).tz(timezone);
                return (
                    <View
                        key={dt}
                        style={[
                            styles.dailyItem,
                            {
                                borderColor: colors.border,
                                borderBottomWidth: data.length === index + 1 ? 0 : 1
                            }
                        ]}
                    >
                        <View style={styles.dateIconContainer}>
                            <Text style={styles.dailyText}>
                                {today.date() === weatherDay.date()
                                    ? i18n.t("weather.today")
                                    : weatherDay.format("ddd, D MMM")}
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
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.dailyText}>
                                {displayTemperature(temp.max, lang)}
                            </Text>
                            <Text style={styles.dailyText}> / </Text>
                            <Text style={styles.dailyText}>
                                {displayTemperature(temp.min, lang)}
                            </Text>
                        </View>
                    </View>
                );
            })}
        </Card>
    );
}

DailyWeather.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    lang: PropTypes.string,
    timezone: PropTypes.string
};
