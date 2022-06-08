import {quotesRepo, type Quote} from "$lib/repos/quotesRepo";

// GET /quotes
export const get: RequestHandler = async ({url}) => {
	const limit = parseInt(url.searchParams.get("limit") || "50");
	const quotes: Quote[] = await quotesRepo.getAll({limit});

	return {
		body: {quotes},
	};
};
