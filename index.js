"use strict";

module.exports = {
  "extends": [
    "stylelint-config-twbs-bootstrap/scss",
  ],
  "rules": {
    "property-blacklist": [
        "border-radius",
        "border-top-left-radius",
        "border-top-right-radius",
        "border-bottom-right-radius",
        "border-bottom-left-radius",
        "transition"
      ],
      "function-blacklist": ["calc"],
      "scss/dollar-variable-default": [
        true,
        {
          "ignore": "local"
        }
      ],
      "unicode-bom": "never",
      "indentation": 2
  }
};