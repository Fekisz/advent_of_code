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

	// console.log(d_list);
	let l_list = d_list.map((element) => {
		return element.trim().split(" ")[0];
	});

	let r_list = d_list.map((element) => {
		return element.slice(-6).split("\r");
	});
	// console.log("l_list: " + Number(l_list[0]));
	// console.log("r_list: " + Number(r_list[0]));
	l_list.sort((a, b) => a - b);
	r_list.sort((a, b) => a - b);
	// console.log("l_list: " + Number(l_list[0]));
	// console.log("r_list: " + Number(r_list[0]));
	let ans = 0;
	l_list.forEach((element) => {
		let x = 0;
		for (let i of r_list) {
			if (Number(element) == Number(i)) {
				x++;
			}
		}
		// x > 0 ? console.log(element + " : " + x) : false;
		x = x * Number(element);
		ans += x;
	});

	console.log(ans);
})();
