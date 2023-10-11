import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { zfd } from "zod-form-data";
import bcrypt from "bcrypt";
import zod from "zod";

export async function GET() {
	try {
		const accounts = await prisma.account.findMany({
			select: {
				id: true,
				username: true,
				email: true,
				image: true,
				description: true,
				createdAt: true,
			},
		});

		return NextResponse.json(accounts, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ message: error?.message }, { status: 500 });
	}
}

export async function POST(request: NextRequest) {
	try {
		const schema = zfd.formData({
			username: zfd.text(),
			email: zfd.text(zod.string().optional()),
			password: zfd.text(),
			confirm_password: zfd.text(),
		});
		const formData = await request.json();
		const userData = schema.parse(formData);

		if (userData.password !== userData.confirm_password) {
			return NextResponse.json({ message: "Passwords do not match" }, { status: 400 });
		}

		if (userData.email) {
			const existingEmail = await prisma.account.findUnique({
				where: { email: userData.email },
			});
			if (existingEmail) {
				return NextResponse.json({ message: "Email is already taken" }, { status: 400 });
			}
		}

		const hashedPassword = bcrypt.hashSync(userData.password, bcrypt.genSaltSync());
		const newAccount = await prisma.account.create({
			data: {
				username: userData.username,
				email: userData.email,
				hashedPassword: hashedPassword,
			},
		});

		return NextResponse.json(newAccount, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ message: error?.message }, { status: 500 });
	}
}
