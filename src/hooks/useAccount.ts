import useSwr from "swr";
import fetcher from "@/lib/fetcher";

export default function useAccounts() {
	const { data, isLoading, error } = useSwr("/api/accounts", fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
	});

	return { data, isLoading, error };
}
