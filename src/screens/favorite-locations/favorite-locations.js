import { View } from "react-native";
import { Text } from "@components";
import { useFavorites } from "@contexts";

export default function FavoriteLocations() {
    const { favorites } = useFavorites();
    return (
        <View>
            <Text>{JSON.stringify(favorites)}</Text>
        </View>
    );
}
