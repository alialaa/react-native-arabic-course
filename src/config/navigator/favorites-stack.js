import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchLocations, FavoriteLocations, LocationWeather } from "@screens";
import i18n from "@langs";
import { commonScreenOptions, DarkTheme } from "./navigator.styles";

const FavoritesStack = createNativeStackNavigator();

export default function FavoritesStackNavigator() {
    return (
        <FavoritesStack.Navigator screenOptions={commonScreenOptions}>
            <FavoritesStack.Screen
                name="FavoriteLocations"
                component={FavoriteLocations}
                options={({ navigation }) => ({
                    title: i18n.t("favorites.title"),
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate("SearchLocations")}>
                            <Ionicons name="search" size={20} color={DarkTheme.colors.text} />
                        </TouchableOpacity>
                    )
                })}
            />
            <FavoritesStack.Screen
                name="SearchLocations"
                component={SearchLocations}
                options={{
                    animation: "fade_from_bottom",
                    headerBackVisible: false
                }}
            />
            <FavoritesStack.Screen
                name="LocationWeatherModal"
                component={LocationWeather}
                options={{
                    headerShown: false,
                    presentation: "modal"
                }}
            />
            <FavoritesStack.Screen
                name="LocationWeather"
                component={LocationWeather}
                options={{
                    headerShown: false
                }}
            />
        </FavoritesStack.Navigator>
    );
}
