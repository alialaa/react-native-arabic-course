import { useContext } from "react";
import { View, Button } from "react-native";
import { Text } from "@components";
import { SettingsContext } from "@contexts";
import styles from "./settings.styles";

export default function Settings() {
    const { settings, setSettings } = useContext(SettingsContext);
    return (
        <View style={styles.container}>
            <Text>{settings.lang}</Text>
            <Button
                title="English"
                onPress={() => {
                    setSettings({ ...settings, lang: "en" });
                }}
            />
            <Button
                title="Arabic"
                onPress={() => {
                    setSettings({ ...settings, lang: "ar" });
                }}
            />
        </View>
    );
}
