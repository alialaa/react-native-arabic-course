import { StyleSheet, View } from "react-native";
import { Text, AppSetup } from "@components";

export default function App() {
    return (
        <AppSetup>
            <View style={styles.container}>
                <Text style={{ color: "#fff", fontSize: 40 }}>عربي</Text>
            </View>
        </AppSetup>
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
