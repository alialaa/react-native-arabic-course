const getWeatherIcon = iconName => {
    if (iconName === "01d")
        return {
            source: require("@assets/icons/01d.png"),
            width: 190,
            height: 193
        };
    if (iconName === "01n")
        return {
            source: require("@assets/icons/01n.png"),
            width: 126,
            height: 134
        };
    if (iconName === "02d")
        return {
            source: require("@assets/icons/02d.png"),
            width: 257,
            height: 157
        };
    if (iconName === "02n")
        return {
            source: require("@assets/icons/02n.png"),
            width: 241,
            height: 159
        };
    if (iconName === "03d")
        return {
            source: require("@assets/icons/03d.png"),
            width: 204,
            height: 120
        };
    if (iconName === "03n")
        return {
            source: require("@assets/icons/03n.png"),
            width: 204,
            height: 120
        };
    if (iconName === "04d")
        return {
            source: require("@assets/icons/04d.png"),
            width: 244,
            height: 125
        };
    if (iconName === "04n")
        return {
            source: require("@assets/icons/04n.png"),
            width: 244,
            height: 125
        };
    if (iconName === "09d")
        return {
            source: require("@assets/icons/09d.png"),
            width: 204,
            height: 162
        };
    if (iconName === "09n")
        return {
            source: require("@assets/icons/09n.png"),
            width: 204,
            height: 162
        };
    if (iconName === "10d")
        return {
            source: require("@assets/icons/10d.png"),
            width: 256,
            height: 200
        };
    if (iconName === "10n")
        return {
            source: require("@assets/icons/10n.png"),
            width: 240,
            height: 201
        };
    if (iconName === "11d")
        return {
            source: require("@assets/icons/11d.png"),
            width: 204,
            height: 185
        };
    if (iconName === "11n")
        return {
            source: require("@assets/icons/11n.png"),
            width: 204,
            height: 185
        };
    if (iconName === "13d")
        return {
            source: require("@assets/icons/13d.png"),
            width: 256,
            height: 199
        };
    if (iconName === "13n")
        return {
            source: require("@assets/icons/13n.png"),
            width: 240,
            height: 200
        };
    if (iconName === "50d")
        return {
            source: require("@assets/icons/50d.png"),
            width: 225,
            height: 117
        };
    if (iconName === "50n")
        return {
            source: require("@assets/icons/50n.png"),
            width: 225,
            height: 117
        };
};

export default getWeatherIcon;
