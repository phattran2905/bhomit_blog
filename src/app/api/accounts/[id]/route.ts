import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { zfd } from "zod-form-data";
import bcrypt from "bcrypt";
import zod from "zod";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
	try {
		const accountId = params.id;

		if (!accountId) {
			return NextResponse.json({ message: "Not found" }, { status: 404 });
		}

		const account = await prisma.account.findUnique({
			where: { id: accountId },
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

		if (!account) {
			return NextResponse.json({ message: "Not found" }, { status: 404 });
		}

		return NextResponse.json(account, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
	try {
		const accountId = params.id;

		if (!accountId) {
			return NextResponse.json({ message: "Not found" }, { status: 404 });
		}

		const account = await prisma.account.findUnique({
			where: { id: accountId },
		});

		if (!account) {
			return NextResponse.json({ message: "Not found" }, { status: 404 });
		}

		const schema = zfd.formData({
			username: zfd.text(),
			email: zfd.text(zod.string().optional()),
			password: zfd.text(zod.string().optional()),
			confirm_password: zfd.text(zod.string().optional()),
		});
		const formData = await request.json();
		const userData = schema.parse(formData);

		const existingUsername = await prisma.account.findUnique({
			where: {
				NOT: {
					id: accountId,
				},
				username: userData.username,
			},
		});
		if (existingUsername) {
			return NextResponse.json({ message: "Username is already taken" }, { status: 400 });
		}

		if (userData.email) {
			const existingEmail = await prisma.account.findUnique({
				where: {
					NOT: {
						id: accountId,
					},
					email: userData.email,
				},
			});
			if (existingEmail) {
				return NextResponse.json({ message: "Email is already taken" }, { status: 400 });
			}
		}

		let hashedPassword;
		if (userData.password && userData.confirm_password) {
			if (userData.password !== userData.confirm_password) {
				return NextResponse.json({ message: "Passwords do not match" }, { status: 400 });
			} else {
				hashedPassword = bcrypt.hashSync(userData.password, bcrypt.genSaltSync());
			}
		}

		const updatedAccount = await prisma.account.update({
			where: { id: accountId },
			data: {
				username: userData.username,
				email: userData.email,
				hashedPassword: hashedPassword ? hashedPassword : account.hashedPassword,
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

		return NextResponse.json(updatedAccount, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
	try {
		const accountId = params.id;
		if (!accountId) {
			return NextResponse.json({ message: "Not found" }, { status: 404 });
		}

		const account = await prisma.account.findUnique({ where: { id: accountId } });
		if (!account) {
			return NextResponse.json({ message: "Not found" }, { status: 404 });
		}

		await prisma.account.delete({ where: { id: accountId } });

		return NextResponse.json({ message: "OK" }, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}
