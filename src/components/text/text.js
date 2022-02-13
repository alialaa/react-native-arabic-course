import PropTypes from "prop-types";
import { Text as NativeText, TextPropTypes } from "react-native";

export default function Text({ children, style, weight, ...props }) {
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
                    fontFamily
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
