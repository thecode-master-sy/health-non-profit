"use client";
import { Button } from "@/components/lib/ui/button";
import { deletecookie } from "@/lib/auth/cookies/cookies";
import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";

export const Logout = () => {
	const router = useRouter();

	function logout() {
		deletecookie("user");
		router.push("/studio/login")
	}

	return (
		<Button className="py-1 border-white h-auto text-white md:text-gray-500 md:border-none" onClick={logout} variant="outline">Logout</Button>
	)
}