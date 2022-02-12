import PropTypes from "prop-types";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Cairo_400Regular, Cairo_600SemiBold, Cairo_700Bold } from "@expo-google-fonts/cairo";

export default function AppSetup({ children }) {
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
        Cairo_400Regular,
        Cairo_600SemiBold,
        Cairo_700Bold
    });
    return fontsLoaded ? children : <AppLoading />;
}

AppSetup.propTypes = {
    children: PropTypes.node
};
