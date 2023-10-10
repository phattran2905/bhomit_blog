import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

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
				if (!credentials?.username || !credentials?.password) {
					throw new Error("Username or Password is incorrect");
				}

				const account = await prisma.account.findUnique({
					where: {
						username: credentials.username,
					},
				});

				if (!account || !account.hashedPassword) {
					throw new Error("Email does not exist");
				}

				const isCorrectPassword = await bcrypt.compare(
					credentials.password,
					account.hashedPassword
				);

				if (!isCorrectPassword) {
					throw new Error("Username or Password is incorrect");
				}

				return account;
			},
		}),
	],
};
