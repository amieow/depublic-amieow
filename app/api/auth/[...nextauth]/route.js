import { env } from "@/utils/contant";
import { signInSchema } from "@/utils/validates/login";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
const Handler = NextAuth({
	providers: [
		Credentials({
			name: "Credentials",
			credentials: {
				username: {},
				password: {},
			},
			async authorize(credential, req) {
				const validate = signInSchema.safeParse(credential);
				if (!validate.success) {
					return null;
				}
				return validate.data;
			},
		}),
		Google({
			clientId: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET,
			id: "google",
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
		}),
	],
	session: {
		strategy: "jwt",
	},
	callbacks: {
		async signIn({ account, profile }) {
			if (account.provider === "google") {
				return profile.email_verified && profile.email.endsWith("@gmail.com");
			}
			return true;
		},
	},
	secret: env.NEXTAUTH_SECRET,
	debug: process.env.NODE_ENV !== "production",
	pages: {
		signIn: "/login/signin",
	},
});

export { Handler as GET, Handler as POST };
