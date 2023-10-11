import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { zfd } from "zod-form-data";
import zod from "zod";

export async function GET() {
	try {
		const categories = await prisma.tag.findMany();

		return NextResponse.json(categories, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ message: error?.message }, { status: 500 });
	}
}

export async function POST(request: NextRequest) {
	try {
		const schema = zfd.formData({
			name: zfd.text(),
		});
		const formData = await request.json();
		const tagData = schema.parse(formData);

		const existingName = await prisma.tag.findUnique({
			where: { name: tagData.name },
		});
		if (existingName) {
			return NextResponse.json({ message: "Name is already taken" }, { status: 400 });
		}

		const newTag = await prisma.tag.create({
			data: {
				name: tagData.name,
			},
		});

		return NextResponse.json(newTag, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ message: error?.message }, { status: 500 });
	}
}
