module.exports = {
    extends: "@reactway",
    plugins: ["react", "react-hooks"],
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        // "@typescript-eslint/no-unused-vars": "off",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/jsx-key": "error",
        "react/jsx-pascal-case": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "react/button-has-type": "error",
        "react/no-string-refs": "error"
    }
};
