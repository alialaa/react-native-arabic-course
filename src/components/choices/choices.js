import { View, TouchableWithoutFeedback } from "react-native";
import { useTheme } from "@react-navigation/native";
import Text from "../text/text";
import styles from "./choices.styles";

export default function Choices({ style, items, value, onValueChange }) {
    const { colors } = useTheme();
    return (
        <View style={[styles.container, style]}>
            {items.map(item => (
                <TouchableWithoutFeedback key={item.value}>
                    <View
                        style={[
                            styles.item,
                            {
                                borderColor: colors.border,
                                backgroundColor:
                                    item.value === value ? colors.primary : colors.background
                            }
                        ]}
                    >
                        <Text
                            style={[
                                styles.itemText,
                                {
                                    color: item.value === value ? "#fff" : colors.text
                                }
                            ]}
                        >
                            {item.label}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            ))}
        </View>
    );
}
