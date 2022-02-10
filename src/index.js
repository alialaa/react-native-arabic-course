import { StyleSheet, View, Text } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>Some Text</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e8e8e8",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    box: {
        backgroundColor: "#1ca663",
        width: "50%"
    },
    text: {
        fontSize: 24,
        fontWeight: "600",
        fontStyle: "italic",
        color: "#fff",
        letterSpacing: 1,
        textAlign: "center",
        textDecorationLine: "underline",
        textDecorationStyle: "double",
        textDecorationColor: "#000",
        textTransform: "uppercase",
        textShadowColor: "#000",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 1
    }
});
