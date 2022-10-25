const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express();

app.use('/', (req, res) => {
	res.send({
		success: true,
	});
});

app.listen(PORT);
