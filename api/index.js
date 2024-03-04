import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "../api/routes/user.route.js";
dotenv.config();

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database Connected");
}
main().catch((err) => console.log(err));

const app = express();

app.use("/api/user", userRouter);

app.listen(3000, () => {
  console.log(`Server running at Port 3000!!`);
});
