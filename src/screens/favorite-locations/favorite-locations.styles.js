import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 20,
        marginVertical: 7.5,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    locationName: {
        fontSize: 20
    },
    text: {
        color: "#fff",
        textShadowColor: "rgba(1,1,1,0.5)",
        textShadowRadius: 1,
        textShadowOffset: { width: 1, height: 1 },
        fontSize: 15
    },
    time: {
        marginTop: 5,
        opacity: 0.75
    },
    description: {
        marginTop: 30,
        textTransform: "capitalize"
    },
    icon: {
        tintColor: "#fff",
        marginRight: 10
    },
    temp: {
        fontSize: 32
    }
});

export default styles;
