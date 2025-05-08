import express from "express";
import getStock from "../controllers/getStock.js";
import createStock from "../controllers/CreateStock.js";
import SignUp from "../controllers/SignUp.js";
import Authentication from "../middlewares/Authentication.js";
const router = express.Router();

router.get("/get", Authentication, getStock)
router.post("/create", Authentication ,createStock)
router.post("/signup", SignUp)
export default router
