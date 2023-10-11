import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
	try {
		const session = await getServerSession();

		if (!session?.user?.email) {
			throw new Error("Not signed in");
		}

		const currentAccount = await prisma.account.findUnique({
			where: {
				email: session.user.email,
			},
			select: {
				id: true,
				username: true,
				email: true,
				description: true,
				image: true,
				createdAt: true,
				updatedAt: true,
			},
		});

		if (!currentAccount) {
			throw new Error("Not signed in");
		}

		return NextResponse.json(currentAccount, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}
}
