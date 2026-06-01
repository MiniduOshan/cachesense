# Installation

Install CacheSense from npm:

```bash
npm install cachesense
```

If you are developing locally in this repository, install the project dependencies (for the docs site and local tooling):

```bash
npm install
```

## Requirements

- Node.js 18 or newer (required).

For core usage `cachesense` has no additional runtime dependencies. If you want to follow the advanced wrapper examples that use `node-cache`, you may optionally install it:

```bash
npm install node-cache
```

## Import

```js
const CacheSense = require("cachesense");
```

If you are using the repository source directly:

```js
const CacheSense = require("./src");
```