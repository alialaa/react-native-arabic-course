import { View, ScrollView } from "react-native";
import { Text } from "@components";
import { useSettings } from "@contexts";
import styles from "./settings.styles";

export default function Settings() {
    const { settings, setSettings } = useSettings();
    return <ScrollView contentContainerStyle={styles.container}></ScrollView>;
}
