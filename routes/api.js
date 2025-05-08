import express from "express";
import getStock from "../controllers/getStock.js";
import createStock from "../controllers/CreateStock.js";
import SignUp from "../controllers/SignUp.js";
const router = express.Router();

router.get("/get", getStock)
router.post("/create", createStock)
router.post("/signup", SignUp)
export default router
