"use client";

import AuthProvider from "@/components/AuthProvider";

export default async function App({ children }: { children: React.ReactNode }) {
	return <AuthProvider>{children}</AuthProvider>;
}
