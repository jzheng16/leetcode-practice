// Deisgn a LRU

// A LRU is a cache that has a certain capacity, once that capacity is reached, remove the least used item

class LRU {

	constructor(capacity) {
		this.cache = new Map();
		this.capacity = capacity;
	}


	get(key) {
		// If ti doesnt exist return null, if it exists, remove it and add it again?
		if (!this.cache.has(key)) {
			return null;
		}
		const val = this.cache.get(key);
		this.cache.delete(key);
		this.cache.set(key, val);
		console.log('Being returned.. ', val);
		return val;

	}

	put(key, value) {
		// If over capacity, remove the first key in map. Map is ordered by which you inserted the values
		// Delete existing key if exists
		if (this.cache.has(key)) {
			this.cache.delete(key);
		}

		this.cache.set(key, value);

		if (this.cache.size > this.capacity) {
			this.cache.delete(this.cache.keys().next().value)
		}


	}

}


