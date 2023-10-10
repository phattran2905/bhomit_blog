"use client";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export default function useAccounts() {
	const { data, isLoading, error } = useSWR("/api/accounts", fetcher);

	return { data, isLoading, error };
}
