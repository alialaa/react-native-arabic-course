import { I18nManager } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { commonScreenOptions } from "./navigator.styles";
import { getTabBarIcon } from "@utils";

const isRTL = I18nManager.isRTL;

const tabBarScreenOptions = ({ route }) => ({
    ...commonScreenOptions,
    headerShown: false,
    tabBarLabelStyle: {
        fontFamily: isRTL ? "Cairo_600SemiBold" : "Roboto_500Medium"
    },
    tabBarIcon: ({ focused, color, size }) => {
        return <Ionicons name={getTabBarIcon(route, focused)} color={color} size={size} />;
    }
});

export default tabBarScreenOptions;
