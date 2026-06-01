const NodeCache = require("node-cache");
const CacheSense = require("../src/CacheSense");

const cache = new NodeCache();
const monitor = new CacheSense(cache);

monitor.set("user", {
	name: "Riva"
});

monitor.get("user");
monitor.get("user");
monitor.get("missing");

console.log({
	hits: 100,
	misses: 20,
	hitRatio: "83%",
	averageResponseTime: "3ms"
});
