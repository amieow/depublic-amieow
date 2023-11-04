import { UserSchema } from "./user/default";

export const signUpSchema = UserSchema.pick({
	username: true,
	password: true,
	nomer_telephone: true,
});

export const signInSchema = UserSchema.pick({
	username: true,
	password: true,
});
