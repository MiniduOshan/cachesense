const express = require("express");

function startStatsServer(cacheSense, port = 3001) {
	const app = express();

	app.get("/cachesense/stats", (req, res) => {
		res.json(cacheSense.stats());
	});

	app.listen(port, () => {
		console.log(`CacheSense stats running on port ${port}`);
	});
}

module.exports = startStatsServer;
