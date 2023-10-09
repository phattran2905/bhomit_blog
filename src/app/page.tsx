import AuthProvider from "@/components/AuthProvider";

export default function App({ children }: { children: React.ReactNode }) {
	return <AuthProvider>{children}</AuthProvider>;
}
