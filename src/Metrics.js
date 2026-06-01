class Metrics {
	constructor() {
		this.hits = 0;
		this.misses = 0;
	}

	recordHit() {
		this.hits++;
	}

	recordMiss() {
		this.misses++;
	}

	getStats() {
		const total = this.hits + this.misses;

		return {
			hits: this.hits,
			misses: this.misses,
			hitRatio:
				total === 0
					? 0
					: ((this.hits / total) * 100).toFixed(2)
		};
	}
}

module.exports = Metrics;
