import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { zfd } from "zod-form-data";
import zod from "zod";

export async function GET() {
	try {
		const categories = await prisma.category.findMany();

		return NextResponse.json(categories, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ message: error?.message }, { status: 500 });
	}
}

export async function POST(request: NextRequest) {
	try {
		const schema = zfd.formData({
			name: zfd.text(),
			slug: zfd.text(),
			image: zfd.text(zod.string().optional()),
		});
		const formData = await request.json();
		const categoryData = schema.parse(formData);

		const existingName = await prisma.category.findUnique({
			where: { name: categoryData.name },
		});
		if (existingName) {
			return NextResponse.json({ message: "Name is already taken" }, { status: 400 });
		}

		const existingSlug = await prisma.category.findUnique({
			where: { slug: categoryData.slug },
		});
		if (existingSlug) {
			return NextResponse.json({ message: "Slug is already taken" }, { status: 400 });
		}

		const newCategory = await prisma.category.create({
			data: {
				name: categoryData.name,
				slug: categoryData.slug,
				image: categoryData.image,
			},
		});

		return NextResponse.json(newCategory, { status: 200 });
	} catch (error: any) {
		console.log(error);
		return NextResponse.json({ message: error?.message }, { status: 500 });
	}
}
