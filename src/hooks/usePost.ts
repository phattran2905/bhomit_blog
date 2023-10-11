"use client";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export function usePosts() {
	const { data, isLoading, error } = useSWR("/api/post", fetcher);

	return { data, isLoading, error };
}

export function usePostById(id: string) {
	const { data, isLoading, error } = useSWR(`/api/post/${id}`, fetcher);

	return { data, isLoading, error };
}
