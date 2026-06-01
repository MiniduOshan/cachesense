const test = require("node:test");
const assert = require("node:assert");
const NodeCache = require("node-cache");
const CacheSense = require("../src/CacheSense");

test("CacheSense Metrics Tracking", async (t) => {
	await t.test("should initialize with zero hits and misses", () => {
		const rawCache = new NodeCache();
		const cache = new CacheSense(rawCache);

		const stats = cache.stats();
		assert.strictEqual(stats.hits, 0);
		assert.strictEqual(stats.misses, 0);
		assert.strictEqual(stats.hitRatio, 0);
	});

	await t.test("should record hits correctly", () => {
		const rawCache = new NodeCache();
		const cache = new CacheSense(rawCache);

		cache.set("key1", "value1");
		const val = cache.get("key1");

		assert.strictEqual(val, "value1");
		const stats = cache.stats();
		assert.strictEqual(stats.hits, 1);
		assert.strictEqual(stats.misses, 0);
		assert.strictEqual(stats.hitRatio, "100.00");
	});

	await t.test("should record misses correctly", () => {
		const rawCache = new NodeCache();
		const cache = new CacheSense(rawCache);

		const val = cache.get("non-existent");

		assert.strictEqual(val, undefined);
		const stats = cache.stats();
		assert.strictEqual(stats.hits, 0);
		assert.strictEqual(stats.misses, 1);
		assert.strictEqual(stats.hitRatio, "0.00");
	});

	await t.test("should calculate hit ratio correctly for mixed operations", () => {
		const rawCache = new NodeCache();
		const cache = new CacheSense(rawCache);

		cache.set("key1", "value1");
		cache.get("key1"); // hit
		cache.get("key2"); // miss
		cache.get("key1"); // hit

		const stats = cache.stats();
		assert.strictEqual(stats.hits, 2);
		assert.strictEqual(stats.misses, 1);
		assert.strictEqual(stats.hitRatio, "66.67");
	});
});
