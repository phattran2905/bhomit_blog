"use client";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export function useCategories() {
	const { data, isLoading, error } = useSWR("/api/category", fetcher);

	return { data, isLoading, error };
}

export function useCategoryById(id: string) {
	const { data, isLoading, error } = useSWR(`/api/category/${id}`, fetcher);

	return { data, isLoading, error };
}
