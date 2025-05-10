import express from "express";
import signup from "../controllers/authControllers/signup";

const router = express.Router();

router.post("/signup", signup);

export default router;
