import {quotesRepo, type Quote} from "$lib/repos/quotesRepo";

// GET /quotes
export const get: RequestHandler = async () => {
	const quotes: Quote[] = await quotesRepo.getAll();

	return {
		body: {quotes},
	};
};
