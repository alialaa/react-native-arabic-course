import { StyleSheet, View } from "react-native";
import { Home, Settings } from "./screens";

export default function App() {
    return (
        <View style={styles.container}>
            <Home />
            <Settings />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
