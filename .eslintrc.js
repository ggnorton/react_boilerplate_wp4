module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parser": "babel-eslint",
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-multiple-empty-lines": [
            "error",
            {"max": 2, "maxEOF": 1}
        ],
        "react/jsx-space-before-closing": [
          "error",
          "always"
        ],
        "jsx-quotes": [
          "error",
          "prefer-single"
        ],
        "react/jsx-props-no-multi-spaces": "error",
        "react/jsx-max-props-per-line": [
          "error",
          {
            "maximum": 3
          }
        ]
    }
};