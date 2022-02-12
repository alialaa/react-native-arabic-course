import { StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Cairo_400Regular, Cairo_600SemiBold, Cairo_700Bold } from "@expo-google-fonts/cairo";

export default function App() {
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
        Cairo_400Regular,
        Cairo_600SemiBold,
        Cairo_700Bold
    });
    if (!fontsLoaded) return <AppLoading />;
    return (
        <View style={styles.container}>
            <Text style={{ color: "#fff", fontSize: 28 }}>عربي</Text>
            <Text
                style={{
                    fontSize: 28,
                    color: "#fff",
                    fontFamily: "Cairo_700Bold"
                }}
            >
                بالعربي
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#222",
        justifyContent: "center",
        alignItems: "center"
    }
});
