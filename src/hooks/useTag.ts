"use client";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export function useTags() {
	const { data, isLoading, error } = useSWR("/api/tag", fetcher);

	return { data, isLoading, error };
}

export function useTagById(id: string) {
	const { data, isLoading, error } = useSWR(`/api/tag/${id}`, fetcher);

	return { data, isLoading, error };
}
