import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { zfd } from "zod-form-data";
import zod from "zod";

export async function GET() {
	try {
		const posts = await prisma.post.findMany();

		return NextResponse.json(posts, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ message: error?.message }, { status: 500 });
	}
}

export async function POST(request: NextRequest) {
	try {
		const schema = zfd.formData({
			title: zfd.text(),
			accountId: zfd.text(),
			categoryId: zfd.text(),
			thumbnailImg: zfd.text(zod.string().optional()),
			content: zfd.text(zod.string().optional()),
			tagList: zfd.text(zod.string().optional()),
		});
		const formData = await request.json();
		const postData = schema.parse(formData);

		const newPost = await prisma.post.create({
			data: {
				title: postData.title,
				accountId: postData.accountId,
				categoryId: postData.categoryId,
				thumbnailImg: postData.thumbnailImg,
				content: postData.content,
			},
		});

		return NextResponse.json(newPost, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ message: error?.message }, { status: 500 });
	}
}
