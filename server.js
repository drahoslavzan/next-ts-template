const express = require('express');
const httpProxy = require('express-http-proxy');
const next = require('next');
require('dotenv').config();

const analyticsURL = process.env.ANALYTICS_URL;

const port = process.env.PORT || 8000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const analyticsProxy = httpProxy(analyticsURL, {
	proxyReqPathResolver: function (req) {
		const url = req.originalUrl.replace('ma/m', 'matomo');
		return url;
    }
});

void async function() {
	await app.prepare();
	const server = express();

	server.use('/ma/*', analyticsProxy);
	server.get('*', handle);

	server.listen(port, err => {
		if (err) throw err;
		console.log(`> Running on port ${port}, isDev = ${dev}`);
	});
}();