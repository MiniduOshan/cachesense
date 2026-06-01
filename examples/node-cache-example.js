const CacheSense = require("../src/CacheSense");

const cache = new CacheSense();

cache.set("user", { name: "Riva" });

cache.get("user");
cache.get("user");
cache.get("missing");

console.log(cache.stats());
