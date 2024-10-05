import connectToDb from "@/app/database";
import Blog from "@/app/models/blog";
import Joi from "joi";
import { NextResponse } from "next/server";

const BlogValidationSchema = Joi.object({
	title: Joi.string().required(),
	description: Joi.string().required(),
});

export default async function POST(req) {
	try {
		await connectToDb;

		const extractBlogData = await req.json();

		const { title, description } = extractBlogData;

		const { error } = BlogValidationSchema.validate({ title, description });

		if (error) {
			return NextResponse.json({
				success: false,
				message: error.details[0].message,
			});
		}

		const AddNewBlog = await Blog.create(extractBlogData);
		if (AddNewBlog) {
			return NextResponse.json({
				success: true,
				message: "Blog added successfully!",
			});
		} else {
			return NextResponse.json({
				success: false,
				message: "Something went wrong! Please try again later.",
			});
		}
	} catch (error) {
		console.log(error);
		return NextResponse.json({
			success: false,
			message: "Something went wrong! Please try again later.",
		});
	}
}
