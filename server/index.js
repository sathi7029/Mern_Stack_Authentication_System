import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import dbConnect from "./db/db.config.js";
import userRoutes from "./routes/user.route.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use("/api", userRoutes);
dbConnect(app);
