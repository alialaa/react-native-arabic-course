import { View, Text, Image } from "react-native";
import styles from "./home.styles";

export default function Home() {
    return (
        <View style={styles.container}>
            <Image source={require("@assets/favicon.png")} />
            <Text>Home Page</Text>
        </View>
    );
}
