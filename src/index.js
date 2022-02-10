import { StyleSheet, View, Text, Platform } from "react-native";

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
        backgroundColor: Platform.OS === "android" ? "red" : "#1ca663",
        width: "50%",
        // height: 70,
        padding: 10,
        marginTop: 0,
        borderWidth: 3,
        borderColor: "#000",
        borderRadius: 10,
        opacity: 1,
        shadowColor: "#000",
        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 5,
        shadowOpacity: 0.6,
        elevation: 5
    },
    text: {
        // fontSize: 24,
        // fontWeight: "600",
        // fontStyle: "italic",
        ...Platform.select({
            ios: {
                fontSize: 24,
                fontWeight: "600",
                fontStyle: "italic"
            },
            android: {
                fontSize: 20,
                fontWeight: "300"
            },
            default: {}
        }),
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
