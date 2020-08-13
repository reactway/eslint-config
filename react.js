module.exports = {
    extends: ["@reactway", "prettier/react"],
    plugins: ["react", "react-hooks"],
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        "react/jsx-uses-react": "warn",
        "react/jsx-uses-vars": "error",
        "react/jsx-key": "error",
        "react/jsx-pascal-case": "error",
        "react-hooks/rules-of-hooks": "warn",
        "react-hooks/exhaustive-deps": "warn",
        "react/button-has-type": "warn",
        "react/no-string-refs": "error",
        "react/jsx-boolean-value": ["warn", "never"],
        "prettier/prettier": "warn",
        "import/no-default-export": "off"
    }
};
