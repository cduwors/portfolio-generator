const fs = require("fs");

const writeFile = (fileContent) => {
	return new Promise((resolve, reject) => {
		fs.writeFile("./dist/index.html", fileContent, (err) => {
			//if there's an error, reject the Promise and send the error tot he Promise's `.catch()` method
			if (err) {
				reject(err);
				//return out of the function so resolve doesn't happen
				return;
			}

			//if everything goes well, resolve the Promise and send the successful data to the `.then()` method
			resolve({
				ok: true,
				message: "File Created!",
			});
		});
	});
};

const copyFile = () => {
	return new Promise((resolve, reject) => {
		fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
			if (err) {
				reject(err);
				return;
			}
			resolve({
				ok: true,
				message: "Stylesheet Created!",
			});
		});
	});
};

module.exports = { writeFile, copyFile };
