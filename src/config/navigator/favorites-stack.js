import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchLocations, FavoriteLocations, LocationWeather } from "@screens";
import i18n from "@langs";
import { commonScreenOptions } from "./navigator.styles";

const FavoritesStack = createNativeStackNavigator();

export default function FavoritesStackNavigator() {
    return (
        <FavoritesStack.Navigator screenOptions={commonScreenOptions}>
            <FavoritesStack.Screen
                name="FavoriteLocations"
                component={FavoriteLocations}
                options={{
                    title: i18n.t("favorites.title")
                }}
            />
            <FavoritesStack.Screen name="SearchLocations" component={SearchLocations} />
            <FavoritesStack.Screen name="LocationWeather" component={LocationWeather} />
        </FavoritesStack.Navigator>
    );
}
