const fs = require("fs");
const promises = require("fs/promises");
const path = "./file.txt";

async function check_file() {
	if (fs.existsSync(path)) {
		const data = await promises.readFile(path, "utf8");
		return data
			.split("\n")
			.map((line) => line.trim())
			.filter((line) => line);
	} else {
		return [];
	}
}

(async () => {
	const input = await check_file();
	let ans = 0;
	let offset_line = 2;
	let j = 0;

	input.forEach((element) => {
		for (let i = 0; i < element.length; i++) {
			if (
				offset_line <= 0 &&
				j >= 2 &&
				input[j - 2][i] === "M" &&
				input[j][i] === "M" &&
				input[j - 1][i - 1] === "A" &&
				input[j - 2][i - 2] === "S" &&
				input[j][i - 2] === "S"
			) {
				ans++;
			}
			if (
				offset_line <= 0 &&
				j >= 2 &&
				input[j - 2][i] === "S" &&
				input[j][i] === "M" &&
				input[j - 1][i - 1] === "A" &&
				input[j - 2][i - 2] === "S" &&
				input[j][i - 2] === "M"
			) {
				ans++;
			}
			if (
				offset_line <= 0 &&
				j >= 2 &&
				input[j - 2][i] === "M" &&
				input[j][i] === "S" &&
				input[j - 1][i - 1] === "A" &&
				input[j - 2][i - 2] === "M" &&
				input[j][i - 2] === "S"
			) {
				ans++;
			}
			if (
				offset_line <= 0 &&
				j >= 2 &&
				input[j - 2][i] === "S" &&
				input[j][i] === "S" &&
				input[j - 1][i - 1] === "A" &&
				input[j - 2][i - 2] === "M" &&
				input[j][i - 2] === "M"
			) {
				ans++;
			}
		}
		j++;
		offset_line--;
	});

	console.log(ans);
})();
