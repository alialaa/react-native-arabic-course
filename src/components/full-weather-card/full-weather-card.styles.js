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
        margin: 20,
        paddingHorizontal: 0
    },
    hourlyItem: {
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 10
    },
    hourlyTime: {
        opacity: 0.75
    },
    hourlyTemp: {
        fontSize: 15
    },
    hourlyIcon: {
        marginTop: 10,
        marginBottom: 7
    },
    dailyCard: {
        margin: 20,
        marginTop: 0,
        borderTopWidth: 4
    },
    dailyTitle: {
        fontSize: 19,
        marginBottom: 5
    },
    dailyItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 5
    },
    dateIconContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "50%",
        justifyContent: "space-between"
    },
    dailyText: {
        fontSize: 16
    }
});

export default styles;
