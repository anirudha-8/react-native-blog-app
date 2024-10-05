import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
	title: String,
	description: String,
});

const Blog = mongoose.models.Blog || mongoose.models("Blog", BlogSchema);

export default Blog;
