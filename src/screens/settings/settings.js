import { ScrollView } from "react-native";
import { Card, Choices } from "@components";
import { useSettings } from "@contexts";
import styles from "./settings.styles";

export default function Settings() {
    const { settings, setSettings } = useSettings();
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Card>
                <Choices
                    items={[
                        {
                            label: "Light",
                            value: "light"
                        },
                        {
                            label: "Dark",
                            value: "dark"
                        }
                    ]}
                    value="light"
                    onValueChange={value => console.log(value)}
                />
            </Card>
        </ScrollView>
    );
}
