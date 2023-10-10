import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { zfd } from "zod-form-data";
import bcrypt from "bcrypt";

export async function GET() {
	try {
		const users = await prisma.account.findMany();
		console.log(users);
		// return Response.json({ data: accounts }, { status: 200 });
		return NextResponse.json(users, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ message: error?.message }, { status: 500 });
	}
}

export async function POST(request: NextRequest) {
	try {
		const schema = zfd.formData({
			username: zfd.text(),
			email: zfd.text(),
			password: zfd.text(),
			confirm_password: zfd.text(),
		});
		const formData = await request.json();
		const userData = schema.parse(formData);

		if (userData.password !== userData.confirm_password) {
			return NextResponse.json({ message: "Passwords do not match" }, { status: 400 });
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
		console.log(error);
		return NextResponse.json({ message: error?.message }, { status: 500 });
	}
}
