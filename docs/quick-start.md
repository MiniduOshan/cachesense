# Quick Start

Create a cache instance, wrap it with CacheSense, and start measuring cache behavior.
You can also call `new CacheSense()` with no arguments to use the built-in in-memory cache.

```js
const NodeCache = require("node-cache");
const CacheSense = require("cachesense");

const cache = new NodeCache();
const monitor = new CacheSense(cache);

monitor.set("user:1", { id: 1, name: "John" });

const user = monitor.get("user:1");
const missing = monitor.get("user:2");

console.log(user);
console.log(missing);
console.log(monitor.stats());
```

## How it works

CacheSense forwards `set()` calls to the cache and records hit or miss counts whenever `get()` is called.

## Example output

The `stats()` method returns a small summary object:

```js
{
  hits: 1,
  misses: 1,
  hitRatio: "50.00"
}
```