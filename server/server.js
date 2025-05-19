//importing dependencies
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// importing functions
import connectToDb from "./database/db.js";
import authRouters from "./routers/auth.router.js";

//creating the app
dotenv.config();
const app = express();

//port
const PORT = process.env.PORT || 3000;

//using dependencies
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Pragma",
      "Expires",
    ],
    credentials: true,
  })
);

//using the functions
app.use("/api/auth/", authRouters);

//listening to the app
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectToDb();
});
