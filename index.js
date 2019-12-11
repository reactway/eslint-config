module.exports = {
    extends: ["prettier", "prettier/@typescript-eslint", "prettier"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "import"],
    parserOptions: {
        ecmaVersion: 6,
        project: "./tsconfig.json",
        sourceType: "module"
    },
    rules: {
        eqeqeq: ["error", "always", { null: "ignore" }],
        "no-eval": "error",
        "prefer-const": "error",
        "prefer-template": "error",
        // "no-invalid-this": "error",
        "import/no-default-export": "error",
        "no-sparse-arrays": "error",
        "no-extra-label": "error",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
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
        "no-multiple-empty-lines": ["error", { max: 1 }],
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        "jsx-quotes": ["error", "prefer-double"],
        "no-console": ["error", { allow: ["warn", "error", "info"] }],
        "no-shadow": "error",
        "@typescript-eslint/generic-type-naming": "error",
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/ban-ts-ignore": "error",
        "@typescript-eslint/ban-types": [
            "error",
            {
                types: {
                    String: {
                        message: "Use string instead",
                        fixWith: "string"
                    },
                    Object: {
                        message: "Use {} instead.",
                        fixWith: "{}"
                    },
                    object: {
                        message: "Use {} instead.",
                        fixWith: "{}"
                    },
                    Function: {
                        message: "Use () => void instead.",
                        fixWith: "() => void"
                    }
                }
            }
        ],
        "@typescript-eslint/camelcase": ["error", { properties: "always" }],
        "@typescript-eslint/class-name-casing": "error",
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
                allowHigherOrderFunctions: true
            }
        ],
        "@typescript-eslint/generic-type-naming": ["error", "^T[A-Z][a-zA-Z]+$"],
        "@typescript-eslint/interface-name-prefix": ["error", "never"],
        // "@typescript-eslint/no-angle-bracket-type-assertion": "error",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-empty-interface": [
            "error",
            {
                allowSingleExtends: true
            }
        ],
        "@typescript-eslint/no-explicit-any": [
            "error",
            {
                fixToUnknown: true
            }
        ],
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
        "@typescript-eslint/no-useless-constructor": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-function-type": "error",
        // "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/require-array-sort-compare": "error",
        "@typescript-eslint/require-await": "error",
        "@typescript-eslint/restrict-plus-operands": "error",
        // "@typescript-eslint/semi": ["error", "always", { omitLastInOneLineBlock: false }],
        // "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/unified-signatures": "error"
    }
};
