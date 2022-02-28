import PropTypes from "prop-types";
import { TouchableOpacity, ViewPropTypes } from "react-native";
import { Text } from "@components";
import { useTheme } from "@react-navigation/native";
import styles from "./button.styles";

export default function Button({ style, title, ...props }) {
    const { colors } = useTheme();
    return (
        <TouchableOpacity
            {...props}
            style={[
                {
                    backgroundColor: colors.primary
                },
                styles.button,
                style
            ]}
        >
            <Text weight="600" style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

Button.displayName = "Custom Button";

Button.propTypes = {
    title: PropTypes.string.isRequired,
    style: ViewPropTypes.style
};
