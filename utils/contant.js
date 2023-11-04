const env_production = {
	GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
	NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
	NEXTAUTH_URL: process.env.NEXTAUTH_URL,
};

const env_development = {
	GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
	NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
	NEXTAUTH_URL: process.env.NEXTAUTH_URL,
};

export const env =
	process.env.NODE_ENV == "production" ? env_production : env_development;
