import { z } from "zod";

export default CardSchema = z.object({
	image: z.string(),
	date: z.object({
		day: z.string(),
		month: z.string(),
	}),
	price: z.number().min(1),
	title: z.string(),
	place: z.string(),
	description: z.string(),
});
