const getTabBarIcon = (route, focused) => {
    let iconName;
    if (route.name === "Home") {
        iconName = focused ? "home" : "home-outline";
    } else if (route.name === "Settings") {
        iconName = focused ? "settings" : "settings-outline";
    }
    return iconName;
};

export default getTabBarIcon;
