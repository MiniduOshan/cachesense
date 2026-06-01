---
title: CacheSense
description: Lightweight cache analytics for Node.js
---

# CacheSense

CacheSense adds lightweight analytics on top of cache libraries such as `node-cache`.

It helps you measure how your cache is performing without changing the workflow you already use.

## What it tracks

- Cache hits
- Cache misses
- Hit ratio
- Cache effectiveness
- Response metrics

## Why it exists

Most cache libraries store and retrieve data. CacheSense shows how well the cache is actually working.

## Example

```js
const NodeCache = require("node-cache");
const CacheSense = require("cachesense");

const cache = new NodeCache();
const monitor = new CacheSense(cache);

monitor.set("user", { id: 1, name: "John" });

monitor.get("user");
monitor.get("user");
monitor.get("unknown");

console.log(monitor.stats());
```

## Next steps

Read the [installation guide](/installation), try the [quick start](/quick-start), or jump straight to the [API reference](/api).