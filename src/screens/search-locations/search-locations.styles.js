import { StyleSheet, Dimensions, I18nManager } from "react-native";
import { DarkTheme } from "@config/navigator/navigator.styles";

const screenWidth = Dimensions.get("screen").width;
const isRTL = I18nManager.isRTL;

const styles = StyleSheet.create({
    headerContainer: {
        width: screenWidth - 32,
        flexDirection: "row",
        alignItems: "center"
    },
    searchInput: {
        flex: 1,
        height: 30,
        marginRight: 10,
        backgroundColor: "rgba(255,255,255,0.06)",
        paddingHorizontal: 10,
        color: DarkTheme.colors.text,
        borderRadius: 3,
        fontFamily: isRTL ? "Cairo_400Regular" : "Roboto_400Regular"
    }
});

export default styles;
