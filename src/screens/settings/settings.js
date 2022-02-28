import { View, ScrollView } from "react-native";
import { Text, Card } from "@components";
import { useSettings } from "@contexts";
import styles from "./settings.styles";

export default function Settings() {
    const { settings, setSettings } = useSettings();
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Card>
                <Text>Some text</Text>
            </Card>
        </ScrollView>
    );
}
