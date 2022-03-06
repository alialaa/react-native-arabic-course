import PropTypes from "prop-types";
import { ScrollView, View, Image } from "react-native";
import moment from "moment-timezone";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { getBgColor, displayTemperature, getWeatherIcon } from "@utils";
import Text from "../text/text";
import i18n from "@langs";
import styles from "./full-weather-card.styles";

export default function FullWeatherCard({ locationData, locationName, lang }) {
    const { current, timezone, daily } = locationData;
    const { dt, sunrise, sunset, temp, weather } = current;
    const locationDate = moment(new Date(dt * 1000)).tz(timezone);
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView
                edges={["top"]}
                style={{ backgroundColor: getBgColor(dt, sunrise, sunset) }}
            >
                <View style={styles.locationNameContainer}>
                    <Text weight="700" style={styles.locationNameText}>
                        {locationName || i18n.t("weather.yourLocation")}
                    </Text>
                </View>
            </SafeAreaView>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
                    <Text>{locationDate.format("dddd, D MMMM")}</Text>
                    <Text>{locationDate.format("HH:mm")}</Text>
                    <Text>{displayTemperature(temp, lang)}</Text>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={getWeatherIcon(weather[0].icon).source}
                    />
                    <Text>{weather[0].description}</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text>{displayTemperature(daily[0].temp.max, lang)}</Text>
                        <Text>/</Text>
                        <Text>{displayTemperature(daily[0].temp.min, lang)}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

FullWeatherCard.propTypes = {
    locationData: PropTypes.object.isRequired,
    locationName: PropTypes.string,
    lang: PropTypes.string
};
