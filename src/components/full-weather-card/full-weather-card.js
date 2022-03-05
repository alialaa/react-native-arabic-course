import PropTypes from "prop-types";
import { ScrollView } from "react-native";
import Text from "../text/text";

export default function FullWeatherCard({ locationData }) {
    return (
        <ScrollView>
            <Text>{JSON.stringify(locationData)}</Text>
        </ScrollView>
    );
}

FullWeatherCard.propTypes = {
    locationData: PropTypes.object.isRequired
};
