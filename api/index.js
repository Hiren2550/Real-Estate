import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";
import cron from "node-cron";
import userRouter from "../api/routes/user.route.js";
import authRouter from "../api/routes/auth.route.js";
import listingRouter from "../api/routes/listing.route.js";
import uploadRouter from "../api/routes/upload.route.js";
import cookieParser from "cookie-parser";
import path from "path";
dotenv.config();

dns.promises.setServers(["8.8.8.8", "1.1.1.1"]);

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database Connected");
}
main().catch((err) => console.log(err));

const __dirname = path.resolve();
const app = express();
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true, limit: "25mb" }));
app.use(cookieParser());

// Health check endpoint for external cron pingers & uptime monitors
app.get("/api/health", async (req, res) => {
  try {
    const isDbConnected = mongoose.connection.readyState === 1;
    res.status(200).json({
      status: "online",
      service: "PrimeEstate",
      database: isDbConnected ? "connected" : "disconnected",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);
app.use("/api/upload", uploadRouter);

app.use(express.static(path.join(__dirname, "Property-Management/dist")));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "Property-Management", "dist", "index.html")
  );
});

app.use((err, req, res, next) => {
  const statuscode = err.statuscode || 500;
  const message = err.message || "internal Server Error";
  return res.status(statuscode).json({ success: false, statuscode, message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at Port ${PORT}!!`);
});

// Self-ping cron job: runs every 10 minutes to keep Render web service & MongoDB active
const BACKEND_URL =
  process.env.RENDER_EXTERNAL_URL || "https://real-estate-q115.onrender.com";

cron.schedule("*/10 * * * *", async () => {
  try {
    const healthUrl = `${BACKEND_URL}/api/health`;
    const res = await fetch(healthUrl);
    const data = await res.json();
    console.log(
      `[CRON PING] Success at ${new Date().toLocaleTimeString()} -> DB: ${data.database}`
    );
  } catch (error) {
    console.log(`[CRON PING] Self-ping notice: ${error.message}`);
  }
});

