import PropTypes from "prop-types";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getBgColor } from "@utils";
import LocationName from "./location-name";
import CurrentWeather from "./current-weather";

export default function FullWeatherCard({ locationData, locationName, lang }) {
    const { current } = locationData;
    const { dt, sunrise, sunset } = current;

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView
                edges={["top"]}
                style={{ backgroundColor: getBgColor(dt, sunrise, sunset) }}
            >
                <LocationName locationName={locationName} />
            </SafeAreaView>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <CurrentWeather locationData={locationData} lang={lang} />
            </ScrollView>
        </View>
    );
}

FullWeatherCard.propTypes = {
    locationData: PropTypes.object.isRequired,
    locationName: PropTypes.string,
    lang: PropTypes.string
};
