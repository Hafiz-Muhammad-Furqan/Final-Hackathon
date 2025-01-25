import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
const app = express();

dotenv.config();
connectDB();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
