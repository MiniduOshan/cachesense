# CacheSense

Current version: `1.0.3`

CacheSense is a lightweight cache analytics wrapper for Node.js libraries.

## Installation

Install CacheSense from npm:

```bash
npm install cachesense
```

If you want to try the optional examples that use `node-cache`, install it separately:

```bash
npm install node-cache
```

## Why CacheSense?

Most cache libraries store and retrieve data, but they do not show how effectively the cache is performing.

CacheSense adds lightweight analytics on top of existing cache implementations.

It tracks:

- Cache Hits
- Cache Misses
- Hit Ratio
- Cache Effectiveness
- Response Metrics

Without changing existing cache workflows.

CacheSense can wrap cache providers such as NodeCache and Redis, but it has no required runtime dependency on them. If you do not pass a cache instance, CacheSense falls back to a built-in in-memory `Map`.

## Example Usage

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

You can use `CacheSense` directly as an in-memory cache without passing an external cache implementation:

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

## v1 Goals

- Track cache hits
- Track cache misses
- Report hit ratio
- Expose a stats API
- Provide a simple Express example
- Provide a basic wrapper example

## Project Structure

- `src/index.js`
- `src/CacheSense.js`
- `src/Metrics.js`
- `src/StatsServer.js`
- `examples/basic-example/app.js`
- `examples/basic-example/package.json`
- `examples/express-example.js`
- `examples/node-cache-example.js`

## Roadmap

### v1.0

- Hits
- Misses
- Hit Ratio
- Stats API

### v1.1

- TTL Monitoring
- Top Requested Keys

### v1.2

- Redis Adapter

### v2.0

- Dashboard
- Charts
- Web Analytics UI

## License

MIT