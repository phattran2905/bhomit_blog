import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { zfd } from "zod-form-data";
import zod from "zod";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
	try {
		const tagId = params.id;

		if (!tagId) {
			return NextResponse.json({ message: "Not found" }, { status: 404 });
		}

		const tag = await prisma.tag.findUnique({
			where: { id: tagId },
			select: {
				id: true,
				name: true,
				createdAt: true,
				updatedAt: true,
			},
		});
		if (!tag) {
			return NextResponse.json({ message: "Not found" }, { status: 404 });
		}

		return NextResponse.json(tag, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
	try {
		const tagId = params.id;

		if (!tagId) {
			return NextResponse.json({ message: "Not found" }, { status: 404 });
		}

		const tag = await prisma.tag.findUnique({
			where: { id: tagId },
		});

		if (!tag) {
			return NextResponse.json({ message: "Not found" }, { status: 404 });
		}

		const schema = zfd.formData({
			name: zfd.text(),
		});
		const formData = await request.json();
		const tagData = schema.parse(formData);

		const existingName = await prisma.tag.findUnique({
			where: {
				NOT: {
					id: tagId,
				},
				name: tagData.name,
			},
		});
		if (existingName) {
			return NextResponse.json({ message: "Name is already taken" }, { status: 400 });
		}

		const updatedTag = await prisma.tag.update({
			where: { id: tagId },
			data: {
				name: tagData.name,
			},
			select: {
				id: true,
				name: true,
				createdAt: true,
				updatedAt: true,
			},
		});

		return NextResponse.json(updatedTag, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
	try {
		const tagId = params.id;
		if (!tagId) {
			return NextResponse.json({ message: "Not found" }, { status: 404 });
		}

		const tag = await prisma.tag.findUnique({ where: { id: tagId } });
		if (!tag) {
			return NextResponse.json({ message: "Not found" }, { status: 404 });
		}

		await prisma.tag.delete({ where: { id: tagId } });

		return NextResponse.json({ message: "OK" }, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}
