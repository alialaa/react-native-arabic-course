import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    locationNameContainer: {
        alignItems: "center",
        padding: 10,
        paddingTop: 20
    },
    currentWeatherText: {
        color: "#fff",
        fontSize: 18,
        textShadowColor: "rgba(1,1,1,0.5)",
        textShadowRadius: 1,
        textShadowOffset: { width: 1, height: 1 }
    },
    locationNameText: {
        fontSize: 28
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
    },
    currentWeatherContainer: {
        alignItems: "center",
        padding: 10
    },
    tempIconContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 30,
        marginBottom: 15
    },
    weatherIcon: {
        tintColor: "#fff",
        marginRight: 10,
        resizeMode: "contain"
    },
    hourlyCard: {
        margin: 20
    }
});

export default styles;
