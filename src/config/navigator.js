import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Settings } from "@screens";

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home 1" component={Home} />
            <HomeStack.Screen name="Home 2" component={Home} />
        </HomeStack.Navigator>
    );
}

export default function Navigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home" component={HomeStackNavigator} />
                <Tab.Screen name="Settings" component={Settings} options={{ headerShown: true }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
