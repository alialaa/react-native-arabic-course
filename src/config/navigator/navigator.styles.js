import { I18nManager } from "react-native";
const isRTL = I18nManager.isRTL;

export const DarkTheme = {
    colors: {
        background: "#0d0a14",
        border: "#1d162e",
        card: "#151021",
        notification: "#ff443a",
        primary: "#bb29eb",
        text: "#dafaf7"
    },
    dark: true
};

export const LightTheme = {
    colors: {
        background: "#dad1ed",
        border: "#d1c8e8",
        card: "#f1ebff",
        notification: "#ff443a",
        primary: "#bb29eb",
        text: "#161021"
    },
    dark: false
};

export const commonScreenOptions = {
    headerStyle: {
        backgroundColor: DarkTheme.colors.card
    },
    headerTintColor: DarkTheme.colors.text,
    headerTitleStyle: {
        fontFamily: isRTL ? "Cairo_700Bold" : "Roboto_700Bold",
        fontSize: 22
    },
    headerBackTitleStyle: {
        fontFamily: isRTL ? "Cairo_600SemiBold" : "Roboto_500Medium",
        fontSize: 14
    }
};
