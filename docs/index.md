---
title: CacheSense
description: Lightweight cache analytics for Node.js
---

# CacheSense

Current version: `1.0.3`

CacheSense provides lightweight cache analytics for Node.js. It can wrap existing cache libraries or be used standalone.

It helps you measure how your cache is performing without changing your workflow. If you skip the constructor argument, CacheSense uses an in-memory `Map` by default.

## What it tracks

- Cache hits
- Cache misses
- Hit ratio
- Cache effectiveness
- Response metrics

## Why it exists

Most cache libraries store and retrieve data. CacheSense shows how well the cache is actually working.

## Example

### Using CacheSense as a standalone cache

You can use `CacheSense` directly as an in-memory cache without any external cache implementation:

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

## Next steps

Read the [installation guide](/installation), try the [quick start](/quick-start), or jump straight to the [API reference](/api).