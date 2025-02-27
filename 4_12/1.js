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
	let offset_line = 3;
	let j = 0;

	input.forEach((element) => {
		for (let i in element) {
			if (
				offset_line <= 0 &&
				input[j - 3][i - 3] === "X" &&
				input[j - 2][i - 2] === "M" &&
				input[j - 1][i - 1] === "A" &&
				input[j][i] === "S"
			) {
				ans++;
			}
			if (
				offset_line <= 0 &&
				input[j - 3][i - 3] === "S" &&
				input[j - 2][i - 2] === "A" &&
				input[j - 1][i - 1] === "M" &&
				input[j][i] === "X"
			) {
				ans++;
			}
			if (
				offset_line <= 0 &&
				input[j - 3][i] === "X" &&
				input[j - 2][i - 1] === "M" &&
				input[j - 1][i - 2] === "A" &&
				input[j][i - 3] === "S"
			) {
				ans++;
			}
			if (
				offset_line <= 0 &&
				input[j - 3][i] === "S" &&
				input[j - 2][i - 1] === "A" &&
				input[j - 1][i - 2] === "M" &&
				input[j][i - 3] === "X"
			) {
				ans++;
			}
			if (
				offset_line <= 0 &&
				input[j - 3][i] === "S" &&
				input[j - 2][i] === "A" &&
				input[j - 1][i] === "M" &&
				input[j][i] === "X"
			) {
				ans++;
			}
			if (
				offset_line <= 0 &&
				input[j - 3][i] === "X" &&
				input[j - 2][i] === "M" &&
				input[j - 1][i] === "A" &&
				input[j][i] === "S"
			) {
				ans++;
			}
			if (
				input[j][i - 3] === "X" &&
				input[j][i - 2] === "M" &&
				input[j][i - 1] === "A" &&
				input[j][i] === "S"
			) {
				ans++;
			}
			if (
				input[j][i - 3] === "S" &&
				input[j][i - 2] === "A" &&
				input[j][i - 1] === "M" &&
				input[j][i] === "X"
			) {
				ans++;
			}
		}
		j++;
		offset_line--;
	});

	console.log(ans);
})();
