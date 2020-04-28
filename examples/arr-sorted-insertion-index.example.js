import arrSortedInsertionIndex from '../src/arr-sorted-insertion-index'

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
