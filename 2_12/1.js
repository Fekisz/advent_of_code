const file = require("fs"),
	promises = require("fs/promises");
const readline = require("readline");
const path = "./file.txt";

async function check_file() {
	if (file.existsSync(path)) {
		const data = await promises.readFile(path, "utf8");
		return data;
	} else {
		return [];
	}
}

(async () => {
	let data = await check_file();

	const d_list = data.split(/\r?\n/);
	let ans = 0;

	d_list.forEach((element) => {
		let increasing;
		let line = element.split(" ");
		let y = 0;
		for (let i = 1; i <= line.length; i++) {
			let x = line[i] - line[i - 1];
			if (x <= 3 && x >= -3) {
				if (x > 0 && increasing != false) {
					increasing = true;
					y++;
				}
				if (x < 0 && increasing != true) {
					increasing = false;
					y++;
				}
				// console.log(x + " : " + y);
			} else break;
			if (y == line.length - 1) ans++;
		}
	});

	console.log(ans);
})();
