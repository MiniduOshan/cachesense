const NodeCache = require("node-cache");
const CacheSense = require("../../src");

const cache = new NodeCache();
const monitor = new CacheSense(cache);

monitor.set("user", {
  id: 1,
  name: "John"
});

monitor.get("user");
monitor.get("user");
monitor.get("unknown");

console.log(monitor.stats());