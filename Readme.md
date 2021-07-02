# deep-pick-nested-array

## Installation

Using npm:
```shell
$ npm i deep-pick-nested-array
```
Note: add `--save` if you are using npm < 5.0.0

In Node.js:
```js
const {pickDeep} = require('deep-pick-nested-array');
// Actual Object with Data
/**
* type Array
*/
let objectToBeTransformed = [
    {
        "id": 1,
        "name": "Frodo Baggins",
        "address": {
            "line1": "Bag End",
            "village": "Shire",
            "era": "Middle Earth"
        },
        "type": "Hobbit",
        "friends": [
            {
                "name": "Samwise Gamgee",
                "type": "Hobbit"
            },
            {
                "name": "Merry",
                "type": "Hobbit"
            }
        ]
    },
    {
        "id": 2,
        "name": "Aragorn",
        "address": {
            "line1": "",
            "city": "Gondor",
            "era": "Middle Earth"
        },
        "type": "Men",
        "friends": [
            {
                "name": "Legolas",
                "type": "Elf"
            },
            {
                "name": "Gimli",
                "type": "Dwarf"
            }
        ]
    }
]

let desiredObject = [
    {
        "name": null,
        "address": {
            "era": null
        },
        "type": null,
        "friends": [
            {
                "name": null
            }
        ]
    }
]
pickDeep(objectToBeTransformed, desiredObject);
```

**Note**
Above steps can also be produced with objects.
