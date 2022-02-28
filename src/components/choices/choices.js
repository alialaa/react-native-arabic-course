import PropTypes from "prop-types";
import { View, TouchableWithoutFeedback, ViewPropTypes } from "react-native";
import { useTheme } from "@react-navigation/native";
import { selectionAsync } from "expo-haptics";
import Text from "../text/text";
import styles from "./choices.styles";

export default function Choices({ style, items, value, onValueChange }) {
    const { colors } = useTheme();
    return (
        <View style={[styles.container, style]}>
            {items.map(item => (
                <TouchableWithoutFeedback
                    key={item.value}
                    onPress={() => {
                        selectionAsync();
                        if (onValueChange) {
                            onValueChange(item.value);
                        }
                    }}
                >
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

Choices.propTypes = {
    style: ViewPropTypes.style,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    ).isRequired,
    value: PropTypes.string,
    onValueChange: PropTypes.func
};
