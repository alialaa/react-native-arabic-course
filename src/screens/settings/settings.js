import { ScrollView } from "react-native";
import { Text, Card, Button } from "@components";
import { useSettings } from "@contexts";
import styles from "./settings.styles";

export default function Settings() {
    const { settings, setSettings } = useSettings();
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Card>
                <Button title="Reload App" onPress={() => alert(true)} />
            </Card>
        </ScrollView>
    );
}
