import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { zfd } from "zod-form-data";
import zod from "zod";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
	try {
		const postId = params.id;

		if (!postId) {
			return NextResponse.json({ message: "Not found" }, { status: 404 });
		}

		const post = await prisma.post.findUnique({
			where: { id: postId },
		});
		if (!post) {
			return NextResponse.json({ message: "Not found" }, { status: 404 });
		}

		return NextResponse.json(post, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
	try {
		const postId = params.id;

		if (!postId) {
			return NextResponse.json({ message: "Not found" }, { status: 404 });
		}

		const post = await prisma.post.findUnique({
			where: { id: postId },
		});

		if (!post) {
			return NextResponse.json({ message: "Not found" }, { status: 404 });
		}

		const schema = zfd.formData({
			title: zfd.text(),
			content: zfd.text(zod.string().optional()),
		});
		const formData = await request.json();
		const postData = schema.parse(formData);

		const updatedPost = await prisma.post.update({
			where: { id: postId },
			data: {
				title: postData.title,
			},
		});

		return NextResponse.json(updatedPost, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
	try {
		const postId = params.id;
		if (!postId) {
			return NextResponse.json({ message: "Not found" }, { status: 404 });
		}

		const post = await prisma.post.findUnique({ where: { id: postId } });
		if (!post) {
			return NextResponse.json({ message: "Not found" }, { status: 404 });
		}

		await prisma.post.delete({ where: { id: postId } });

		return NextResponse.json({ message: "OK" }, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}
