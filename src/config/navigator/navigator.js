import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LocationWeather, Settings } from "@screens";
import { useSettings } from "@contexts";
import i18n from "@langs";
import { DarkTheme, LightTheme } from "./navigator.styles";
import tabBarScreenOptions from "./tabbar-screen-options";

const Tab = createBottomTabNavigator();

export default function Navigator() {
    const deviceColorScheme = useColorScheme();
    const { settings } = useSettings();
    const scheme = settings.colorScheme === "auto" ? deviceColorScheme : settings.colorScheme;
    return (
        <NavigationContainer theme={scheme === "dark" ? DarkTheme : LightTheme}>
            <Tab.Navigator screenOptions={tabBarScreenOptions}>
                <Tab.Screen
                    name="Home"
                    component={LocationWeather}
                    options={{ title: i18n.t("home.title") }}
                />
                <Tab.Screen
                    name="Settings"
                    component={Settings}
                    options={{ title: i18n.t("settings.title"), headerShown: true }}
                />
            </Tab.Navigator>
            <StatusBar style="light" />
        </NavigationContainer>
    );
}
