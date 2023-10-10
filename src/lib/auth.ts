import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import prisma from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
	session: {
		strategy: "jwt",
	},
	secret: process.env.NEXTAUTH_SECRET,
	debug: process.env.NODE_ENV === "development",
	adapter: PrismaAdapter(prisma),
	providers: [
		CredentialsProvider({
			id: "credentials",
			name: "Credentials",
			credentials: {
				username: { label: "Username", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				// You need to provide your own logic here that takes the credentials
				// submitted and returns either a object representing a user or value
				// that is false/null if the credentials are invalid.
				// e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
				// You can also use the `req` object to obtain additional parameters
				// (i.e., the request IP address)
				console.log(credentials?.username, credentials?.password);
				// Add logic here to look up the user from the credentials supplied
				const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

				if (user) {
					// Any object returned will be saved in `user` property of the JWT
					return user;
				} else {
					// If you return null then an error will be displayed advising the user to check their details.
					return null;

					// You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
				}
			},
		}),
	],
};
