import { View, Button } from "react-native";
import { Text } from "@components";
import i18n from "@langs";
import styles from "./home.styles";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 26 }}>{i18n.t("home.title")}</Text>
            <Button
                title="Home 2"
                onPress={() => {
                    navigation.navigate("Home 2");
                }}
            />
        </View>
    );
}
