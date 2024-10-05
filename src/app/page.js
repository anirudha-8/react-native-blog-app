import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className="flex justify-center items-center flex-col w-full min-h-screen">
				<h1 className="text-4xl font-extrabold text-gray-800 mb-6">
					Welcome to the{" "}
					<span className="">
						Blog
						<span className="text-green-500">Hub</span>
					</span>
				</h1>
				<Link href="/blog-list">
					<button className="text-2xl font-bold bg-green-500 text-white px-4 py-2 rounded-lg">
						Explore
					</button>
				</Link>
			</div>
		</>
	);
}
