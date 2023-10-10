import AuthProvider from "@/components/AuthProvider";

export default function layout({ children }: { children: React.ReactNode }) {
	return <AuthProvider>{children}</AuthProvider>;
}
