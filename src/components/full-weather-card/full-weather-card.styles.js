import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    locationNameContainer: {
        alignItems: "center",
        padding: 10
    },
    locationNameText: {
        color: "#fff",
        fontSize: 28,
        textShadowColor: "rgba(1,1,1,0.5)",
        textShadowRadius: 1,
        textShadowOffset: { width: 1, height: 1 }
    },
    gradient: {
        position: "absolute",
        width: "100%",
        height: "400%"
    },
    scrollOffset: {
        position: "absolute",
        width: "100%",
        height: 1000,
        marginTop: -1000
    }
});

export default styles;
