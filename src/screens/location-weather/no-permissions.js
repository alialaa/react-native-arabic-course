import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { openSettings } from "expo-linking";
import { Text, Button } from "@components";
import i18n from "@langs";
import styles from "./location-weather.styles";

export default function NoPermissions() {
    return (
        <View style={styles.centeredContainer}>
            <Text style={styles.permissionErrorText}>{i18n.t("home.permissionError")}</Text>
            <Button title={i18n.t("home.openSettings")} onPress={() => openSettings()} />
            <StatusBar style="auto" />
        </View>
    );
}
