import { z } from "zod";
export const UNICODE = ["@", "$", "!", "#", "^", "&", "%", "*"];

export const UserSchema = z.object({
	password: z
		.string()
		.min(8)
		.max(40)
		.regex(/[A-Z]/, {
			message: "password harus memiliki minimal 1 huruf besar",
		})
		.refine((str) => str.split("").find((v) => UNICODE.includes(v)), {
			message: `password harus mempunyai 1 diantara ${UNICODE.join(
				", ",
			)} tersebut`,
		}),
	username: z.string().min(3).max(20),
	email: z.string().email(),
	createdAt: z.date(),
	title: z.string().optional(),
	nomer_telephone: z
		.string()
		.length(12)
		.refine((str) => Number.isInteger(Number(str))),
	image_profile: z.string().optional(),
	sosmed: z
		.object({
			facebook: z.string(),
			instagram: z.string(),
			telegram: z.string(),
		})
		.partial()
		.optional(),
});
