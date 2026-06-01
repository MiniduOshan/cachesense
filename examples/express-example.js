const express = require("express");
const CacheSense = require("../src/CacheSense");

const app = express();
const monitor = new CacheSense();

app.get("/user/:id", (req, res) => {
	const cacheKey = `user:${req.params.id}`;
	let user = monitor.get(cacheKey);

	if (!user) {
		user = { id: req.params.id, name: "Riva" };
		monitor.set(cacheKey, user);
	}

	res.json(user);
});

app.get("/stats", (req, res) => {
	res.json(monitor.stats());
});

app.listen(3000, () => {
	console.log("Express example running on port 3000");
});
