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
        //#endregion
        //#region Import rules.
        // TODO: "import/no-internal-modules": "error",
        "import/no-useless-path-segments": "warn",
        // TODO: "import/no-self-import": "error", Check why it doesn't work.
        "import/no-default-export": "error",
        "import/no-anonymous-default-export": "error",
        "import/newline-after-import": ["warn", { count: 1 }],
        // TODO: "import/order"
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
        // TODO: "@typescript-eslint/no-magic-numbers": "warn",
        "@typescript-eslint/no-unnecessary-condition": "error",
        // TODO: =========================== Need to check.
        "@typescript-eslint/no-unnecessary-qualifier": "warn",
        "@typescript-eslint/no-unnecessary-type-arguments": "warn",
        // TODO: @typescript-eslint/no-unused-expressions ???
        "@typescript-eslint/no-useless-constructor": "warn",
        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/prefer-function-type": "warn",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/prefer-readonly": "warn",
        "@typescript-eslint/promise-function-async": "warn",
        // TODO: @typescript-eslint/quotes ???
        "@typescript-eslint/require-array-sort-compare": "warn",
        // TODO: @typescript-eslint/restrict-plus-operands ???
        // TODO: @typescript-eslint/restrict-template-expressions ???
        // TODO: "@typescript-eslint/return-await": ["error/warn", "in-try-catch"], Need to validate.
        "@typescript-eslint/strict-boolean-expressions": "warn",
        "@typescript-eslint/typedef": "warn",
        "@typescript-eslint/unified-signatures": "warn"
        //#endregion
    }
};
