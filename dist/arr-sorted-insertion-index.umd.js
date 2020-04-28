(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/arr-sort-comparator'), require('@bemoje/assert-args'), require('@bemoje/assert-type')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/arr-sort-comparator', '@bemoje/assert-args', '@bemoje/assert-type'], factory) :
	(global = global || self, global['arr-sorted-insertion-index'] = factory(global.arrSortComparator, global.assertArgs, global.assertType));
}(this, (function (arrSortComparator, assertArgs, assertType) { 'use strict';

	arrSortComparator = arrSortComparator && Object.prototype.hasOwnProperty.call(arrSortComparator, 'default') ? arrSortComparator['default'] : arrSortComparator;
	assertArgs = assertArgs && Object.prototype.hasOwnProperty.call(assertArgs, 'default') ? assertArgs['default'] : assertArgs;
	assertType = assertType && Object.prototype.hasOwnProperty.call(assertType, 'default') ? assertType['default'] : assertType;

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
	function arrSortedInsertionIndex(arr, element, compare) {
		assertArgs(arr);
		assertType(Array, arr);

		const len = arr.length;

		// theres only one option then
		if (len === 0) {
			return 0
		}

		// handle comparator
		if (compare) {
			if (typeof compare === 'object') {
				// is comparator builder options
				compare = arrSortComparator(compare);
			}
		} else {
			// set default comparator
			compare = arrSortComparator();
		}

		let high = len - 1;
		let low = 0;
		let i, ordering;

		// find position by binary search
		while (high >= low) {
			i = ((high + low) / 2) >>> 0;
			ordering = compare(arr[i], element);

			if (ordering < 0) {
				low = i + 1;
			} else if (ordering > 0) {
				high = i - 1;
			} else {
				return i
			}
		}

		// handle if should be last (actually out of bounds of the array)
		if (i === len - 1 && compare(arr[len - 1], element) < 0) {
			i++;
		}

		// return index
		return i
	}

	/**
	 * Callback type definition.
	 * @callback getter
	 * @param {*} a - The value
	 * @returns {*} The value to be compared
	 */

	return arrSortedInsertionIndex;

})));
