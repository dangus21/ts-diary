import fs from "fs";
import path from "path";
import prompts from "prompts";

const currentMonth = new Date()
	.toLocaleString("default", { month: "long" })
	.toLowerCase();

const currentDay = new Date()
	.toLocaleString("default", { day: "numeric" })
	.toLowerCase();

const currentDiaryDirectory = path.join(__dirname, "diary");
const currentDiaryMonthDirectory = path.join(__dirname, "diary", currentMonth);
// const currentDiaryMonthDayDirectory = path.join(
// 	__dirname,
// 	"diary",
// 	currentMonth,
// 	currentDay
// );

const currentDayFile = path.join(
	currentDiaryMonthDirectory,
	`${currentDay}.md`
);

function generateFiles() {
	if (!fs.existsSync(currentDiaryDirectory)) {
		fs.mkdirSync(currentDiaryDirectory);
		fs.mkdirSync(currentDiaryMonthDirectory);

		if (!fs.existsSync(currentDayFile)) {
			fs.writeFileSync(
				path.join(currentDiaryMonthDirectory, `${currentDay}.md`),
				""
			);
		}
	} else if (!fs.existsSync(currentDiaryMonthDirectory)) {
		fs.mkdirSync(currentDiaryMonthDirectory);

		const currentDayFile = path.join(
			currentDiaryMonthDirectory,
			`${currentDay}.md`
		);
		if (!fs.existsSync(currentDayFile)) {
			fs.writeFileSync(
				path.join(currentDiaryMonthDirectory, `${currentDay}.md`),
				""
			);
		}
	} else if (!fs.existsSync(currentDayFile)) {
		const currentDayFile = path.join(
			currentDiaryMonthDirectory,
			`${currentDay}.md`
		);
		if (!fs.existsSync(currentDayFile)) {
			fs.writeFileSync(
				path.join(currentDiaryMonthDirectory, `${currentDay}.md`),
				""
			);
		}
	}
}

(async function () {
	const response = await prompts([
		{
			name: "dir",
			type: "text",
			message: `enter`,
			validate: function (val) {
				generateFiles();
				return true;
			}
		}
	]);
})();
