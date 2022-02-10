import { StyleSheet, View, Image } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("@assets/check.png")} />
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
    image: {
        backgroundColor: "red",
        width: 200,
        resizeMode: "contain",
        tintColor: "#fff",
        borderWidth: 3,
        borderRadius: 10,
        opacity: 1
        // height: 50
    }
});
