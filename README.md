# CacheSense

CacheSense is a lightweight cache analytics wrapper for Node.js libraries.

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

CacheSense works as a wrapper around cache providers such as NodeCache and Redis.
If you do not pass a cache instance, it falls back to an in-memory `Map`.

## Example Usage

```js
const NodeCache = require("node-cache");
const CacheSense = require("cachesense");

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