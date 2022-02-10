import { StyleSheet, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={[styles.box, { backgroundColor: "teal" }]} />
            <View style={[styles.box, { backgroundColor: "purple" }]} />
            <View style={[styles.box, { backgroundColor: "slateblue" }]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#222",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        flexWrap: "wrap",
        alignContent: "space-around"
    },
    box: {
        backgroundColor: "red",
        width: 50,
        height: 400
    }
});
