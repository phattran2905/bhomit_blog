"use client";

import { getServerSession } from "next-auth";
import { SessionProvider } from "next-auth/react";

async function AuthProvider({ children }: { children: React.ReactNode }) {
	const session = await getServerSession();
	return <SessionProvider session={session}>{children}</SessionProvider>;
}
export default AuthProvider;
