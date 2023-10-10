"use client";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export function useAccounts() {
	const { data, isLoading, error } = useSWR("/api/accounts", fetcher);

	return { data, isLoading, error };
}

export function useAccountById(id: string) {
	const { data, isLoading, error } = useSWR(`/api/accounts/${id}`, fetcher);

	return { data, isLoading, error };
}
