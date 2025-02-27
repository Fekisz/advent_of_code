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

	for (let i in l_list) {
		let x = Number(l_list[i]) - Number(r_list[i][0]);
		if (x < 0) x = x * -1;
		ans += x;
		// console.log(x);
	}

	console.log(ans);
})();
