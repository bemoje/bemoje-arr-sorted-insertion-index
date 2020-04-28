import arrSortedInsertionIndex from '../src/arr-sorted-insertion-index'

describe('arrSortedInsertionIndex', () => {
	test('no duplicates', () => {
		const arr = [1, 2, 4, 5]
		expect(arrSortedInsertionIndex(arr, 3)).toBe(2)
	})

	test('one duplicate', () => {
		const arr = [1, 2, 3, 4, 5]
		expect(arrSortedInsertionIndex(arr, 3)).toBe(2)
	})

	test('two duplicates', () => {
		const arr = [1, 2, 3, 3, 4, 5]
		expect(arrSortedInsertionIndex(arr, 3)).toBe(2)
	})

	test('lower than all', () => {
		const arr = [1, 2, 3, 4, 5]
		expect(arrSortedInsertionIndex(arr, 0)).toBe(0)
	})

	test('higher than all', () => {
		const arr = [1, 2, 3, 4, 5]
		expect(arrSortedInsertionIndex(arr, 8)).toBe(5)
	})

	test('length = 0', () => {
		const descending = []
		expect(arrSortedInsertionIndex(descending, 2)).toBe(0)
	})

	test('examples - alpha', () => {
		const alpha = ['a', 'b', 'd', 'e']
		expect(arrSortedInsertionIndex(alpha, 'c')).toBe(2)
	})

	test('examples - numeric - comparator function', () => {
		const numeric1 = [0, 1, 2, 4, 5]
		expect(
			arrSortedInsertionIndex(numeric1, 3, (a, b) => {
				return a - b
			}),
		).toBe(3)
	})

	test('examples - numeric - comparator options', () => {
		const numeric2 = [0, 1, 2, 4, 5]
		expect(
			arrSortedInsertionIndex(numeric2, 3, {
				numeric: true,
			}),
		).toBe(3)
	})

	test('examples - numeric - descending', () => {
		const descending = [5, 4, 3, 2, 0]
		expect(
			arrSortedInsertionIndex(descending, 1, {
				numeric: true,
				descending: true,
			}),
		).toBe(4)
	})
})
