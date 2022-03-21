import { TouchableOpacity, View, Dimensions, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "@components";
import { SearchLocations, FavoriteLocations, LocationWeather } from "@screens";
import i18n from "@langs";
import { commonScreenOptions, DarkTheme } from "./navigator.styles";

const FavoritesStack = createNativeStackNavigator();
const screenWidth = Dimensions.get("screen").width;

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
                    headerBackVisible: false,
                    headerTitle: () => (
                        <View
                            style={{
                                width: screenWidth - 32,
                                height: 30,
                                flexDirection: "row",
                                alignItems: "center"
                            }}
                        >
                            <TextInput
                                style={{
                                    flex: 1,
                                    height: 30,
                                    marginRight: 10,
                                    backgroundColor: "red"
                                }}
                            />
                            <TouchableOpacity>
                                <Text style={{ color: DarkTheme.colors.text }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
            <FavoritesStack.Screen name="LocationWeather" component={LocationWeather} />
        </FavoritesStack.Navigator>
    );
}
