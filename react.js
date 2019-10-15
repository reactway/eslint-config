module.exports = {
    extends: ["@reactway", "prettier/react"],
    plugins: ["react", "react-hooks"],
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/jsx-key": "error",
        "react/jsx-pascal-case": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "react/button-has-type": "error",
        "react/no-string-refs": "error",
        "react/jsx-boolean-value": ["error", "never"]
    }
};
