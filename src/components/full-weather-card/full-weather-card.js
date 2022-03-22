import PropTypes from "prop-types";
import { ScrollView, View, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getBgColor } from "@utils";
import LocationName from "./location-name";
import CurrentWeather from "./current-weather";
import HourlyWeather from "./hourly-weather";
import DailyWeather from "./daily-weather";
import CurrentInfo from "./current-info";
export default function FullWeatherCard({
    locationData,
    locationName,
    lang,
    isModal,
    onToggleFavorite
}) {
    const { current, hourly, timezone, daily } = locationData;
    const { dt, sunrise, sunset } = current;

    const HeaderTag = isModal && Platform.OS === "ios" ? View : SafeAreaView;

    return (
        <View style={{ flex: 1 }}>
            <HeaderTag edges={["top"]} style={{ backgroundColor: getBgColor(dt, sunrise, sunset) }}>
                <LocationName
                    onToggleFavorite={onToggleFavorite}
                    isModal={isModal}
                    locationName={locationName}
                />
            </HeaderTag>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <CurrentWeather locationData={locationData} lang={lang} />
                <HourlyWeather data={hourly} lang={lang} timezone={timezone} />
                <DailyWeather data={daily} lang={lang} timezone={timezone} />
                <CurrentInfo data={current} lang={lang} />
            </ScrollView>
        </View>
    );
}

FullWeatherCard.propTypes = {
    locationData: PropTypes.object.isRequired,
    locationName: PropTypes.string,
    lang: PropTypes.string,
    isModal: PropTypes.bool,
    onToggleFavorite: PropTypes.func
};
