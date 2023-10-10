"use client";
import { usePathname } from "next/navigation";

type Props = {};
export default function EditAccount({}: Props) {
	const pathname = usePathname();
	return <div>{pathname}</div>;
}
