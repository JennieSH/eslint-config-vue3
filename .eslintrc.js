module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-recommended", "@vue/airbnb", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "vue/no-restricted-syntax": [
      "error",
      {
        selector: "VElement > VExpressionContainer CallExpression",
        message: "Call expressions are not allowed.",
      },
    ],
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: false,
        ignores: ["/^router-/", "/^keep-/", "/^transition-/"],
      },
    ],
    "vue/custom-event-name-casing": [
      "error",
      "kebab-case",
      {
        ignores: [],
      },
    ],
    "vue/html-comment-content-newline": [
      "warn",
      {
        singleline: "ignore",
        multiline: "always",
      },
    ],
    "vue/html-comment-content-spacing": [
      "warn",
      "always",
      {
        exceptions: [],
      },
    ],
    "vue/html-comment-indent": ["warn", 2],
    "vue/no-template-target-blank": [
      "warn",
      {
        allowReferrer: true,
        enforceDynamicLinks: "always",
      },
    ],
    "vue/padding-line-between-blocks": ["warn", "always"],
    "vue/v-on-event-hyphenation": [
      "error",
      "always",
      {
        autofix: true,
        ignore: [],
      },
    ],
    "vue/v-on-function-call": [
      "error",
      "never",
      {
        ignoreIncludesComment: false,
      },
    ],
  },
};
