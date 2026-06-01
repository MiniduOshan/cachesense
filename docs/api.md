# API Reference

## `new CacheSense(cache)`

Creates a new wrapper around a cache implementation.
If no cache is provided, CacheSense uses an in-memory `Map`.

### Parameters

- `cache` (optional): Any object with `get(key)` and `set(key, value)` methods.

### Example

```js
const CacheSense = require("cachesense");
const monitor = new CacheSense();
```

## `monitor.get(key)`

Reads a value from the wrapped cache and records a hit or miss.

### Returns

- The cached value if it exists.
- `undefined` when the key is missing.

## `monitor.set(key, value)`

Stores a value in the wrapped cache.

## `monitor.stats()`

Returns the current metrics summary.

### Shape

```js
{
  hits: 0,
  misses: 0,
  hitRatio: "0.00"
}
```

## Stats server

The repository also includes a small Express server helper in `src/StatsServer.js`.

It exposes cache stats at:

```text
/cachesense/stats
```