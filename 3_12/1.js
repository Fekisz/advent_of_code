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
	let data = await check_file();

	const rg = /mul\((?<var1>\d+),(?<var2>\d+)\)/g;
	let ans = 0;

	data.forEach((element) => {
		const matches = [...element.matchAll(rg)];

		for (let match of matches) {
			ans += parseInt(match.groups.var1) * parseInt(match.groups.var2);
		}
	});

	console.log(ans);
})();
