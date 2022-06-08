export type Quote = {
	name: string;
	emoji: string;
	description: string;
};

class QuotesRepo {
	#quotes = [
		{
			name: "Diary one",
			emoji: "☕",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reiciendis natus tempora. Inventore odio rem similique, quisquam fugit voluptates hic alias nemo sequi. Illum nulla atque nostrum, ea ipsum corporis.",
		},
		{
			name: "Diary two",
			emoji: "🐱‍💻",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reiciendis natus tempora. Inventore odio rem similique, quisquam fugit voluptates hic alias nemo sequi. Illum nulla atque nostrum, ea ipsum corporis.",
		},
		{
			name: "Diary two",
			emoji: "🐷",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reiciendis natus tempora. Inventore odio rem similique, quisquam fugit voluptates hic alias nemo sequi. Illum nulla atque nostrum, ea ipsum corporis.",
		},
	];
	getAll = async ({limit}: {limit: number}) => this.#quotes.slice(0, limit);
}

export const quotesRepo = new QuotesRepo();
