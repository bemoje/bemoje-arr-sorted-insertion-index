import arrSortComparator from '@bemoje/arr-sort-comparator'
import assertArgs from '@bemoje/assert-args'
import assertType from '@bemoje/assert-type'

/**
 * Find the array index of where to add an element to keep it sorted.
 * @param {Array} arr - The array
 * @param {*} element - The element for which to find its insertion index
 * @param {function|object} [compare]
 * @param {boolean} [compare.numeric=false] - Sort numerically. Defaults to lexicographic/alphabetic sort.
 * @param {boolean} [compare.descending=false] - Sort in descending order. Defaults to ascending order.
 * @param {boolean} [compare.array=false] - Sort arrays. Nested arrays are also compared recursively.
 * @param {number|string|getter} [compare.by=undefined] - Sort by either array index, a callback(element): any - or by object keys with dot-notation support.
 * @returns {number} The insertion index
 */
export default function arrSortedInsertionIndex(arr, element, compare) {
	assertArgs(arr)
	assertType(Array, arr)

	const len = arr.length

	// theres only one option then
	if (len === 0) {
		return 0
	}

	let isNumeric = false

	// handle comparator
	if (compare) {
		if (typeof compare === 'object') {
			// is comparator builder options
			if (compare.numeric) {
				isNumeric = true
			}
			compare = arrSortComparator(compare)
		}
	} else {
		// set default comparator
		compare = arrSortComparator()
	}

	let high = len - 1
	let low = 0
	let i, ordering

	// find position by binary search
	if (isNumeric) {
		// numerically
		while (low < high) {
			i = (low + high) >>> 1
			ordering = compare(arr[i], element)

			if (ordering < 0) {
				low = i + 1
			} else {
				high = i
			}
		}
	} else {
		// lexicographically
		while (high >= low) {
			i = ((high + low) / 2) >>> 0
			ordering = compare(arr[i], element)

			if (ordering < 0) {
				low = i + 1
			} else if (ordering > 0) {
				high = i - 1
			} else {
				return i + 1
			}
		}
	}

	// handle if should be last (actually out of bounds of the array)
	if (i === len - 1 && compare(arr[len - 1], element) < 0) {
		i++
	}

	// return index
	return low
}

/**
 * Callback type definition.
 * @callback getter
 * @param {*} a - The value
 * @returns {*} The value to be compared
 */
