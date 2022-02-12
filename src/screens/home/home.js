import { View, Text, Button } from "react-native";
import styles from "./home.styles";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Home Page</Text>
            <Button
                title="Settings"
                onPress={() => {
                    navigation.navigate("Settings");
                }}
            />
        </View>
    );
}
