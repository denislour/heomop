export type Quote = {
	name: string;
	emoji: string;
	descripstion: string;
};

class QuotesRepo {
	getAll = async () => [
		{
			name: "Diary one",
			emoji: "☕",
			descripstion: "Coffee's times",
		},
		{
			name: "Diary two",
			emoji: "🐱‍💻",
			descripstion: "Supar dougggggg!",
		},
		{
			name: "Diary two",
			emoji: "🐷",
			descripstion: "Con heo mop ngowwwwwwww!",
		},
	];
}

export const quotesRepo = new QuotesRepo();
