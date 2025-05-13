import express from "express";
import signup from "../controllers/authControllers/signup.js";
import login from "../controllers/authControllers/login.js";
import verifyToken from "../middlewares/verifyToken.js";
import logout from "../controllers/authControllers/logout.js";
import checkAuth from "../controllers/authControllers/checkAuth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", verifyToken, checkAuth);

export default router;
