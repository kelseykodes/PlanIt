const http = require("https");

const options = {
	"method": "GET",
	"hostname": "the-cocktail-db.p.rapidapi.com",
	"port": null,
	"path": "/search.php?i=vodka", //change for search input value
	"headers": {
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		"x-rapidapi-key": "3ff2f3bbf2mshdba20a8a33964b6p1c804bjsnc2f5a2eae0d2",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();