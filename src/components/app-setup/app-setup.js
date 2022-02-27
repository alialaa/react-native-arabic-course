import { useEffect } from "react";
import { I18nManager } from "react-native";
import PropTypes from "prop-types";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { reloadAsync } from "expo-updates";
import i18n from "@langs";
import { useSettings } from "@contexts";
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Cairo_400Regular, Cairo_600SemiBold, Cairo_700Bold } from "@expo-google-fonts/cairo";

I18nManager.allowRTL(true);

export default function AppSetup({ children }) {
    const { settings } = useSettings();

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
            const lang = settings.lang;
            const isRTL = I18nManager.isRTL;
            i18n.locale = lang;
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
    }, [settings.lang]);
    return fontsLoaded ? children : <AppLoading />;
}

AppSetup.propTypes = {
    children: PropTypes.node
};
