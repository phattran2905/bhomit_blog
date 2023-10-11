import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { zfd } from "zod-form-data";
import zod from "zod";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
	try {
		const categoryId = params.id;

		if (!categoryId) {
			return NextResponse.json({ message: "Not found" }, { status: 404 });
		}

		const category = await prisma.category.findUnique({
			where: { id: categoryId },
			select: {
				id: true,
				name: true,
				slug: true,
				image: true,
				createdAt: true,
				updatedAt: true,
			},
		});
		if (!category) {
			return NextResponse.json({ message: "Not found" }, { status: 404 });
		}

		return NextResponse.json(category, { status: 200 });
	} catch (error: any) {
		console.log(error);
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
	try {
		const categoryId = params.id;

		if (!categoryId) {
			return NextResponse.json({ message: "Not found" }, { status: 404 });
		}

		const category = await prisma.category.findUnique({
			where: { id: categoryId },
		});

		if (!category) {
			return NextResponse.json({ message: "Not found" }, { status: 404 });
		}

		const schema = zfd.formData({
			name: zfd.text(),
			slug: zfd.text(),
			image: zfd.text(zod.string().optional()),
		});
		const formData = await request.json();
		const categoryData = schema.parse(formData);

		const existingName = await prisma.category.findUnique({
			where: {
				NOT: {
					id: categoryId,
				},
				name: categoryData.name,
			},
		});
		if (existingName) {
			return NextResponse.json({ message: "Name is already taken" }, { status: 400 });
		}

		if (categoryData.slug) {
			const existingSlug = await prisma.category.findUnique({
				where: {
					NOT: {
						id: categoryId,
					},
					slug: categoryData.slug,
				},
			});
			if (existingSlug) {
				return NextResponse.json({ message: "Email is already taken" }, { status: 400 });
			}
		}

		const updatedCategory = await prisma.category.update({
			where: { id: categoryId },
			data: {
				name: categoryData.name,
				slug: categoryData.slug,
				image: categoryData.image ? categoryData.image : null,
			},
			select: {
				id: true,
				name: true,
				slug: true,
				image: true,
				createdAt: true,
				updatedAt: true,
			},
		});

		return NextResponse.json(updatedCategory, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
	try {
		const categoryId = params.id;
		if (!categoryId) {
			return NextResponse.json({ message: "Not found" }, { status: 404 });
		}

		const category = await prisma.category.findUnique({ where: { id: categoryId } });
		if (!category) {
			return NextResponse.json({ message: "Not found" }, { status: 404 });
		}

		await prisma.category.delete({ where: { id: categoryId } });

		return NextResponse.json({ message: "OK" }, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}
