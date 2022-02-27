import { View, Button } from "react-native";
import { Text } from "@components";
import { useSettings } from "@contexts";
import styles from "./settings.styles";

export default function Settings() {
    const { settings, setSettings } = useSettings();
    return (
        <View style={styles.container}>
            <Text>{settings.lang}</Text>
            <Button
                title="English"
                onPress={() => {
                    setSettings({ lang: "en" });
                }}
            />
            <Button
                title="Arabic"
                onPress={() => {
                    setSettings({ lang: "ar" });
                }}
            />
        </View>
    );
}
