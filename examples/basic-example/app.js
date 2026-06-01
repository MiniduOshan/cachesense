const CacheSense = require("../../src");

const cache = new CacheSense();

cache.set("user", {
  id: 1,
  name: "John"
});

cache.get("user");
cache.get("user");
cache.get("unknown");

console.log(cache.stats());