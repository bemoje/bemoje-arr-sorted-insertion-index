# @bemoje/arr-sorted-insertion-index

Find the array index of where to add an element to keep it sorted.

#### Version

<span><a href="https://npmjs.org/@bemoje/arr-sorted-insertion-index" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/arr-sorted-insertion-index" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/arr-sorted-insertion-index" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-arr-sorted-insertion-index.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/arr-sorted-insertion-index" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-arr-sorted-insertion-index.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/arr-sorted-insertion-index" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/arr-sorted-insertion-index" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-arr-sorted-insertion-index/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-arr-sorted-insertion-index" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/arr-sorted-insertion-index
npm install --save @bemoje/arr-sorted-insertion-index
npm install --save-dev @bemoje/arr-sorted-insertion-index
```

## Usage

```javascript
import arrSortedInsertionIndex from '@bemoje/arr-sorted-insertion-index'

/**
 * FIND THE INDEX OF WHERE TO ADD AN ELEMENT TO KEEP IT SORTED
 */

const alpha = ['a', 'b', 'd', 'e']

arrSortedInsertionIndex(alpha, 'c')
//=> 2

/**
 * ACCEPTS A CUSTOM COMPARATOR FUNCTION
 * Compares numerically
 */

const numeric1 = [0, 1, 3, 4, 5]

arrSortedInsertionIndex(numeric1, 2, (a, b) => {
	return a - b
})
//=> 3

/**
 * ALSO TAKES ADVANCED COMPARATOR BUILDER OPTIONS
 */

const numeric2 = [0, 1, 3, 4, 5]

arrSortedInsertionIndex(numeric, 2, {
	numeric: true,
})
//=> 3

/**
 * DESCENDING EXAMPLE
 */

const descending = [5, 4, 3, 2, 0]

arrSortedInsertionIndex(descending, 1, {
	numeric: true,
	descending: true,
})
//=> 4

/**
 * To see more examples of using the comparator builder, visit:
 *  https://github.com/bemoje/bemoje-arr-sort-comparator
 */

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### arrSortedInsertionIndex

Find the array index of where to add an element to keep it sorted.

##### Parameters

-   `arr` **[Array][5]** The array

-   `element` **any** The element for which to find its insertion index

-   `compare` **([function][6] \| [object][7])?** 

    -   `compare.numeric` **[boolean][8]** Sort numerically. Defaults to lexicographic/alphabetic sort. (optional, default `false`)

    -   `compare.descending` **[boolean][8]** Sort in descending order. Defaults to ascending order. (optional, default `false`)

    -   `compare.array` **[boolean][8]** Sort arrays. Nested arrays are also compared recursively. (optional, default `false`)

    -   `compare.by` **([number][9] \| [string][10] \| [getter][11])** Sort by either array index, a callback(element): any - or by object keys with dot-notation support. (optional, default `undefined`)

##### Returns
**[number][9]** The insertion index

## getter

Callback type definition.

Type: [Function][6]

##### Parameters

-   `a` **any** The value

##### Returns
**any** The value to be compared

[1]: #arrsortedinsertionindex

[2]: #parameters

[3]: #getter

[4]: #parameters-1

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[6]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[7]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[8]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[9]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[10]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[11]: #getter