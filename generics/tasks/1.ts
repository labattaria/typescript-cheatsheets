
interface PlayerData<Game, Hours> {
	game: Game;
	hours: Hours;
	server: string;
};

const player1: PlayerData<string, number> = {
	game: "CS:GO",
	hours: 300,
	server: "basic",
};

const player2: PlayerData<number, string> = {
	game: 2048,
	hours: "300 h.",
	server: "arcade",
};

const player3: PlayerData<string, object> = {
	game: "Chess",
	hours: {
		total: 500,
		inMenu: 50,
	},
	server: "chess",
};

enum FigureNames {
	Rect = "rect",
	Triangle = "triangle",
	Circle = "circle",
	Line = "line",
};

interface AmountOfFigures {
	squares: number;
	circles: number;
	triangles: number;
	others: number;
};

interface FigureName {
	name: string;
};

function calculateAmountOfFigures<T extends FigureName>(figure: T[]): AmountOfFigures {
	const totalFigures: AmountOfFigures = {
		squares: 0,
		circles: 0,
		triangles: 0,
		others: 0
	};

	figure.forEach(f => {
		switch (f.name) {
			case FigureNames.Rect:
				totalFigures.squares += 1;
				break;
			case FigureNames.Triangle:
				totalFigures.triangles += 1;
				break;
			case FigureNames.Circle:
				totalFigures.circles += 1;
				break;
			default:
				totalFigures.others += 1;
		}
	})

	return totalFigures;
};

const data = [
	{
		name: "rect",
		data: { a: 5, b: 10 },
	},
	{
		name: "rect",
		data: { a: 6, b: 11 },
	},
	{
		name: "triangle",
		data: { a: 5, b: 10, c: 14 },
	},
	{
		name: "line",
		data: { l: 15 },
	},
	{
		name: "circle",
		data: { r: 10 },
	},
	{
		name: "circle",
		data: { r: 5 },
	},
	{
		name: "rect",
		data: { a: 15, b: 7 },
	},
	{
		name: "triangle",
	},
];

console.log(calculateAmountOfFigures(data));
