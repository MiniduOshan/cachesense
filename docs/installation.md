# Installation

Install CacheSense from npm:

```bash
npm install cachesense node-cache
```

If you are developing locally in this repository, install the docs tooling too:

```bash
npm install
```

## Requirements

- Node.js 18 or newer is recommended for the docs site and local tooling.
- A cache implementation such as `node-cache` is required for the wrapper examples.

## Import

```js
const CacheSense = require("cachesense");
```

If you are using the repository source directly:

```js
const CacheSense = require("./src");
```