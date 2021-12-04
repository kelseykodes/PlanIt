// const APIKey = "3ff2f3bbf2mshdba20a8a33964b6p1c804bjsnc2f5a2eae0d2"
// const searchInputEl = 

// function searchInputHandler(event){
//     event.preventDefault();
//     var searchVal = searchInputEl.val();
//     console.log(searchVal);
//     searchRecipes(searchVal);
// }

// const recipeSearch = function (value) {
//     fetch("https://yummly2.p.rapidapi.com/feeds/search?start=0&maxResult=18&maxTotalTimeInSeconds=7200&q=" + value + "&allowedAttribute=diet-lacto-vegetarian%2Cdiet-low-fodmap&FAT_KCALMax=1000", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "yummly2.p.rapidapi.com",
//             "x-rapidapi-key": APIKey
//         }
//     })
//     .then(response => {
//         console.log(response);
//         if (response.ok) {
//             response.json().then(function (data) {
//             console.log(data);
//             var recipes = data.results
//             localStorage.setItem("recipeList", JSON.stringify(data.results));
//             displayRecipes(recipes);//Calls function to display recipes
//             });
//         } 
//     })
//     .catch(err => {
//         console.error(err);
//     });

//     function displayRecipes(recipes){
//         console.log(recipes);
//     }
// }







const http = require("https");

const options = {
	"method": "GET",
	"hostname": "yummly2.p.rapidapi.com",
	"port": null,
	"path": "/feeds/search?start=0&maxResult=18&maxTotalTimeInSeconds=7200&q=chicken%20soup&allowedAttribute=diet-lacto-vegetarian%2Cdiet-low-fodmap&FAT_KCALMax=1000",
	"headers": {
		"x-rapidapi-host": "yummly2.p.rapidapi.com",
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