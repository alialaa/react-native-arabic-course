import { View, ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "@react-navigation/native";
import { useLocation } from "@contexts";
import styles from "./location-weather.styles";
import NoPermissions from "./no-permissions";

export default function LocationWeather() {
    const { colors } = useTheme();
    const { granted, location } = useLocation();

    if (!granted) return <NoPermissions />;

    if (location === null)
        return (
            <View style={styles.centeredContainer}>
                <ActivityIndicator color={colors.primary} />
                <StatusBar style="auto" />
            </View>
        );

    return <View style={styles.container}></View>;
}
