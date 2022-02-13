import { useEffect } from "react";
import { I18nManager } from "react-native";
import PropTypes from "prop-types";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { reloadAsync } from "expo-updates";
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Cairo_400Regular, Cairo_600SemiBold, Cairo_700Bold } from "@expo-google-fonts/cairo";

I18nManager.allowRTL(true);

export default function AppSetup({ children }) {
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
        Cairo_400Regular,
        Cairo_600SemiBold,
        Cairo_700Bold
    });
    useEffect(() => {
        const loadLanguage = async () => {
            const lang = "en";
            const isRTL = I18nManager.isRTL;
            if (lang === "en" && isRTL) {
                await I18nManager.forceRTL(false);
                await reloadAsync();
            }
            if (lang === "ar" && !isRTL) {
                await I18nManager.forceRTL(true);
                await reloadAsync();
            }
        };
        loadLanguage();
    }, []);
    return fontsLoaded ? children : <AppLoading />;
}

AppSetup.propTypes = {
    children: PropTypes.node
};
