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
	let safe = 0;
	const input = await check_file();

	for (const line of input) {
		const values = line.split(" ");

		let isSafe = checkValues(values);

		if (!isSafe) {
			for (let i = 0; i < values.length; i++) {
				const newArr = values.slice(0, i).concat(values.slice(i + 1));

				if (checkValues(newArr)) {
					isSafe = true;
					break;
				}
			}
		}

		if (isSafe) safe++;
	}

	console.log(safe);
})();

function checkValues(arr) {
	let isSafe = true;
	let direction = 0; // 1 for increasing, -1 for decreasing

	for (let i = 1; i < arr.length; i++) {
		const prev = parseInt(arr[i - 1]);
		const curr = parseInt(arr[i]);

		const diff = Math.abs(curr - prev);
		if (diff < 1 || diff > 3) {
			isSafe = false;
			break;
		}

		if (prev < curr) {
			if (direction === -1) {
				isSafe = false;
				break;
			}
			if (direction === 0) direction = 1;
		} else if (prev > curr) {
			if (direction === 1) {
				isSafe = false;
				break;
			}
			if (direction === 0) direction = -1;
		} else {
			isSafe = false;
			break;
		}
	}

	return isSafe;
}
