module.exports = {
    extends: ["@reactway", "prettier/react"],
    plugins: ["react", "react-hooks"],
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        //#region Import rules.
        // TODO: Uncomment this when rule is fixed.
        // "import/order": [
        //     "warn",
        //     {
        //         groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        //         pathGroups: [
        //             {
        //                 pattern: "./*.scss",
        //                 group: "index",
        //                 position: "after"
        //             }
        //         ]
        //     }
        // ],
        //#endregion

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
