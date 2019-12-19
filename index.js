module.exports = {
    extends: ["plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    plugins: ["import"],
    parserOptions: {
        ecmaVersion: 6,
        project: "./tsconfig.json",
        sourceType: "module"
    },
    rules: {
        //#region ESlint rules.
        eqeqeq: ["error", "always", { null: "ignore" }],
        "guard-for-in": "error",
        //#endregion

        //#region Import rules.
        "import/no-useless-path-segments": "warn",
        // TODO: "import/no-self-import": "error", Check why it doesn't work.
        "import/no-default-export": "error",
        "import/no-anonymous-default-export": "error",
        "import/newline-after-import": ["warn", { count: 1 }],
        // TODO: Uncomment this when rule is fixed. +"import/order": ["warn", { groups: ["builtin", "external", "internal", "parent", "sibling", "index"] }],
        //#endregion

        //#region TypeScript ESlint Recommended rules.
        "@typescript-eslint/consistent-type-assertions": ["error", { assertionStyle: "as", objectLiteralTypeAssertions: "never" }],
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-empty-interface": "warn",
        "@typescript-eslint/no-use-before-define": "warn",
        "@typescript-eslint/prefer-includes": "error",
        "@typescript-eslint/require-await": "warn",
        "@typescript-eslint/unbound-method": "error",
        //#endregion

        //#region TypeScript ESlint rules.
        "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
        "@typescript-eslint/explicit-member-accessibility": [
            "warn",
            {
                accessibility: "explicit",
                overrides: {
                    accessors: "explicit",
                    constructors: "no-public",
                    methods: "explicit",
                    properties: "explicit",
                    parameterProperties: "explicit"
                }
            }
        ],
        "@typescript-eslint/generic-type-naming": "error",
        // TODO: @typescript-eslint/member-ordering
        "@typescript-eslint/no-dynamic-delete": "error",
        "@typescript-eslint/no-extra-non-null-assertion": "warn",
        "@typescript-eslint/no-extraneous-class": "warn",
        "@typescript-eslint/no-floating-promises": "warn",
        "@typescript-eslint/no-magic-numbers": ["error", { "ignoreEnums": true }],
        "@typescript-eslint/no-unnecessary-condition": "error",
        // TODO: =========================== Need to check.
        "@typescript-eslint/no-unnecessary-qualifier": "warn",
        "@typescript-eslint/no-unnecessary-type-arguments": "warn",
        "@typescript-eslint/no-unused-expressions": "warn",
        "@typescript-eslint/no-useless-constructor": "warn",
        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/prefer-function-type": "warn",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/prefer-readonly": "warn",
        "@typescript-eslint/promise-function-async": "warn",
        "@typescript-eslint/quotes": ["warn", "double", { allowTemplateLiterals: true }],
        "@typescript-eslint/require-array-sort-compare": "warn",
        // TODO: @typescript-eslint/restrict-plus-operands ???
        // TODO: @typescript-eslint/restrict-template-expressions ???
        "@typescript-eslint/return-await": ["error", "in-try-catch"],
        "@typescript-eslint/strict-boolean-expressions": "warn",
        "@typescript-eslint/typedef": "warn",
        "@typescript-eslint/unified-signatures": "warn"
        //#endregion
    }
};
