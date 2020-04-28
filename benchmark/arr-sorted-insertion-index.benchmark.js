import fs from 'fs-extra'
import hirestime from 'hirestime'
import path from 'path'
import arrSortedInsertionIndex from '../src/arr-sorted-insertion-index'

async function main() {
	const md = ['## Benchmark']

	// start timer
	const getElapsed = hirestime()

	// benchmark
	arrSortedInsertionIndex(undefined)

	// push results
	md.push(getElapsed.nanoseconds() + ' nanoseconds')

	// write results to file
	fs.writeFileSync(
		path.join(process.cwd(), 'benchmark', 'results.md'),
		md.join('\n'),
	)
}

//main()
