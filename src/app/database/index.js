import mongoose from "mongoose";

const connectToDb = async () => {
	const connectionUrl =
		"mongodb+srv://anirudha:JsMaster@cluster0.kfoas.mongodb.net/";

	mongoose
		.connect(connectionUrl)
		.then(() => console.log("Database connected successfully."))
		.catch((e) => console.log(e));
};

export default connectToDb;
