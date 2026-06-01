# Quick Start

Create a cache instance, wrap it with CacheSense, and start measuring cache behavior.
You can also call `new CacheSense()` with no arguments to use the built-in in-memory cache.

```js
const CacheSense = require("cachesense");

// Create cache instance
const cache = new CacheSense();

// Set values
cache.set("user:1", { id: 1, name: "John" });

// Get values
const user = cache.get("user:1");
const missing = cache.get("user:2");

console.log(user);
console.log(missing);
console.log(cache.stats());
```

### Using CacheSense as a standalone cache

You can also use `CacheSense` directly as an in-memory cache (no external cache implementation required):

```js
const CacheSense = require("cachesense");

// Create cache instance
const cache = new CacheSense();

// Set values
cache.set("user:1", { id: 1, name: "John" });

// Get values
const user = cache.get("user:1");
const missing = cache.get("user:2");

// Output
console.log(user);
console.log(missing);
console.log(cache.stats());
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