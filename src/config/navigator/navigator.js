import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Settings } from "@screens";
import { DarkTheme, LightTheme, commonScreenOptions } from "./navigator.styles";
import tabBarScreenOptions from "./tabbar-screen-options";

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackNavigator() {
    return (
        <HomeStack.Navigator screenOptions={commonScreenOptions}>
            <HomeStack.Screen name="Home 1" component={Home} />
            <HomeStack.Screen name="Home 2" component={Home} />
        </HomeStack.Navigator>
    );
}

export default function Navigator() {
    const scheme = useColorScheme();
    return (
        <NavigationContainer theme={scheme === "dark" ? DarkTheme : LightTheme}>
            <Tab.Navigator screenOptions={tabBarScreenOptions}>
                <Tab.Screen name="Home" component={HomeStackNavigator} />
                <Tab.Screen name="Settings" component={Settings} options={{ headerShown: true }} />
            </Tab.Navigator>
            <StatusBar style="light" />
        </NavigationContainer>
    );
}
