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
	const rg = /mul\((?<var1>\d+),(?<var2>\d+)\)/g;
	const do_no = /don't\(\)/g;
	const do_yes = /do\(\)/g;

	let ans = 0;
	let n_str = "";
	let first_part = true;

	const input = await check_file();
	let joinedInput = input.join("");
	let line = joinedInput.split(do_no);

	line.forEach((el) => {
		if (first_part) {
			first_part = false;
			n_str += el;
		} else {
			let match = el.match(do_yes);
			if (match) {
				let x = do_yes.exec(el);
				n_str += el.slice(x.index);
			}
		}
	});

	const matches = n_str.matchAll(rg);

	for (let match of matches) {
		ans += parseInt(match.groups.var1) * parseInt(match.groups.var2);
	}

	console.log(ans);
})();
