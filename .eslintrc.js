module.exports = {
    env: {
        es2021: true,
        node: true
    },
    globals: {
        fetch: false
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        "react/react-in-jsx-scope": "off",
        "no-console": "warn",
        "react/prop-types": ["error", { ignore: ["navigation", "route"] }]
    }
};
