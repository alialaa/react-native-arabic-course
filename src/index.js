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
        height: "100%"
    },
    box: {},
    text: {}
});
