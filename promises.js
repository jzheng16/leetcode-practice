// Problem: Create a class that runs X amount of promises but can only run N amount of promises at any given time

class PromiseRunner {
	constructor(promises, limit) {
		this.promises = promises;
		this.limit = limit;
		this.result = [];
	}


	// async run() {
	// 	let i = 0;
	// 	let promisesRunning = 0;
	// 	while (i < this.promises.length) {
	// 		if (promisesRunning < this.limit) {
	// 			// Run a promise?
	// 			promisesRunning++;
	// 			const promise = this.promises[i];
	// 			promise.
	// 			then(res => this.result.push(res))
	// 			.catch(err => console.log(err))
	// 			.finally(() => {
	// 				promisesRunning--;
	// 				// Decrement promises running?
	// 			})
	// 		}
	// 	}
	// }

	async run() {
		// Recursively?
		
		const runPromises = (promises, i) => {
			if (promises.length === 0) return;

			const currPromise = promises[i]
			currPromise
				.then(res => {
					this.result.push(res);
					runPromises(promises, i + 1);
				})

		}

		runPromises(this.promises, 0)

	}
}


async function executePromisesConcurrently(promises, concurrencyLimit) {
	const results = [];
	// Define an index to keep track of which promise we are executing
	let index = 0;
	let executingCount = 0;

	const executeNextPromise = async () => {
		// Create a function that executes the next promise by incrementing index (should be unique every single time since index is outside the scope of this function)
		if (index < promises.length) {
			const currentIndex = index++;
			executingCount++;
			console.log(`Executing promise ${currentIndex}, ${executingCount} promises running`);
			const result = await promises[currentIndex]();
			executingCount--;
			console.log(`Promise ${currentIndex} completed, ${executingCount} promises running`);
			results.push(result);
			await executeNextPromise();
		}
	};

	// Get first 10 and run the executeNextPromise function on them (note: this starts running them)
	const executing = promises.slice(0, concurrencyLimit).map(executeNextPromise);
	console.log('executing', executing);

	// Execute all 10 in parallel
	await Promise.all(executing);

	return results;
}

// Example usage:
const createPromise = (index) => () => new Promise(resolve => setTimeout(() => resolve(index), Math.random() * 100));

const promises = Array.from({ length: 50 }, (_, index) => createPromise(index));

const concurrencyLimit = 10;

executePromisesConcurrently(promises, concurrencyLimit)
	.then(results => {
		console.log(results);
	})
	.catch(error => {
		console.error(error);
	});