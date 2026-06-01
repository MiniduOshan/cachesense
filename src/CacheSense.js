const Metrics = require("./Metrics");

class CacheSense {
	constructor(cache = new Map()) {
		this.cache = cache;
		this.metrics = new Metrics();
	}

	get(key) {
		const value = this.cache.get(key);

		if (value !== undefined) {
			this.metrics.recordHit();
		} else {
			this.metrics.recordMiss();
		}

		return value;
	}

	set(key, value) {
		this.cache.set(key, value);
	}

	stats() {
		return this.metrics.getStats();
	}
}

module.exports = CacheSense;
