import PropTypes from "prop-types";
import { Text as NativeText, TextPropTypes } from "react-native";
import { useTheme } from "@react-navigation/native";

export default function Text({ children, style, weight, ...props }) {
    const { colors } = useTheme();
    let fontFamily = "Roboto_400Regular";
    if (weight === "400") {
        fontFamily = "Roboto_400Regular";
    }
    if (weight === "600") {
        fontFamily = "Roboto_500Medium";
    }
    if (weight === "700") {
        fontFamily = "Roboto_700Bold";
    }
    return (
        <NativeText
            style={[
                {
                    fontFamily,
                    color: colors.text
                },
                style
            ]}
            {...props}
        >
            {children}
        </NativeText>
    );
}

Text.displayName = "Custom Text";

Text.propTypes = {
    ...TextPropTypes,
    weight: PropTypes.oneOf(["400", "600", "700"])
};

Text.defaultProps = {
    weight: "400"
};
