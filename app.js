// const fs = require("fs");
// const generatePage = require("./src/page-template");

// const profileDataArgs = process.argv.slice(2);

// const [firstName, github] = profileDataArgs;

// const printProfileData = (profileDataArr) => {
// 	// This...
// 	for (let i = 0; i < profileDataArr.length; i += 1) {
// 		console.log(profileDataArr[i]);
// 	}

// 	console.log("================");

// 	// Is the same as this...
// 	profileDataArr.forEach((profileItem) => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

// fs.writeFile("./index.html", generatePage(firstName, github), (err) => {
// 	if (err) throw new Error(err);

// 	console.log("Portfolio complete! Check out index.html to see the output!");
// });



const fs = require("fs");
const generatePage = require("./src/page-template.js");

const profileDataArgs = process.argv.slice(2);

console.log(profileDataArgs);

const [name, github] = profileDataArgs;

console.log(name, github);

const pageHTML = generatePage(name, github);

fs.writeFile("./index.html", pageHTML, (err) => {
	if (err) throw err;

	console.log("Portfolio complete! Check out index.html to see the output!");
});
